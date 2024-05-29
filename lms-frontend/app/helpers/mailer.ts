import nodemailer from 'nodemailer';
import userModel from '../server/models/userModel';
import bcryptjs from 'bcryptjs'
import { NextResponse } from 'next/server';

export const sendEmail = async ({ email, userId }: any) => {
    try {
        const hashedToken = await bcryptjs.hash(userId.toString(), 10);

        await userModel.findByIdAndUpdate(userId, {
            forgotPasswordToken: hashedToken,
            forgotPasswordTokenExpiry: Date.now() + 3600000
        },
            { new: true, runValidators: true }
        )

        var transport = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: "92bca9cd86422f",
                pass: "6588e7836d396d"
            }
        });

        const mailOptions = {
            from: 'admin@gmail.com',
            to: email,
            subject: 'Reset Your Password',
            html: `
            <p>
            Click <a href="${process.env.HOME_URL}/resetpassword?token=${hashedToken}">here</a> to reset your password
            </p>
            `
        };

        const mailResponse = await transport.sendMail(mailOptions);
        return mailResponse;

    } catch (error: any) {
        return NextResponse.json({
            error: error.message
        }, { status: 400 });
    }
}