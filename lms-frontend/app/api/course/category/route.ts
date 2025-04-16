import courseModel from "@/app/server/models/courseModel";
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
    try {

        const category = request.nextUrl.searchParams.get('category');
        
        const courses = await courseModel.find({
            'category': category
        }).select('-lectures')
        return NextResponse.json({
            message: 'Courses found',
            courses
        }, { status: 200 })

    } catch (error: any) {
        return NextResponse.json({
            error: error.message
        }, { status: 400 })
    }
}