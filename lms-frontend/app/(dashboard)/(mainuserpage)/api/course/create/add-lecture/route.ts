import connectToDB from "@/app/server/dbconfig/dbconfig";
import courseModel from "@/app/server/models/courseModel";
import { SearchParamsContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime";
import { useParams } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

connectToDB();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { title, description } = reqBody;
        const { id } = reqBody.params;
        // console.log(id);


        if (!title || !description) {
            return NextResponse.json({ error: 'All fields are required' },
                { status: 400 }
            )
        }

        const course = await courseModel.findById({ id });
        console.log(course);

        if (!course) {
            return NextResponse.json({ error: 'Course does not exist' },
                { status: 400 }
            )
        }

        course.lectures.push({
            title,
            description,
        });

        course.numberOfLectures = course.lectures.length;
        await course.save();

        return NextResponse.json({
            message: 'Lectures added successfully',
            success: true,
            course
        }, {
            status: 200
        })

    } catch (error: any) {
        return NextResponse.json({ error: error.message },
            { status: 400 }
        )
    }
}