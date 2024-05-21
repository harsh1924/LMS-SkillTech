import { NextRequest, NextResponse } from "next/server";
import jwt from 'jsonwebtoken'

export const GetToken = (request: NextRequest) => {
    try {
        const token = request.cookies.get('token')?.value || ''
        return token
        
    } catch (error: any) {
        return NextResponse.json({
            error: error.message
        }, { status: 400 })
    }
}