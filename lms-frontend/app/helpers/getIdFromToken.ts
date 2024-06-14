import { NextRequest, NextResponse } from "next/server";
import jwt from 'jsonwebtoken'

export const GetIdFromToken = (request: NextRequest) => {
    try {
        const token = request.cookies.get('token')?.value || ''

        if (token != '') {
            const decodedToken: any = jwt.verify(token, process.env.JWT_SECRET!)
            return decodedToken.id
        }
        // if (decodedToken) {
        // }
        return NextResponse.json({
            message: 'jo'
        })

    } catch (error: any) {
        return NextResponse.json({
            error: error.message
        }, { status: 400 })
    }
}