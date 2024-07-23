import connectToDB from "@/app/server/dbconfig/dbconfig";
import userModel from "@/app/server/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'

connectToDB();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { email, password } = reqBody;

        // checking user exists or not
        const user = await userModel.findOne({ email }).select('+password');
        if (!user) {
            return NextResponse.json({ error: 'User does not exsits' },
                { status: 400 }
            )
        }

        if (user.role === 'USER' || user.role === 'TRAINER') {
            return NextResponse.json({ error: 'Unauthorized! Only Admin can Login' },
                { status: 400 }
            )
        }

        // checking password is correct or not
        const isPasswordValid = await bcryptjs.compare(password, user.password);
        if (!isPasswordValid) {
            return NextResponse.json({ error: 'Invalid Password' }, { status: 400 })
        }

        // create token data
        const tokenData = {
            id: user._id,
            email: user.email,
            role: user.role
        }
        // create token
        const token = await jwt.sign(tokenData, process.env.JWT_SECRET!, { expiresIn: '1d' });

        const response = NextResponse.json({
            message: 'Login Successfull',
            success: true,
            user
        })

        response.cookies.set('token', token,
            {
                // domain: 'skilltechindia.net',
                httpOnly: true,
                path: '/',
                secure: true,
                sameSite: "strict",
                maxAge: 7 * 24 * 60 * 60,
            });


        return response;


    } catch (error: any) {
        return NextResponse.json({ error: error.message },
            { status: 400 }
        )
    }
}