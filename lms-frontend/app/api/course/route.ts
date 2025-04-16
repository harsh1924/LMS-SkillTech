/* eslint-disable import/no-unresolved */
import { NextRequest, NextResponse } from "next/server";

import courseModel from "@/app/server/models/courseModel";
import connectToDB from "@/app/server/dbconfig/dbconfig";

connectToDB();

export async function DELETE(request: NextRequest) {
    try {
        const courseId = request.nextUrl.searchParams.get('courseId');
        const lectureId = request.nextUrl.searchParams.get('lectureId');

        console.log(courseId);
        console.log(lectureId);

        const course = await courseModel.findById(courseId);
        console.log(course);

        if (!course) {
            return NextResponse.json({
                message: 'Course Does Not Exist',
            })
        }

        const lectureIndex = course.lectures.findIndex((lecture: { _id: { toString: () => string; }; }) =>
            lecture._id.toString() === lectureId!.toString());

        if (lectureIndex === -1) {
            return NextResponse.json({
                message: 'Lecture Does Not Exist',
            })
        }

        course.lectures.splice(lectureIndex, 1);
        course.numberOfLectures = course.lectures.length;
        await course.save();

        return NextResponse.json({
            message: 'Lecture Deleted'
        })

    } catch (error: any) {
        return NextResponse.json({
            error: error.message
        }, { status: 400 })
    }
}