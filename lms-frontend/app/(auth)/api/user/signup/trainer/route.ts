import bcryptjs from 'bcryptjs'
import connectToDB from '@/app/server/dbconfig/dbconfig'
import userModel from "@/app/server/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import sendEmail from '@/app/helpers/mailer';

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
            return NextResponse.json({ error: 'User already exists' }, { status: 400 })
        }

        //hashing password
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        const user = new userModel({
            name,
            email,
            password: hashedPassword,
            phoneNumber,
            role: 'TRAINER'
        });

        await user.save();

        const subject = 'New Trainer';
        const mailtrapEmail = 'harshrpanwar@gmail.com'
        const adminMessage = `
    <p>
        A new trainer has created account on the website:
    </p>
    <p>
        Trainer Name: ${user.name}
    </p>
    <p>
        Trainer Email: ${user.email}
    </p>
    <p>
        Trainer Phone Number: ${user.phoneNumber}
    </p>
    `;
    // <p>
    //     Date of Account Creation: ${date}/${month}/${year} ${hours + 5}:${minutes + 30}
    // </p>

        await sendEmail(mailtrapEmail, subject, adminMessage);

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