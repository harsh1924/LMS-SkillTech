import userModel from "@/app/server/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from 'bcryptjs'
import { sendEmail } from "@/app/helpers/mailer";


export async function POST(request: NextRequest) {
    try {
        console.log('oj');
        
        const { email } = await request.json();
        console.log(email);

        // if (!email) {
        //     return NextResponse.json({
        //         message: 'Email is required'
        //     }, {
        //         status: 400
        //     })
        // }

        // const user = await userModel.findOne({ email });
        // if (!user) {
        //     return NextResponse.json({
        //         message: 'User does not exist'
        //     }, {
        //         status: 400
        //     })
        // }

        console.log('At The API');


        // const resetToken = await bcryptjs.hash(email, 10);
        // user.forgotPasswordToken = resetToken;
        // user.forgotPasswordTokenExpiry = Date.now() + 3600000;
        // await user.save();

        // const resetPasswordUrl = `${process.env.FRONTEND_URL}/reset-password/${resetToken}`;

        // // We here need to send an email to the user with the token
        // const subject = 'Reset Password';
        // const message = `You can reset your password by clicking <a href=${resetPasswordUrl} target="_blank">Reset your password</a>\nIf the above link does not work for some reason then copy paste this link in new tab ${resetPasswordUrl}.\n If you have not requested this, kindly ignore.`;

        // await sendEmail(email, subject, message);
        // await user.save();

        return NextResponse.json({
            message: 'Done'
        }, {
            status: 200
        })

    } catch (error: any) {
        return NextResponse.json({
            message: error.message
        }, {
            status: 400
        })
    }
}