import { NextRequest, NextResponse } from "next/server";

import courseModel from "@/app/server/models/courseModel";

export async function GET(request: NextRequest, { params }: {
    params: { courseId: string }
}) {
    try {
        // const reqBody = await request.json();
        const id = params.courseId
        const course = await courseModel.findById(id);
        return NextResponse.json({
            message: 'User Details',
            success: true,
            course
        })
    } catch (error: any) {
        
        return NextResponse.json({
            error: error.message
        }, { status: 400 })
    }
}