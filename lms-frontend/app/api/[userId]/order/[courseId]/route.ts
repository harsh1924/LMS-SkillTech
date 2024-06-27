import Razorpay from 'razorpay';
import { NextRequest, NextResponse } from 'next/server';
import userModel from '@/app/server/models/userModel';
import courseModel from '@/app/server/models/courseModel';

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID!,
    key_secret: process.env.RAZORPAY_SECRET_KEY,
});

export async function POST(request: NextRequest,
    { params }: {
        params: { courseId: string; userId: string }
    }
) {

    const user = await userModel.findById(params.userId);
    const course = await courseModel.findById(params.courseId);

    const userProgress = user.userProgress;

    const courseIndex = userProgress.findIndex((e: { courseId: string; course: any }) => e.course.id === params.courseId)
    const currentCourse = userProgress[courseIndex];
    if (currentCourse) {
        return NextResponse.json(
            { message: 'Course Already Purchased', isOk: false },
            { status: 400 }
        );
    }

    const { amount, currency } = (await request.json()) as {
        amount: string;
        currency: string;
    };

    var options = {
        amount: amount,
        currency: currency,
        receipt: 'rcp1',
    };

    const order = await razorpay.orders.create(options);
     console.log(order);
    return NextResponse.json({
        orderId: order.id
    }, { status: 200 });
}