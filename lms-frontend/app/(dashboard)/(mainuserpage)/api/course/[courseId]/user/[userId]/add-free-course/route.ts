import courseModel from "@/app/server/models/courseModel";
import purchaseModel from "@/app/server/models/purchaseModel";
import userModel from "@/app/server/models/userModel";
import { NextRequest, NextResponse } from "next/server";

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
            userId: userId
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