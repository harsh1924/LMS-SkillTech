import { LectureList } from "@/app/(user)/(lectures)/lecture-list";
import connectToDB from "@/app/server/dbconfig/dbconfig";
import courseModel from "@/app/server/models/courseModel";
import userModel from "@/app/server/models/userModel";
import { ChevronLeft, DownloadIcon, Percent } from "lucide-react";
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
            <div className="flex py-5 items-center justify-between px-8 shadow-md">
                <div className="hidden lg:flex">
                    <Logo />
                </div>
                <div className="flex items-center gap-x-1">
                    <Link href={`/learn/${params.userId}/user-courses`}>
                        <ChevronLeft size={30} />
                    </Link>
                    <span className="text-lg oxygen-bold text-gray-700">
                        {course.title}
                    </span>
                </div>
                <div className="flex items-center gap-x-4">
                    <div className="flex items-center gap-x-1 text-[#00419e] bg-[#ecf2fc] py-1 px-3 rounded-md oxygen-bold">
                        {progress}
                        <span>
                            <Percent size={17} />
                        </span>
                    </div>
                    {/* {!course.isFree ? (
                        <Link href={`/courses/${params.courseId}/certificate`} className="bg-yellow-600 text-white px-5 py-3 rounded-md" target="_blank">
                            Generate Certificate
                        </Link>
                    ) : (
                        <Link href={`/`} className="bg-yellow-600 text-white px-5 py-3 rounded-md">
                            Generate Certificate
                        </Link>
                    )} */}
                    {progress === 100 && (
                        <Link href={`/course/${params.courseId}/survey/${params.userId}`}>
                            <DownloadIcon />
                        </Link>
                    )}
                </div>
            </div>
            {/* </div> */}
            <div className="flex flex-col-reverse lg:flex-row py-[5px]">
                <div className="flex flex-col shadow-md h-[100vh] overflow-scroll no-scrollbar lg:w-[20%] w-full">
                    {courseLectures.map((e: { _id: string; title: string; description: string; videoUrl: string; userId: string; isCompleted: boolean }, idx: number) =>
                        <div>
                            <LectureList id={e._id} title={e.title} description={e.description} idx={idx} videoUrl={e.videoUrl} courseId={params.courseId} userId={params.userId} isCompleted={e.isCompleted} currentLecture={currentCourse.currentLectureTitle} />
                        </div>)
                    }
                </div>
                <div className="flex flex-col bg-slate-100 px-8 py-3 gap-y-6 lg:w-[80%] w-full">
                    <div className="oxygen-bold">
                        <span>
                            Lecture:{" "}
                        </span>
                        {currentCourse.currentLectureTitle}
                    </div>
                    <div className="flex items-center justify-center lg:justify-start">
                        <Player url={currentCourse.currentLectureURL} courseId={params.courseId} userId={params.userId} id={currentCourse.currentLectureId} />
                    </div>

                    <div className="source-sans-3-regular text-lg">
                        {currentCourse.currentLectureDescription}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default PurchasedCourseLecture;