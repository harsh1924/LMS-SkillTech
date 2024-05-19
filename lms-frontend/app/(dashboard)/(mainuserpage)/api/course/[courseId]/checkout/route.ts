import courseModel from "@/app/server/models/courseModel";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest,
    { params }: {
        params: { courseId: string }
    }
) {
    try {
        const course = await courseModel.findById(params.courseId);
        console.log(course);
        
    } catch (error: any) {
        console.log('Checkout', error.message);
        return NextResponse.json(
            { message: 'Internal Error' },
            { status: 400 });
    }
}