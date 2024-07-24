import connectToDB from "@/app/server/dbconfig/dbconfig";
import courseModel from "@/app/server/models/courseModel";
import { NextRequest, NextResponse } from "next/server"

connectToDB();

export async function DELETE(request: NextRequest) {
    try {
        const courseId = request.nextUrl.searchParams.get('courseId');
        const course = await courseModel.findById(courseId);
        
        if (!course) {
            return NextResponse.json({
                message: 'Course does not exist'
            }, { status: 400 })
        }

        await course.deleteOne();
        return NextResponse.json({
            message: 'Course deleted successfully'
        }, { status: 200 })

    } catch (error: any) {
        return NextResponse.json({
            message: error.message
        }, { status: 400 })
    }
}