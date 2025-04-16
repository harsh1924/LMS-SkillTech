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
            'isPublished': true
        });
        // console.log(course);
        return NextResponse.json({
            message: 'Course Published',
        }, {status: 200})
        
    } catch (error: any) {
        console.log('Checkout', error.message);
        return NextResponse.json(
            { message: 'Internal Error' },
            { status: 400 });
    }
}