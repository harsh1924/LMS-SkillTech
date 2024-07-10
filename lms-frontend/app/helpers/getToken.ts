import { NextRequest, NextResponse } from "next/server";

export const GetToken = (request: NextRequest) => {
    try {
        const token = request.cookies.get('token')?.value || ''
        return JSON.stringify(token);
        
    } catch (error: any) {
        return NextResponse.json({
            error: error.message
        }, { status: 400 })
    }
}