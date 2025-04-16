import { NextResponse } from "next/server";

import purchaseModel from "@/app/server/models/purchaseModel";

export async function GET() {
    const enrolledUsers = await purchaseModel.find({}).select('userName courseName -_id createdAt');
    // console.log(enrolledUsers);
    return NextResponse.json({
        message: 'All Enrolled User Details',
        enrolledUsers
    })
}