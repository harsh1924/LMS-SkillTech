'use client';

import Link from "next/link";
import { CheckCircle, Dot } from "lucide-react";

import { Footer } from "@/app/(dashboard)/_components/(mainPageComponents)/footer";
import { HomeNavbar } from "@/app/(dashboard)/_components/(mainPageComponents)/navbar";

import '@/app/(dashboard)/dashboard.css'
import useCourse from "@/hooks/useCourse";

const CourseDetails = ({
    params
}: {
    params: { courseId: string }
}) => {

    const { isLoading, course } = useCourse(params.courseId);

    const downloadFile = () => {
        // const pdfUrl = syllabusURL
        const link = document.createElement('a');
        link.href = course!.syllabus;
        link.download = 'syllabus.pdf';
        link.click();
    }

    return (
        <>
            {!isLoading ? (
                <div className="flex flex-col gap-y-3 h-100vh items-center">
                    <div className="w-full">
                        <HomeNavbar />
                    </div>

                    {/* image, title, description */}
                    <div className="flex px-6 flex-col justify-between lg:gap-x-20 ">
                        <div className="flex flex-col gap-y-3 items-center">
                            <div className="py-10 w-full lg:px-8 flex flex-col-reverse lg:flex-row gap-x-4  h-full justify-center">
                                <div className="lg:w-[750px] flex gap-y-6 flex-col lg:px-8 py-3">
                                    <p>
                                        <span className="lg:text-5xl text-2xl oxygen-bold font-sans pb-8">{course!.title}
                                        </span>
                                    </p>
                                    <p>
                                        <span className="oxygen-semibold text-gray-500 text-lg">
                                            {course!.createdBy}
                                        </span>
                                    </p>
                                    <p>
                                        <span className="source-sans-3-regular text-lg">
                                            {course!.description}
                                        </span>
                                    </p>
                                    <div className="flex items-center gap-x-10">
                                        {!course!.isFree ? (
                                            <Link href={`/course/${params.courseId}/purchase`} className="font-semibold text-sm text-center border flex bg-[#0056d2] hover:bg-[#00419e] transition-all ease-in-out duration-300 text-white px-6 py-3 rounded-md items-center w-[130px]">
                                                <span>Enroll Now</span>
                                            </Link>
                                        ) : (
                                            <Link href={`/courses/${params.courseId}/add-free-course`} className="font-semibold text-sm text-center border flex bg-[#0056d2] hover:bg-[#00419e] transition-all ease-in-out duration-300 text-white px-6 py-3 rounded-md items-center  cursor-pointer">
                                                Enroll for Free
                                            </Link>
                                        )}
                                        {course!.syllabus && (
                                            <button onClick={downloadFile} className="font-semibold text-sm text-center border flex bg-[#0056d2] hover:bg-[#00419e] transition-all ease-in-out duration-300 text-white px-6 py-3 rounded-md items-center">
                                                Download Syllabus
                                            </button>
                                        )}
                                    </div>
                                </div>
                                <p className="lg:w-1/2 w-[80%] text-center">
                                    <img src={course!.imageUrl} alt="Course Thumbnail" className="w-full rounded-xl" loading="lazy" />
                                </p>
                            </div>
                        </div>
                        <div className="h-[1px] bg-gray-400 "></div>
                    </div>

                    {/* duration and mode of teaching */}
                    <div className="shadow-md  w-full px-6 lg:px-10 py-5 flex flex-col lg:flex-row justify-center gap-y-4 lg:gap-y-0 source-sans-3-bold">
                        <p className="flex flex-col items-center gap-y-3 lg:border-r border-black py-2 lg:px-20 text-lg font-semibold text-center">
                            <span>
                                {course!.duration && (
                                    <>
                                        <span>
                                            Program Duration
                                        </span>
                                        <div>
                                            {course!.duration}
                                        </div>
                                    </>
                                )}
                            </span>
                        </p>
                        <p className="border-black lg:border-r flex flex-col items-center gap-y-3 py-2 text-center lg:px-20 text-lg font-semibold">
                            <span>
                                Mode of teaching
                            </span>
                            <span>
                                Online Bootcamp
                            </span>
                        </p>
                        <p className="flex text-center justify-center py-2 px-20 text-lg font-semibold">
                            <span>
                                Limited Seats Available
                            </span>
                        </p>
                    </div>

                    {/* overview */}
                    <div className="px-6 lg:px-16 py-6">
                        <p className="text-lg flex flex-col gap-y-4">
                            <span className="text-xl flex gap-x-2">
                                <span className="hidden lg:flex oxygen-regular">
                                    {course!.title}
                                </span>
                                <span className="oxygen-semibold">
                                    Overview
                                </span>
                            </span>
                            <span className="source-sans-3-regular">
                                {course!.overview}
                                {course!.description}
                            </span>
                        </p>
                    </div>

                    {/* Cards */}
                    <div className="px-6 lg:px-16 text-lg source-sans-3-regular py-10 flex flex-col md:flex-row flex-wrap gap-y-10 justify-between w-full">
                        {course!.cardOne && (
                            <p className="border-b-8 border-b-[#347dfb] border px-4 py-8 rounded-xl w-[300px]">
                                {course!.cardOne}
                            </p>
                        )}
                        {course!.cardTwo && (
                            <p className="border-b-8 border-b-[#347dfb] border px-4 py-8 rounded-xl w-[300px]">
                                {course!.cardTwo}
                            </p>
                        )}
                        {course!.cardThree && (
                            <p className="border-b-8 border-b-[#347dfb] border px-4 py-8 rounded-xl w-[300px]">
                                {course!.cardThree}
                            </p>
                        )}
                        {course!.cardFour && (
                            <p className="border-b-8 border-b-[#347dfb] border px-4 py-8 rounded-xl w-[300px]">
                                {course!.cardFour}
                            </p>
                        )}
                    </div>

                    {/* key features */}
                    <div className="flex px-6 lg:px-16 flex-col py-10 shadow-md bg-slate-100 rounded-md">
                        <p className=" pb-8 text-xl oxygen-semibold">
                            KEY FEATURES
                        </p>
                        <div className="flex flex-wrap gap-y-8 justify-between text-[17px] source-sans-3-regular">
                            {course!.keyFeaturesOne && (
                                <p className="w-[400px]">
                                    <span className="flex items-start gap-x-3">
                                        <CheckCircle size={25} className="text-[#347dfb]" />
                                        {course!.keyFeaturesOne}
                                    </span>
                                </p>
                            )}
                            {course!.keyFeaturesTwo && (
                                <p className="w-[400px]">
                                    <span className="flex items-start gap-x-3">
                                        <CheckCircle size={25} className="text-[#347dfb]" /> {course!.keyFeaturesTwo}
                                    </span>
                                </p>
                            )}
                            {course!.keyFeaturesThree && (
                                <p className="w-[400px]">
                                    <span className="flex items-start gap-x-3">
                                        <CheckCircle size={25} className="text-[#347dfb]" /> {course!.keyFeaturesThree}
                                    </span>
                                </p>
                            )}
                            {course!.keyFeaturesFour && (
                                <p className="w-[400px]">
                                    <span className="flex items-start gap-x-3">
                                        <CheckCircle size={25} className="text-[#347dfb]" /> {course!.keyFeaturesFour}
                                    </span>
                                </p>
                            )}
                            {course!.keyFeaturesFive && (
                                <p className="w-[400px]">
                                    <span className="flex items-start gap-x-3">
                                        <CheckCircle size={25} className="text-[#347dfb]" /> {course!.keyFeaturesFive}
                                    </span>
                                </p>
                            )}
                            {course!.keyFeaturesSix && (
                                <p className="w-[400px]">
                                    <span className="flex items-start gap-x-3">
                                        <CheckCircle size={25} className="text-[#347dfb]" /> {course!.keyFeaturesSix}
                                    </span>
                                </p>
                            )}
                        </div>
                    </div>

                    {/* skills Covered */}
                    <div className="flex px-6 lg:px-16 flex-col py-10 ">
                        <p className="pb-8 text-xl oxygen-semibold">
                            SKILLS COVERED
                        </p>
                        <p className="flex flex-wrap justify-between source-sans-3-regular text-lg">
                            {course!.skillsOne && (
                                <span className="flex items-center gap-x-1 w-[400px]">
                                    <Dot size={40} className="text-[#347dfb]" />
                                    {course!.skillsOne}
                                </span>
                            )}
                            {course!.skillsTwo && (
                                <span className="flex w-[400px] items-center gap-x-1">
                                    <Dot size={40} className="text-[#347dfb]" />  {course!.skillsTwo}
                                </span>
                            )}
                            {course!.skillsThree && (
                                <span className="flex w-[400px] items-center gap-x-1">
                                    <Dot size={40} className="text-[#347dfb]" />  {course!.skillsThree}
                                </span>
                            )}
                            {course!.skillsFour && (
                                <span className="flex w-[400px] items-center gap-x-1">
                                    <Dot size={40} className="text-[#347dfb]" />  {course!.skillsFour}
                                </span>
                            )}
                            {course!.skillsFive && (
                                <span className="flex w-[400px] items-center gap-x-1">
                                    <Dot size={40} className="text-[#347dfb]" />  {course!.skillsFive}
                                </span>
                            )}
                            {course!.skillsSix && (
                                <span className="flex w-[400px] items-center gap-x-1">
                                    <Dot size={40} className="text-[#347dfb]" />  {course!.skillsSix}
                                </span>
                            )}
                        </p>
                    </div>

                    {/* why online bootcamp section */}
                    <div className="flex px-6 lg:px-16 flex-col py-10 bg-slate-100 rounded-md w-full gap-y-8">
                        <div className="flex gap-x-1 text-xl oxygen-regular">
                            Why
                            <span className="oxygen-semibold">
                                Online Bootcamp
                            </span>
                        </div>
                        <div className="flex md:grid md:grid-cols-2 justify-between lg:px-10 flex-wrap gap-y-4">
                            <div className="flex w-[300px] flex-col gap-y-2">
                                <h1 className="text-lg oxygen-semibold">
                                    Develop Skills for real career
                                </h1>
                                <p className="source-sans-3-regular text-lg">
                                    Cutting-edge curriculum designed in guidance with industry and academia to develop job-ready skills
                                </p>
                            </div>
                            <div className="flex w-[300px] flex-col gap-y-2">
                                <h1 className="text-lg oxygen-semibold">
                                    Learn from experts active in their field, not out-of-touch trainers
                                </h1>
                                <p className="source-sans-3-regular text-lg">
                                    Leading practitioners who bring current best practices and case studies to sessions that fit into your work schedule.
                                </p>
                            </div>
                            <div className="flex w-[300px] flex-col gap-y-2">
                                <h1 className="text-lg oxygen-semibold">
                                    Learn by working on real-world problems
                                </h1>
                                <p className="source-sans-3-regular text-lg">
                                    Capstone projects involving real world data sets with virtual labs for hands-on learning
                                </p>
                            </div>
                            <div className="flex w-[300px] flex-col gap-y-2">
                                <h1 className="text-lg oxygen-semibold">
                                    Structured guidance ensuring learning never stops
                                </h1>
                                <p className="source-sans-3-regular text-lg">
                                    24x7 Learning support from mentors and a community of like-minded peers to resolve any conceptual doubts
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* footer */}
                    <div className="w-full">
                        <Footer />
                    </div>
                </div>
            ) : (
                <div className="flex h-screen w-screen items-center justify-center">
                    <div className="animate-spin rounded-full border-4 border-gray-300 border-t-gray-900 h-12 w-12 dark:border-gray-600 dark:border-t-gray-50" />
                </div>
            )}
        </>
    );
}

export default CourseDetails;