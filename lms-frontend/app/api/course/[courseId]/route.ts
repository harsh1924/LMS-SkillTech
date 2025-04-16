import { NextRequest, NextResponse } from "next/server";

import connectToDB from "@/app/server/dbconfig/dbconfig";
import courseModel from "@/app/server/models/courseModel";
import userModel from "@/app/server/models/userModel";

connectToDB();

export async function PUT(request: NextRequest,
    { params }: { params: { courseId: string; userId: string } }
) {
    try {
        await userModel.findById(params.userId);
        
        const courseId = params.courseId;
        const values = await request.json();

        await courseModel.findByIdAndUpdate(
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