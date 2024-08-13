import userModel from "@/app/server/models/userModel";
import { NextResponse } from "next/server";

export async function GET() {
    const allUsers = await userModel.find({}).select('name email role lastname phoneNumber Address -_id');
    // console.log(allUsers);
    return NextResponse.json({
        message: 'All Users Details',
        allUsers
    })
}