import { NextRequest, NextResponse } from "next/server";

import connectToDB from "@/app/server/dbconfig/dbconfig";
import courseModel from "@/app/server/models/courseModel";
import userModel from "@/app/server/models/userModel";

connectToDB();

export async function PUT(request: NextRequest,{
    params
}: {
    params: { courseId: string; userId: string }
}) {
    try {
        const user = await userModel.findById(params.userId);

        const userProgress = user.userProgress;
        const courseIndex = userProgress.findIndex((e: { courseId: string; course: any }) => e.course.id === params.courseId)
        const currentCourse = userProgress[courseIndex];
        currentCourse.isSurveyed = true;
        await user.save();

        return NextResponse.json({
            message: 'Set isSurvyed'
        }, { status: 200 })
    } catch (error: any) {
        console.log(error.message);

        return NextResponse.json({
            message: 'Internal Error in survey page'
        }, { status: 400 })
    }
}