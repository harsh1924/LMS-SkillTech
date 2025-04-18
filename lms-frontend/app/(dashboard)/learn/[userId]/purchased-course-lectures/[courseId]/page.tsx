import { ChevronLeft, DownloadIcon, Percent } from "lucide-react";
import Link from "next/link";

import { LectureList } from "@/app/(user)/(lectures)/lecture-list";
import connectToDB from "@/app/server/dbconfig/dbconfig";
import courseModel from "@/app/server/models/courseModel";
import userModel from "@/app/server/models/userModel";


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
    const isCourseSurvyed = currentCourse.isSurveyed;
    const courseLectures = currentCourse.course.lectures;

    const courseLecturesLength = courseLectures.length;
    const currentCourseProgress = currentCourse.progress;
    const progress = Math.floor(currentCourseProgress / courseLecturesLength * 100);

    return (
        <div className="flex flex-col">
            <div className="flex py-5 items-center justify-between px-8 shadow-md">
                <div className="hidden lg:flex">
                    <Logo />
                </div>
                <div className="flex items-center gap-x-1">
                    <Link href={`/learn/${params.userId}/user-courses`}>
                        <ChevronLeft size={30} />
                    </Link>
                    <span className="md:text-lg oxygen-bold text-gray-700">
                        {course.title}
                    </span>
                </div>
                <div className="flex items-center gap-x-4">
                    {progress !== 100 ? (
                        <div className="flex items-center gap-x-1 text-[#00419e] bg-[#ecf2fc] py-1 px-1 md:px-3 rounded-md oxygen-bold">
                            <span>
                                Completion Status :
                            </span>
                            <div className="flex items-center">
                                {progress}
                                <span>
                                    <Percent size={17} />
                                </span>
                            </div>
                        </div>
                    ) : (
                        <div className="text-[#00419e] bg-[#ecf2fc] py-2 px-1 md:px-5 rounded-md oxygen-bold">
                            Completed
                        </div>
                    )}
                    {progress === 100 && (
                        !isCourseSurvyed ? (
                            <Link href={`/course/${params.courseId}/survey/${params.userId}`}>
                                <DownloadIcon className="flex lg:hidden" />
                                <span className="hidden lg:flex rounded-md px-5 py-2 bg-[#0056d2] text-white oxygen-bold hover:bg-[#00419e] transition-all ease-in-out duration-300 w-full">
                                    Generate Certificate
                                </span>
                            </Link>
                        ) : (
                            <div>
                                <Link href={`/learn/certificate/generate-certificate/${params.courseId}`} className="rounded-md px-5 py-2 bg-[#0056d2] text-white oxygen-bold hover:bg-[#00419e] transition-all ease-in-out duration-300 w-full hidden md:flex" target="_blank">
                                    Generate Certificate
                                </Link>
                                <Link href={`/learn/certificate/generate-certificate/${params.courseId}`} className="rounded-md px-5 py-2 bg-[#0056d2] text-white oxygen-bold hover:bg-[#00419e] transition-all ease-in-out duration-300 w-full flex md:hidden" target="_blank">
                                    <DownloadIcon />
                                </Link>
                            </div>
                        )
                    )}
                </div>
            </div>
            <div>
                {progress < 100 && (
                    <div className="bg-yellow-200 font-sans py-4 px-3 text-center">
                        Complete your course
                        <span className="font-semibold"> 100%</span>
                        {" "}to generate certificate!
                    </div>
                )}
            </div>
            <div className="flex flex-col-reverse lg:flex-row py-[5px]">
                <div className="flex flex-col shadow-md h-[100vh] overflow-scroll no-scrollbar lg:w-[20%] w-full">
                    {courseLectures.map((e: { _id: string; title: string; description: string; videoUrl: string; userId: string; isCompleted: boolean }, idx: number) =>
                        <div>
                            <LectureList id={e._id} title={e.title} description={e.description} idx={idx} videoUrl={e.videoUrl} courseId={params.courseId} userId={params.userId} isCompleted={e.isCompleted} currentLecture={currentCourse.currentLectureTitle} />
                        </div>)
                    }
                </div>
                <div className="flex flex-col bg-slate-100 px-8 py-3 gap-y-6 lg:w-[80%] w-full">
                    <div className="oxygen-bold flex justify-between items-center">
                        <span>
                            Lecture:{" "}
                            {currentCourse.currentLectureTitle}
                        </span>
                        {currentCourse.resource && (
                            <a href={currentCourse.resource} target="_blank" className="cursor-pointer border border-[#00419e] rounded-md px-6 py-2">
                                Resources
                            </a>
                        )}
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