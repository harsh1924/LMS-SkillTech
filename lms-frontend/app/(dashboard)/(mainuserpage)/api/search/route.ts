import courseModel from "@/app/server/models/courseModel";
import { useSearchParams } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {

    const course = await courseModel.find({});
    // const { title: query } = NextRequest.query;
    // console.log(query);
    // const title = useSearchParams();
    // console.log(title);
    
    

    return NextResponse.json({
        message: 'at api',
        course
    })
}