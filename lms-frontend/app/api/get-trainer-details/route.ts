import { NextResponse } from "next/server";

import userModel from "@/app/server/models/userModel";

export async function GET() {
    const allUsers = await userModel.find({
        'role': 'TRAINER'
    }).select('name email role lastname phoneNumber Address -_id');
    // console.log(allUsers);
    return NextResponse.json({
        message: 'All Users Details',
        allUsers
    })
}