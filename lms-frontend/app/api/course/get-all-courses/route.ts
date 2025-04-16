import { NextResponse } from "next/server";

import courseModel from "@/app/server/models/courseModel";

export async function GET() {
    const courses = await courseModel.find({});
    return NextResponse.json({
        message: 'Courses Fetched Successfully',
        courses
    })
}