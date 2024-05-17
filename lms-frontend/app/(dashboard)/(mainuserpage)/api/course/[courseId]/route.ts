import connectToDB from "@/app/server/dbconfig/dbconfig";
import courseModel from "@/app/server/models/courseModel";
import { NextRequest, NextResponse } from "next/server";

connectToDB();

export async function PUT(request: NextRequest,
    { params }: { params: { courseId: string } }
) {
    try {
        const courseId = params.courseId;
        const values = await request.json();

        const course = await courseModel.findByIdAndUpdate(
            courseId,
            {
                $set: values
            }
        );
        return NextResponse.json({
            message: 'Course Updated Successfully'
        }
            , { status: 200 })

    } catch (error: any) {

        console.log(error.message);
        return new NextResponse('Internal error', { status: 500 });

    }
}