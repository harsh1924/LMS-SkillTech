import { NextResponse } from "next/server";

import purchaseModel from "@/app/server/models/purchaseModel";

export async function GET() {
    const payments = await purchaseModel.find({}).select('-_id -__v');
    // console.log(payments);
    return NextResponse.json({
        message: 'All Payment Details',
        payments
    })
}