import connectToDB from "@/app/server/dbconfig/dbconfig";
import { NextRequest, NextResponse } from "next/server";

connectToDB();

export const POST = async (request: NextRequest) => {
    const formData = request.formData();
    const image = (await formData).get('image') as unknown as File;
    return NextResponse.json({message: 'image uploaded'},
        { status: 200 }
    )
}