import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const GetToken = () => {
    try {
        const cookie = cookies()
        const token = cookie.get('token')?.value || ''
        return JSON.stringify(token);
        
    } catch (error: any) {
        return NextResponse.json({
            error: error.message
        }, { status: 400 })
    }
}