import courseModel from "@/app/server/models/courseModel";
import userModel from "@/app/server/models/userModel";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest, {
    params
}: {
    params: { courseId: string; userId: string }
}) {
    try {
        const user = await userModel.findById(params.userId);
        const lectureId = request.nextUrl.searchParams.get('lectureId');
        // console.log(lectureId);

        const userProgress = user.userProgress;

        const courseIndex = userProgress.findIndex((e: { course: any; }) => e.course.id === params.courseId);
        // console.log(courseIndex);

        const currentCourse = userProgress[courseIndex];

        const lectureIndex = currentCourse.course.lectures.findIndex((element: any) => element._id.valueOf() === lectureId);
        // console.log(lectureIndex);

        const lectureCompletion = currentCourse.course.lectures[lectureIndex];
        console.log(lectureCompletion);

        var isLectureCompleted = lectureCompletion.isCompleted

        console.log(isLectureCompleted);
        if (isLectureCompleted) {
            currentCourse.progress = currentCourse.progress + 1
        }
        // if (!isLectureCompleted) {
        isLectureCompleted = true;
        // }
        console.log(isLectureCompleted);

        await user.save();

        return NextResponse.json({
            message: 'Done',
        })


    } catch (error: any) {
        return NextResponse.json({
            error: error.message
        }, { status: 400 })
    }
}