import { NextRequest, NextResponse } from "next/server";

import { GetToken } from "@/app/helpers/getToken";
import connectToDB from "@/app/server/dbconfig/dbconfig";

connectToDB()

export async function GET(request: NextRequest) {
    try {
        const token = await GetToken()

        return NextResponse.json({
            message: 'Token',
            token
        })
    } catch (error: any) {
        return NextResponse.json({
            error: error.message
        }, { status: 400 })
    }
}