import { NextRequest, NextResponse } from "next/server";

import connectToDB from "@/app/server/dbconfig/dbconfig";
import userModel from "@/app/server/models/userModel";

connectToDB();

export async function PUT(request: NextRequest,
    { params }: { params: { userId: string } }
) {
    try {
        const userId = params.userId;
        const values = await request.json();
        await userModel.findByIdAndUpdate(
            userId,
            {
                $set: values
            }
        );
        return NextResponse.json({
            message: 'User Updated Successfully'
        }
            , { status: 200 })

    } catch (error: any) {

        console.log(error.message);
        return new NextResponse('Internal error', { status: 500 });

    }
}