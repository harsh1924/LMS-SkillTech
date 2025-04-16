import courseModel from "@/app/server/models/courseModel";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest,
    { params }: {
        params: { courseId: string }
    }
) {
    try {
        const course = await courseModel.findByIdAndUpdate(
            params.courseId,
        {
            'isPublished': false
        });
        // console.log(course);
        return NextResponse.json({
            message: 'Course Unpublished',
        }, {status: 200})
        
    } catch (error: any) {
        return NextResponse.json(
            { message: 'Internal Error' },
            { status: 400 });
    }
}