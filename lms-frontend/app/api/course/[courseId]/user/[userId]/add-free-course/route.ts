import { NextRequest, NextResponse } from "next/server";

import sendEmail from "@/app/helpers/mailer";
import courseModel from "@/app/server/models/courseModel";
import purchaseModel from "@/app/server/models/purchaseModel";
import userModel from "@/app/server/models/userModel";

export async function POST(request: NextRequest, {
    params
}: {
    params: { courseId: string; userId: string }
}) {
    try {
        const reqBody = await request.json();
        const { courseId, userId } = reqBody;

        const user = await userModel.findById(userId);
        const course = await courseModel.findById(courseId);

        const findPurchase = await purchaseModel.findOne({
            'userId': userId,
            'courseId': courseId
        })

        if (findPurchase) {
            return NextResponse.json({
                message: 'Course Already Purchased',
                success: false,
            }, {
                status: 400
            })
        }

        const purchase = new purchaseModel({
            courseId: courseId,
            userId: userId,
            userName: user.name,
            courseName: course.title
        });

        await purchase.save();

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
        await user.save();

        const timestamp = Date.now();
        const currentDate = new Date(timestamp);
        // Extract hours, minutes, and date from the currentDate object
        const hours = currentDate.getHours();
        const minutes = currentDate.getMinutes();
        const date = currentDate.getDate();
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();

        const subject = 'New Free Course';
        const email = user.email
        const message = `Hi ${user.name} 
    <br/>
    <p>
        Your recent purchase of the free course - ${course.title} has been successfully processed. You are now enrolled and have full access to the course materials.
    </p>
    <p>
        Course Name: ${course.title}
    </p>
    <p>
        Date of Purchase: ${date}/${month}/${year} ${hours}:${minutes}
    </p>

    You can start exploring the course content immediately by logging into your account on our platform. If you encounter any issues or have questions about the course, feel free to reach out to our support team`;

        await sendEmail(email, subject, message);

        const adminSubject = 'New Free Course Purchase Notification';
        const adminEmail = 'info@skilltechindia.net'
        const adminMessage = `
        <p>
        A new free course purchase has been made:
    </p>
    <p>
        Course Name: ${course.title}
    </p>
    <p>
        User Name: ${user.name}
    </p>
    <p>
        Date of Purchase: ${date}/${month}/${year} ${hours}:${minutes}
    </p>
    `;

        await sendEmail(adminEmail, adminSubject, adminMessage);

        return NextResponse.json({
            message: 'Course Creation Successfull',
            success: true,
            purchase
        }, {
            status: 201
        })
    } catch (error: any) {
        console.log(error.message);

        return NextResponse.json({
            error: error.message
        }, { status: 400 });
    }
}