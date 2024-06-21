import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import userModel from '@/app/server/models/userModel';
import courseModel from '@/app/server/models/courseModel';
import purchaseModel from '@/app/server/models/purchaseModel';

const generatedSignature = (
    razorpayOrderId: string,
    razorpayPaymentId: string
) => {
    const keySecret = process.env.RAZORPAY_SECRET_KEY;
    if (!keySecret) {
        throw new Error(
            'Razorpay key secret is not defined in environment variables.'
        );
    }
    const sig = crypto
        .createHmac('sha256', keySecret)
        .update(razorpayOrderId + '|' + razorpayPaymentId)
        .digest('hex');
    return sig;
};


export async function POST(request: NextRequest,
    { params }: {
        params: { courseId: string; userId: string }
    }
) {

    const user = await userModel.findById(params.userId);
    const course = await courseModel.findById(params.courseId);

    const { orderCreationId, razorpayPaymentId, razorpaySignature } =
        await request.json();

    const signature = generatedSignature(orderCreationId, razorpayPaymentId);
    if (signature !== razorpaySignature) {
        return NextResponse.json(
            { message: 'payment verification failed', isOk: false },
            { status: 400 }
        );
    }

    const userId = params.userId

    await purchaseModel.create({
        courseId: params.courseId,
        userId: params.userId,
        paymentOrderId: razorpayPaymentId
    });
    // user.userProgress.push({
    //     course: {
    //         id: params.courseId,
    //         lectures: course.lectures
    //     },
    // });

    if (!course.isFree) {
        await userModel.updateOne(
            { _id: userId },
            {
                $push: {
                    userProgress: {
                        course: {
                            id: params.courseId,
                            lectures: course.lectures
                        }
                    },
                }
            }
        )
    }
    // await user.save();

    return NextResponse.json(
        { message: 'payment verified successfully', isOk: true },
        { status: 200 }
    );
}