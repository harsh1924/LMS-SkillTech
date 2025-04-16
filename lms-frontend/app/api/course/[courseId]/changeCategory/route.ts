import courseModel from "@/app/server/models/courseModel";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest,
    { params }: {
        params: { courseId: string }
    }
) {
    try {
        const courseId = params.courseId;
        const category = await request.json();
        const course = await courseModel.findByIdAndUpdate(
            courseId,
            {
                $set: category
            }
        );

        return NextResponse.json({
            message: 'Course Updated Successfully'
        }, { status: 200 })
    } catch (error: any) {
        console.log(error.message);
        return NextResponse.json({
            message: 'Error'
        }, { status: 400 })
    }

}