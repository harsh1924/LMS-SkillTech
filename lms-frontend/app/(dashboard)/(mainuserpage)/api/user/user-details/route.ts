import { GetIdFromToken } from "@/app/helpers/getIdFromToken";
import connectToDB from "@/app/server/dbconfig/dbconfig";
import userModel from "@/app/server/models/userModel";
import { NextRequest, NextResponse } from "next/server";

connectToDB()

export async function GET(request: NextRequest) {
    try {
        const userId = await GetIdFromToken(request)
        
        const user = await userModel.findOne({ _id: userId })
        return NextResponse.json({
            message: 'id',
            user
        })
    } catch (error: any) {
        return NextResponse.json({
            error: error.message
        }, { status: 400 })
    }
}
// GetIdFromToken()