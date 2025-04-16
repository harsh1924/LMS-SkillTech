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
        const userProgress = user.userProgress;
        
        const courseIndex = userProgress.findIndex((e: { course: any; }) => e.course.id === params.courseId);
        const currentCourse = userProgress[courseIndex];

        const lectureId = request.nextUrl.searchParams.get('lectureId');
        const lectureIndex = currentCourse.course.lectures.findIndex((element: any) => element._id.valueOf() === lectureId);
        const currentLecture = currentCourse.course.lectures[lectureIndex];
        console.log(currentLecture);

        if (!currentLecture.isCompleted) {
            currentCourse.progress = currentCourse.progress + 1;
        }

        await userModel.findOneAndUpdate(
            { _id: params.userId },
            {
                $set: {
                    'userProgress.$[].course.lectures.$[lecture].isCompleted': true
                }
            },
            {
                arrayFilters: [
                    {
                        'lecture._id': currentLecture._id
                    }
                ]
            }
        )

        await user.save();
        return NextResponse.json({
            message: 'Done',
        }, { status: 200 })

    } catch (error: any) {
        return NextResponse.json({
            error: error.message
        }, { status: 400 })
    }
}