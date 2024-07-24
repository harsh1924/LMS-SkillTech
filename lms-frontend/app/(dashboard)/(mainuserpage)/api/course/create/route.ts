import connectToDB from "@/app/server/dbconfig/dbconfig";
import courseModel from "@/app/server/models/courseModel";
import { NextRequest, NextResponse } from "next/server";

connectToDB();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { title, description, category, createdBy, price } = reqBody;

        if (!title || !description || !category || !createdBy || !price) {
            return NextResponse.json({ error: 'All fields are required' },
                { status: 400 }
            )
        }

        if (description.length < 5) {
            return NextResponse.json({ error: 'Description should be atleast 5 characters long' },
                { status: 400 }
            )
        }

        const course = new courseModel({
            title,
            description,
            category,
            createdBy,
            price
        });

        if (!course) {
            return NextResponse.json({ error: 'Course creation failed' },
                { status: 400 }
            )
        }

        await course.save();
        
        return NextResponse.json({
            message: 'Course Creation Successfull',
            success: true,
            course
        }, {
            status: 201
        })

    } catch (error: any) {
        return NextResponse.json({ error: error.message },
            { status: 400 }
        )
    }
}