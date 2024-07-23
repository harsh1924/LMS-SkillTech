import bcryptjs from 'bcryptjs'
import connectToDB from '@/app/server/dbconfig/dbconfig'
import userModel from "@/app/server/models/userModel";
import { NextRequest, NextResponse } from "next/server";

connectToDB();

export async function POST(request: NextRequest) {

    try {
        const reqBody = await request.json();
        const { name, email, password, phoneNumber } = reqBody;

        //error handling
        if (!name || !password || !email || !phoneNumber) {
            return NextResponse.json({ error: 'Please provide all the details' }, { status: 400 })
        }

        // checking user exists or not
        const userExists = await userModel.findOne({ email });
        if (userExists) {
            return NextResponse.json({ 
                error: 'User already exists' ,
            }, { status: 400 })
        }

        //hashing password
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        const user = new userModel({
            name,
            email,
            password: hashedPassword,
            phoneNumber
        });

        await user.save();
        return NextResponse.json({
            message: 'User created successfully',
            success: true,
            user
        }, { status: 201 });

    } catch (error: any) {
        return NextResponse.json({ error: error.message },
            { status: 401 })
    }
}