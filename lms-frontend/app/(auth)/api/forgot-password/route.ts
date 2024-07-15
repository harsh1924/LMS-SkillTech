import userModel from "@/app/server/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from 'bcryptjs'
import connectToDB from "@/app/server/dbconfig/dbconfig";
import sendEmail from "@/app/helpers/mailer";

connectToDB();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { email } = reqBody;

        if (!email) {
            return NextResponse.json({
                message: 'Email is required'
            }, {
                status: 400
            })
        }

        const user = await userModel.findOne({ email });
        if (!user) {
            return NextResponse.json({ error: 'User does not exists' },
                { status: 400 }
            )
        }

        const resetToken = await bcryptjs.hash(email, 10);
        user.forgotPasswordToken = resetToken;
        user.forgotPasswordTokenExpiry = Date.now() + 3600000;
        await user.save();

        const resetPasswordUrl = `https://skilltechindia.net/reset-password?resetToken=${resetToken}`;

        // We here need to send an email to the user with the token
        const subject = 'Reset Password';
        const message = `Hi ${email} 
        <br/>
         You can reset your password by clicking <br/>  
        <a href=${resetPasswordUrl} target="_blank" class="rounded-md px-5 py-2 bg-[#0056d2] text-white oxygen-bold hover:bg-[#00419e] transition-all ease-in-out duration-300"> 
        Reset your password
        </a>
        <br/> If the above link does not work for some reason then copy paste this link in new tab ${resetPasswordUrl}. <br/> If you have not requested this, kindly ignore.`;

        try {
            await sendEmail(email, subject, message);

            return NextResponse.json({ message: 'Reset Password Token sent' },
                { status: 200 }
            )
        } catch (error: any) {
            user.forgotPasswordToken = undefined;
            user.forgotPasswordExpiry = undefined;

            await user.save();

            return NextResponse.json({ error: error.message },
                { status: 400 }
            )
        }

    } catch (error: any) {
        return NextResponse.json({
            error: error.message
        },
            { status: 400 }
        )
    }
}