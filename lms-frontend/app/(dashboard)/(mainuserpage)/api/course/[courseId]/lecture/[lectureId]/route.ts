import courseModel from "@/app/server/models/courseModel";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest,
    { params }: { params: { courseId: string; lectureId: string } }
) {
    try {
        const values = await request.json();
        console.log(values);


        const course = await courseModel.findById(params.courseId)
        console.log(course);

        const chapter = course.lectures;
        console.log(chapter);

        // console.log(chapter);

        const lecture = chapter.findIndex((e: { id: string; }) => e.id === params.lectureId)
        console.log(lecture);

        const finalChapter = chapter[lecture];
        console.log(finalChapter);


        if (values.title) finalChapter.title = values.title;
        if (values.description) finalChapter.description = values.description;
        if (values.videoUrl) finalChapter.videoUrl = values.videoUrl;

        await course.save();
        console.log(finalChapter);

        const finalChapterId = finalChapter._id;
        console.log(finalChapterId);

        return NextResponse.json({
            message: 'Doen'
        })
    } catch (error: any) {
        console.log('wrong');

        return NextResponse.json({
            error: error.message
        }, { status: 400 })
    }
}