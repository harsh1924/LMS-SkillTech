import userModel from "@/app/server/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from 'bcryptjs'
import connectToDB from "@/app/server/dbconfig/dbconfig";

connectToDB();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { password, confirmPassword, resetToken } = reqBody;

        if (!password && !confirmPassword) {
            return NextResponse.json({
                message: 'Password is required'
            }, {
                status: 400
            })
        }

        const user = await userModel.findOne({ forgotPasswordToken: resetToken });
        if (!user) {
            return NextResponse.json({
                error: 'Token is invalid or expired'
            },
                { status: 400 }
            )
        }

        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        user.password = hashedPassword;
        user.forgotPasswordExpiry = undefined;
        user.forgotPasswordToken = undefined;

        await user.save();
        return NextResponse.json({ message: 'Password Changed' },
            { status: 200 }
        )
    } catch (error: any) {
        return NextResponse.json({
            error: error.message
        },
            { status: 400 }
        )
    }
}