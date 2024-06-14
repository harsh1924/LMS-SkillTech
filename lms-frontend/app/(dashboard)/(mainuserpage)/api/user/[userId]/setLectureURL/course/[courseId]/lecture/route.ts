import connectToDB from "@/app/server/dbconfig/dbconfig";
import userModel from "@/app/server/models/userModel";
import { NextRequest, NextResponse } from "next/server";

connectToDB();
export async function PUT(request: NextRequest, {
    params
}: {
    params: { userId: string, courseId: string }
}) {
    try {
        const lectureId = request.nextUrl.searchParams.get('lectureId');
        const user = await userModel.findById(params.userId);
        // console.log(lectureId);
        
        const userProgress = user.userProgress;

        const courseIndex = userProgress.findIndex((e: { courseId: string; course: any }) => e.course.id === params.courseId)
        const currentCourse = userProgress[courseIndex];

        const lectureIndex = currentCourse.course.lectures.findIndex((element: any) => element._id.valueOf() === lectureId);
        // console.log(lectureIndex);

        const currentLecture = currentCourse.course.lectures[lectureIndex];

        currentCourse.currentLectureURL = currentLecture.videoUrl;
        currentCourse.currentLectureTitle = currentLecture.title;
        currentCourse.currentLectureDescription = currentLecture.description;
        currentCourse.currentLectureId = currentLecture._id;

        // // user.currentLectureURL = url;
        user.save();

        return NextResponse.json({
            message: 'Done'
        }, { status: 200 })
    } catch (error: any) {
        return NextResponse.json({
            error: error.message
        }, { status: 400 })
    }
}