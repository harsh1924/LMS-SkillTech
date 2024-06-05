import { LectureList } from "@/app/(user)/(lectures)/lecture-list";
import connectToDB from "@/app/server/dbconfig/dbconfig";
import courseModel from "@/app/server/models/courseModel";
import userModel from "@/app/server/models/userModel";
import { Percent, PlayCircle } from "lucide-react";
import Link from "next/link";

const PurchasedCourseLecture = async ({
    params
}: {
    params: { userId: string, courseId: string }
}) => {

    const course = await courseModel.findById(params.courseId);
    const user = await userModel.findById(params.userId);
    const userProgress = user.userProgress;

    const courseIndex = userProgress.findIndex((e: { courseId: string; course: any }) => e.course.id === params.courseId)
    const currentCourse = userProgress[courseIndex];
    console.log(currentCourse);

    const currentCourseProgress = currentCourse.progress;
    const courseLectures = currentCourse.course.lectures;
    console.log(courseLectures);
    
    const courseLecturesLength = courseLectures.length;
    const progress = Math.floor(currentCourseProgress / courseLecturesLength * 100);
    // console.log(progress);

    return (
        <div className="px-3 lg:px-10 py-7 flex flex-col gap-y-8">
            <div>
                <div className="flex flex-col lg:flex-row items-center justify-between">
                    <div className="flex items-center gap-x-4">
                        <PlayCircle className="mt-1" size={21} />
                        <span className="text-2xl font-sans font-bold text-gray-700">
                            {course.title}
                        </span>
                    </div>
                    <div className="flex items-center gap-x-4 mt-4">
                        <div className="flex items-center gap-x-1 bg-[#c0f89b] p-3 rounded-[50%]">
                            {progress}
                            <span>
                                <Percent size={18} />
                            </span>
                        </div>
                        {!course.isFree ? (
                            <Link href={`/courses/${params.courseId}/certificate`} className="bg-yellow-600 text-white px-5 py-3 rounded-md" target="_blank">
                                Generate Certificate
                            </Link>
                        ) : (
                            <Link href={`/`} className="bg-yellow-600 text-white px-5 py-3 rounded-md">
                                Generate Certificate
                            </Link>
                        )}
                    </div>
                </div>
            </div>
            <div className="h-[1px] bg-gray-500"></div>
            <div className="flex flex-col gap-y-6 ">
                {courseLectures.map((e: { _id: string; title: string; description: string; videoUrl: string; userId: string; isCompleted: boolean }, idx: number) =>
                    <div>
                        <LectureList id={e._id} title={e.title} description={e.description} idx={idx} videoUrl={e.videoUrl} courseId={params.courseId} userId={params.userId} isCompleted={e.isCompleted} />
                    </div>)
                }
            </div>
        </div>
    )
}

export default PurchasedCourseLecture;