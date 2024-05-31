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

        const purchase = new purchaseModel({
            courseId: courseId,
            userId: userId
        });

        await purchase.save();

        user.userProgress.push({
            course: {
                id: courseId,
                lectures: course.lectures
            },
        });
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