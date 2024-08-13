import purchaseModel from "@/app/server/models/purchaseModel";
import { NextResponse } from "next/server";

export async function GET() {
    const enrolledUsers = await purchaseModel.find({}).select('userName courseName -_id createdAt');
    // console.log(enrolledUsers);
    return NextResponse.json({
        message: 'All Enrolled User Details',
        enrolledUsers
    })
}