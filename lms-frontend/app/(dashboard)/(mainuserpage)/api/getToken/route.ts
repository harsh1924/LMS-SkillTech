import { GetIdFromToken } from "@/app/helpers/getIdFromToken";
import { GetToken } from "@/app/helpers/getToken";
import connectToDB from "@/app/server/dbconfig/dbconfig";
import userModel from "@/app/server/models/userModel";
import { NextRequest, NextResponse } from "next/server";

connectToDB()

export async function GET(request: NextRequest) {
    try {
        const token = await GetToken(request)
        console.log('at api:' ,token);
        
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
// GetIdFromToken()