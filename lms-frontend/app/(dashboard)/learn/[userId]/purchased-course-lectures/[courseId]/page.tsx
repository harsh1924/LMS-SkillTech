import { LectureList } from "@/app/(user)/(lectures)/lecture-list";
import connectToDB from "@/app/server/dbconfig/dbconfig";
import courseModel from "@/app/server/models/courseModel";
import userModel from "@/app/server/models/userModel";
import { ChevronLeft, Percent } from "lucide-react";
import Link from "next/link";


import '@/app/(dashboard)/dashboard.css'
import { Logo } from "@/app/(dashboard)/_components/logo";
import { Player } from "../../_components/ReactPlayer";

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
    const courseLectures = currentCourse.course.lectures;

    const courseLecturesLength = courseLectures.length;
    const currentCourseProgress = currentCourse.progress;
    const progress = Math.floor(currentCourseProgress / courseLecturesLength * 100);



    return (
        <div className="flex flex-col">
            {/* <div> */}
            <div className="flex py-5 flex-col lg:flex-row items-center justify-between px-8 shadow-md">
                <Logo />
                <div className="flex items-center gap-x-1">
                    <Link href={`/learn/${params.userId}/user-courses`}>
                        <ChevronLeft size={30} />
                    </Link>
                    <span className="text-[22px] oxygen-bold text-gray-700">
                        {course.title}
                    </span>
                </div>
                <div className="flex items-center gap-x-4">
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
            {/* </div> */}
            <div className="flex py-[5px]">
                <div className="flex flex-col shadow-md h-[85vh] overflow-scroll no-scrollbar">
                    {courseLectures.map((e: { _id: string; title: string; description: string; videoUrl: string; userId: string; isCompleted: boolean }, idx: number) =>
                        <div>
                            <LectureList id={e._id} title={e.title} description={e.description} idx={idx} videoUrl={e.videoUrl} courseId={params.courseId} userId={params.userId} isCompleted={e.isCompleted} currentLecture={currentCourse.currentLectureTitle} />
                        </div>)
                    }
                </div>
                <div className="flex flex-col bg-slate-100 px-8 py-6 gap-y-6">
                    <div className="oxygen-bold text-2xl">
                        <span>
                            Lecture:{" "}
                        </span>
                        {currentCourse.currentLectureTitle}
                    </div>
                    {/* <iframe src={currentCourse.currentLectureURL} height={400} width={800}></iframe> */}
                    <Player url={currentCourse.currentLectureURL} courseId={params.courseId} userId={params.userId} id={currentCourse.currentLectureId} />

                    <div className="source-sans-3-regular text-lg">
                        {currentCourse.currentLectureDescription}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default PurchasedCourseLecture;