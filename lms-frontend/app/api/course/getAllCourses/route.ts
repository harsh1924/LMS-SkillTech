import connectToDB from "@/app/server/dbconfig/dbconfig";
import courseModel from "@/app/server/models/courseModel";
import { NextRequest, NextResponse } from "next/server";

connectToDB();

export async function GET(request: NextRequest) {
    try {
        const courses = await courseModel.find({}).select('-lectures');

        return NextResponse.json({
            message: 'All Courses',
            success: true,
            courses
        }, { status: 200 });
        
    } catch (error: any) {
        return NextResponse.json({ error: error.message },
            { status: 400 })
    }
}