import nodemailer from 'nodemailer';
import userModel from '../server/models/userModel';
import bcryptjs from 'bcryptjs'
import { NextResponse } from 'next/server';
import { Html } from 'next/document';

export const transpoter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_HOST),
    secure: false,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD
    }
});

export const sendEmail = async (
    to: string,
    subject: string,
    html: string
): Promise<string | null> => {
    const info = await transpoter.sendMail({
        from: process.env.EMAIL_FROM,
        to: to,
        subject: subject,
        html: html
    })

    return info?.messageId;
}