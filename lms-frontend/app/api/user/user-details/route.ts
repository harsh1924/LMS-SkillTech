import { NextRequest, NextResponse } from "next/server";

import { GetIdFromToken } from "@/app/helpers/getIdFromToken";
import connectToDB from "@/app/server/dbconfig/dbconfig";
import userModel from "@/app/server/models/userModel";

connectToDB()

export async function GET(request: NextRequest) {
    try {
        const userId = await GetIdFromToken(request)
        
        const user = await userModel.findOne({ _id: userId })
        return NextResponse.json({
            message: 'User',
            user
        })
    } catch (error: any) {
        return NextResponse.json({
            error: error.message
        }, { status: 400 })
    }
}
// GetIdFromToken()