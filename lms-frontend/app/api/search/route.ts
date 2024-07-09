import connectToDB from "@/app/server/dbconfig/dbconfig";
import courseModel from "@/app/server/models/courseModel";
import { NextRequest, NextResponse } from "next/server";

connectToDB();

export async function GET(
    request: NextRequest, res: NextResponse
) {
    const q = request.nextUrl.searchParams.get('q');
    try {
        const courses = await courseModel.find({
            'title': { $regex: q, $options: 'i' },
        })

        return NextResponse.json({
            message: 'Courses',
            courses
        }, { status: 200 })
    } catch (error: any) {
        return NextResponse.json({
            error: error.message
        })
    }

}