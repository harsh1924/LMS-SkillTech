import courseModel from "@/app/server/models/courseModel";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest,
    { params }: { params: { courseId: string; lectureId: string } }
) {
    try {
        const values = await request.json();
        const course = await courseModel.findById(params.courseId)
        const chapter = course.lectures;

        const lecture = chapter.findIndex((e: { id: string; }) => e.id === params.lectureId)
        const finalChapter = chapter[lecture];

        if (values.title) finalChapter.title = values.title;
        if (values.description) finalChapter.description = values.description;
        if (values.videoUrl) finalChapter.videoUrl = values.videoUrl;

        await course.save();

        return NextResponse.json({
            message: 'Done'
        })
    } catch (error: any) {
        return NextResponse.json({
            error: error.message
        }, { status: 400 })
    }
}