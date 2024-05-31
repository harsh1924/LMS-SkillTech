import courseModel from "@/app/server/models/courseModel";
import type { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
    request: NextRequest, res: NextResponse
) {
    try {
        const q = request.nextUrl.searchParams.get('q');
        console.log(q);


        const courses = await courseModel.find({
            'title': { $regex: q, $options: 'i' },
        })
        // console.log(courses);
        

        return NextResponse.json({
            message: 'i',
            courses
        }, { status: 200 })
    } catch (error: any) {
        return NextResponse.json({
            error: error.message
        })
    }

}