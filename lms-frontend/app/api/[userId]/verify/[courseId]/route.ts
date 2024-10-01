import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import userModel from '@/app/server/models/userModel';
import courseModel from '@/app/server/models/courseModel';
import purchaseModel from '@/app/server/models/purchaseModel';
import sendEmail from '@/app/helpers/mailer';

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

    const userProgress = user.userProgress;

    const courseIndex = userProgress.findIndex((e: { courseId: string; course: any }) => e.course.id === params.courseId)
    const currentCourse = userProgress[courseIndex];
    if (currentCourse && !course.isFree) {
        return NextResponse.json(
            { message: 'Course Already Purchasedgi', isOk: false },
            { status: 400 }
        );
    }

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


    if (!course.isFree) {
        await userModel.updateOne(
            { _id: userId },
            {
                $push: {
                    userProgress: {
                        course: {
                            id: params.courseId,
                            lectures: course.lectures
                        },
                        resource: course.resource,
                        currentLectureURL: course.lectures[0].videoUrl,
                        currentLectureTitle: course.lectures[0].title,
                        currentLectureDescription: course.lectures[0].description,
                    },
                }
            }
        )
    }

    await purchaseModel.create({
        courseId: params.courseId,
        userId: params.userId,
        paymentOrderId: razorpayPaymentId,
        userName: user.name,
        courseName: course.title
    });

    const timestamp = Date.now();
    const currentDate = new Date(timestamp);
    // Extract hours, minutes, and date from the currentDate object
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const date = currentDate.getDate();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const subject = 'New Course';
    const email = user.email
    const message = `Hi ${user.name} 
    <br/>
    <p>
        Your recent purchase of the ${course.title} has been successfully processed. You are now enrolled and have full access to the course materials.
    </p>
    <p>
        Course Name: ${course.title}
    </p>
    <p>
        Payment Number: ${razorpayPaymentId}
    </p>
    <p>
        Date of Purchase: ${date}/${month}/${year} ${hours}:${minutes}
    </p>

    You can start exploring the course content immediately by logging into your account on our platform. If you encounter any issues or have questions about the course, feel free to reach out to our support team`;

    await sendEmail(email, subject, message);

    const adminSubject = 'New Course Purchase Notification';
    const adminEmail = 'info@skilltechindia.net'
    const adminMessage = `
    <p>
        A new course purchase has been made:
    </p>
    <p>
        Course Name: ${course.title}
    </p>
    <p>
        User Name: ${user.name}
    </p>
    <p>
        Payment Number: ${razorpayPaymentId}
    </p>
    <p>
        Date of Purchase: ${date}/${month}/${year} ${hours}:${minutes}
    </p>
    `;

    await sendEmail(adminEmail, adminSubject, adminMessage);

    return NextResponse.json(
        { message: 'payment verified successfully', isOk: true },
        { status: 200 }
    );
}