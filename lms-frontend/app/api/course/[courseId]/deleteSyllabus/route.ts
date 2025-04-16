import { NextRequest, NextResponse } from "next/server";

import courseModel from "@/app/server/models/courseModel";

export async function PUT(request: NextRequest,
    { params }: { params: { courseId: string } }
) {
    try {
        const courseId = params.courseId;
        const req = await request.json();
        if (req.type == 'Syllabus') {
            await courseModel.findByIdAndUpdate(
                courseId,
                {
                    'syllabus': ''
                }
            )
        } else if (req.type == 'Resource') {
            await courseModel.findByIdAndUpdate(
                courseId,
                {
                    'resource': ''
                }
            )
        }

        return NextResponse.json({
            message: 'Resource Link Removed'
        }, { status: 200 })
    } catch (error: any) {
        console.log(error.message);

        return NextResponse.json({
            message: 'Something went wrong'
        }, { status: 400 })
    }
}