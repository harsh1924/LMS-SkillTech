import { NextRequest, NextResponse } from "next/server";

import userModel from "@/app/server/models/userModel";

export async function GET(request: NextRequest, { params }: {
    params: { userId: string }
}) {
    try {
        // const reqBody = await request.json();
        const id = params.userId
        const user = await userModel.findById(id);
        return NextResponse.json({
            message: 'User Details',
            success: true,
            user
        })
    } catch (error: any) {
        
        return NextResponse.json({
            error: error.message
        }, { status: 400 })
    }
}