import connectToDB from "@/app/server/dbconfig/dbconfig";
import courseModel from "@/app/server/models/courseModel";
import { NextRequest, NextResponse } from "next/server";

connectToDB();

export async function POST(request: NextRequest, { params }: {
    params: { courseId: string }
}) {
    try {
        const reqBody = await request.json();
        const { title, description, videoUrl } = reqBody;
        const id = params.courseId;

        if (!title || !description || !videoUrl) {
            return NextResponse.json({ error: 'All fields are required' },
                { status: 400 }
            )
        }

        const course = await courseModel.findById(id);
        if (!course) {
            return NextResponse.json({ error: 'Course does not exist' },
                { status: 400 }
            )
        }

        course.lectures.push({
            title,
            description,
            videoUrl,
        });

        course.numberOfLectures = course.lectures.length;
        const last = course.lectures.length
        await course.save();
        const courseLectures = course.lectures;
        console.log(courseLectures[last - 1]);
        const lastLecture = courseLectures[last - 1]

        return NextResponse.json({
            message: 'Lectures added successfully',
            success: true,
            lastLecture
        }, {
            status: 200
        })

    } catch (error: any) {
        console.log(error.message);

        return NextResponse.json({ error: error.message },
            { status: 400 }
        )
    }
}