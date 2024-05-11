import userModel from "@/app/server/models/userModel";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest,
    { params }: {
        params: { userId: string }
    }
) {
    try {
        console.log(params.userId);
        const id = params.userId
        const user = await userModel.findById(id)
    } catch (error: any) {
        return NextResponse.json({
            error: error.message
        }, { status: 400 })
    }
}