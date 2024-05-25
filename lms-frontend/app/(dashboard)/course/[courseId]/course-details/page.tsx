'use client';

import { SkillsOne } from "@/app/(dashboard)/(mainuserpage)/admin/courses/[courseId]/_components/(extra-details)/(skills-covered)/skills-one";
import { LoginButtons } from "@/app/(dashboard)/_components/(buttons)/login-signup-button";
import { SearchPage } from "@/app/(dashboard)/_components/(mainPageComponents)/SeacrhInput";
import { HoverAllCourses } from "@/app/(dashboard)/_components/(mainPageComponents)/all-course-hover";
import { Footer } from "@/app/(dashboard)/_components/(mainPageComponents)/footer";
import { HomeNavbar } from "@/app/(dashboard)/_components/(mainPageComponents)/navbar";
import { DashboardComponent } from "@/app/(dashboard)/_components/dashboard-component";
import { Logo } from "@/app/(dashboard)/_components/logo";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import axios from "axios";
import { Check, CheckCircle, Dot, IndianRupeeIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const CourseDetails = ({
    params
}: {
    params: { courseId: string }
}) => {

    // basic data of course
    const [courseTitleData, setCourseTitleData] = useState('');
    const [courseDescData, setCourseDescData] = useState('');
    const [coursePriceData, setCoursePriceData] = useState('');
    const [courseCreatorData, setCourseCreatorData] = useState('');
    const [courseImageURLData, setCourseImageURLData] = useState('');
    const [courseDurationData, setCourseDurationData] = useState('');

    // overview of course
    const [courseOverviewData, setCourseOverviewData] = useState('');

    // key features of course
    const [courseKeyFeatureOneData, setCourseKeyFeatureOneData] = useState('');
    const [courseKeyFeatureTwoData, setCourseKeyFeatureTwoData] = useState('');
    const [courseKeyFeatureThreeData, setCourseKeyFeatureThreeData] = useState('');
    const [courseKeyFeatureFourData, setCourseKeyFeatureFourData] = useState('');
    const [courseKeyFeatureFiveData, setCourseKeyFeatureFiveeData] = useState('');
    const [courseKeyFeatureSixData, setCourseKeyFeatureSixData] = useState('');

    // skills covered in course
    const [courseSkillsCoveredOne, setCourseSkillsCoveredOne] = useState('');
    const [courseSkillsCoveredTwo, setCourseSkillsCoveredTwo] = useState('');
    const [courseSkillsCoveredThree, setCourseSkillsCoveredThree] = useState('');
    const [courseSkillsCoveredFour, setCourseSkillsCoveredFour] = useState('');
    const [courseSkillsCoveredFive, setCourseSkillsCoveredFive] = useState('');
    const [courseSkillsCoveredSix, setCourseSkillsCoveredSix] = useState('');

    // course cards
    const [courseCardOne, setCourseCardOne] = useState('');
    const [courseCardTwo, setCourseCardTwo] = useState('');
    const [courseCardThree, setCourseCardThree] = useState('');
    const [courseCardFour, setCourseCardFour] = useState('');

    const [course, setCourse] = useState([])

    const courseDetails = async () => {
        try {
            const courseId = params.courseId;
            const response = await axios.get(`/api/course/course-details/${courseId}`);
            const course = response.data.course;
            const lectures = course.lectures;
            setCourse(lectures);

            //setting image
            const courseImage = course.imageUrl;
            setCourseImageURLData(courseImage)

            //setting name data
            const courseTitle = course.title;
            setCourseTitleData(courseTitle);

            // setting email data
            const courseEmail = course.description;
            setCourseDescData(courseEmail)

            // setting created by data
            const courseCreator = course.createdBy;
            setCourseCreatorData(courseCreator)

            // setting course price data
            const coursePrice = course.price;
            setCoursePriceData(coursePrice);

            // setting couse duration
            const courseDuration = course.duration;
            setCourseDurationData(courseDuration);

            // setting course overview
            const courseOverview = course.overview;
            setCourseOverviewData(courseOverview);

            // setting course key features
            const courseKeyFeatureOne = course.keyFeaturesOne;
            setCourseKeyFeatureOneData(courseKeyFeatureOne);
            const courseKeyFeatureTwo = course.keyFeaturesTwo;
            setCourseKeyFeatureTwoData(courseKeyFeatureTwo);
            const courseKeyFeatureThree = course.keyFeaturesThree;
            setCourseKeyFeatureThreeData(courseKeyFeatureThree);
            const courseKeyFeatureFour = course.keyFeaturesFour;
            setCourseKeyFeatureFourData(courseKeyFeatureFour);
            const courseKeyFeatureFive = course.keyFeaturesFive;
            setCourseKeyFeatureFiveeData(courseKeyFeatureFive);
            const courseKeyFeatureSix = course.keyFeaturesSix;
            setCourseKeyFeatureSixData(courseKeyFeatureSix);

            // setting course skills covered
            const skillCoveredOne = course.skillsOne;
            setCourseSkillsCoveredOne(skillCoveredOne)
            const skillCoveredTwo = course.skillsTwo;
            setCourseSkillsCoveredTwo(skillCoveredTwo)
            const skillCoveredThree = course.skillsThree;
            setCourseSkillsCoveredThree(skillCoveredThree)
            const skillCoveredFour = course.skillsFour;
            setCourseSkillsCoveredFour(skillCoveredFour)
            const skillCoveredFive = course.skillsFive;
            setCourseSkillsCoveredFive(skillCoveredFive)
            const skillCoveredSix = course.skillsSix;
            setCourseSkillsCoveredSix(skillCoveredSix)

            // setting course card details
            const CardOne = course.cardOne;
            setCourseCardOne(CardOne);
            const CardTwo = course.cardTwo;
            setCourseCardTwo(CardTwo);
            const CardThree = course.cardThree;
            setCourseCardThree(CardThree);
            const CardFour = course.cardFour;
            setCourseCardFour(CardFour);

        } catch (error: any) {
            toast.error('Something went wrong')
        }
    }

    useEffect(() => {
        courseDetails()
    }, []);

    return (
        <div className="flex flex-col gap-y-3 h-100vh items-center ">

            <div className="w-full">
                <HomeNavbar />
            </div>

            {/* image, title, description */}
            <div className="flex px-6 flex-col justify-between lg:gap-x-20 ">
                <div className="flex flex-col gap-y-3 items-center">
                    <div className="py-10 w-full lg:px-8 flex flex-col-reverse lg:flex-row gap-x-4  h-full justify-center">
                        <div className="lg:w-[750px] flex gap-y-6 flex-col lg:px-8 py-3">
                            <p>
                                <span className="lg:text-5xl text-2xl font-bold font-sans pb-8">{courseTitleData}
                                </span>
                            </p>
                            <p>
                                <span className="font-semibold text-gray-500 text-lg">
                                    {courseCreatorData}
                                </span>
                            </p>
                            <p>
                                <span className="font-semibold">
                                    {courseDescData}
                                </span>
                            </p>
                            <Link href={`/course/${params.courseId}/purchase`} className="font-semibold border flex bg-black text-white px-4 py-2 rounded-md items-center w-[180px]">
                                Enroll for
                                <IndianRupeeIcon size={17} />
                                <span>
                                    {coursePriceData}
                                </span>
                            </Link>
                        </div>
                        {/* <Separator className="my-8 hidden" /> */}
                        <p className="lg:w-1/2 w-[80%] text-center">
                            <img src={courseImageURLData} alt="Course Thumbnail" className="w-full rounded-xl" />
                        </p>
                    </div>
                </div>
                <div className="h-[1px] bg-gray-400 "></div>
            </div>

            {/* duration and mode of teaching */}
            <div className="w-full px-6 lg:px-10 py-5 flex flex-col lg:flex-row justify-center gap-y-4 lg:gap-y-0">
                <p className="shadow-md flex flex-col items-center gap-y-3 lg:border-r border-black py-2 lg:px-20 text-lg font-semibold text-center">
                    <span>
                        Program Duration
                    </span>
                    <span>
                        {courseDurationData} Months
                    </span>
                </p>
                <p className="shadow-md border-black lg:border-r flex flex-col items-center gap-y-3 py-2 text-center lg:px-20 text-lg font-semibold">
                    <span>
                        Mode of teaching
                    </span>
                    <span>
                        Online Bootcamp
                    </span>
                </p>
                <p className="shadow-md flex text-center items-center justify-center py-2 px-20 text-lg font-semibold">
                    <span>
                        Limited Seats Available
                    </span>
                </p>
            </div>

            {/* overview */}
            <div className="px-6 lg:px-16 py-6">
                <p className="text-lg flex flex-col gap-y-4">
                    <span className="text-xl flex gap-x-2">
                        <span className="hidden lg:flex">
                            {courseTitleData}
                        </span>
                        <span className="font-semibold">
                            Overview
                        </span>
                    </span>
                    {courseOverviewData}
                    {courseDescData}
                </p>
            </div>

            {/* Cards */}
            <div className="px-6 lg:px-16 py-10 flex flex-col md:flex-row flex-wrap gap-y-10 justify-between w-full">
                <p className="border-b-8 border-b-blue-500 border px-4 py-8 rounded-xl w-[300px]">
                    {courseCardOne}
                </p>
                <p className="border-b-8 border-b-blue-500 border px-4 py-8 rounded-xl w-[300px]">
                    {courseCardTwo}
                </p>
                <p className="border-b-8 border-b-blue-500 border px-4 py-8 rounded-xl w-[300px]">
                    {courseCardThree}
                </p>
                <p className="border-b-8 border-b-blue-500 border px-4 py-8 rounded-xl w-[300px]">
                    {courseCardFour}
                </p>
            </div>

            {/* key features */}
            <div className="flex px-6 lg:px-16 flex-col py-10 shadow-md bg-slate-100 rounded-md">
                <p className=" pb-8 text-xl font-semibold">KEY FEATURES</p>
                <div className="flex flex-wrap gap-y-8 justify-between text-[17px]">
                    <p className="w-[400px]">
                        <span className="flex items-start gap-x-3">
                            <CheckCircle size={30} className="text-blue-500" /> {courseKeyFeatureOneData}
                        </span>
                    </p>
                    <p className="w-[400px]">
                        <span className="flex items-start gap-x-3">
                            <CheckCircle size={30} className="text-blue-500" /> {courseKeyFeatureTwoData}
                        </span>
                    </p>
                    <p className="w-[400px]">
                        <span className="flex items-start gap-x-3">
                            <CheckCircle size={30} className="text-blue-500" /> {courseKeyFeatureThreeData}
                        </span>
                    </p>
                    <p className="w-[400px]">
                        <span className="flex items-start gap-x-3">
                            <CheckCircle size={30} className="text-blue-500" /> {courseKeyFeatureFourData}
                        </span>
                    </p>
                    <p className="w-[400px]">
                        <span className="flex items-start gap-x-3">
                            <CheckCircle size={30} className="text-blue-500" /> {courseKeyFeatureFiveData}
                        </span>
                    </p>
                    <p className="w-[400px]">
                        <span className="flex items-start gap-x-3">
                            <CheckCircle size={30} className="text-blue-500" /> {courseKeyFeatureSixData}
                        </span>
                    </p>
                </div>
            </div>

            {/* skills Covered */}
            <div className="flex px-6 lg:px-16 flex-col py-10 ">
                <p className="pb-8 text-xl font-semibold">
                    SKILLS COVERED
                </p>
                <p className="flex flex-wrap justify-between">
                    <span className="flex items-center gap-x-1 w-[400px]">
                        <Dot size={40} className="text-blue-500" />  {courseSkillsCoveredOne}
                    </span>
                    <span className="flex w-[400px] items-center gap-x-1">
                        <Dot size={40} className="text-blue-500" />  {courseSkillsCoveredTwo}
                    </span>
                    <span className="flex w-[400px] items-center gap-x-1">
                        <Dot size={40} className="text-blue-500" />  {courseSkillsCoveredThree}
                    </span>
                    <span className="flex w-[400px] items-center gap-x-1">
                        <Dot size={40} className="text-blue-500" />  {courseSkillsCoveredFour}
                    </span>
                    <span className="flex w-[400px] items-center gap-x-1">
                        <Dot size={40} className="text-blue-500" />  {courseSkillsCoveredFive}
                    </span>
                    <span className="flex w-[400px] items-center gap-x-1">
                        <Dot size={40} className="text-blue-500" />  {courseSkillsCoveredSix}
                    </span>
                </p>
            </div>

            {/* why online bootcamp section */}
            <div className="flex px-10 flex-col py-10 bg-slate-100 rounded-md w-full gap-y-8">
                <div className="flex gap-x-1 text-xl">
                    Why
                    <span className="font-semibold">
                        Online Bootcamp
                    </span>
                </div>
                <div className="flex md:grid md:grid-cols-2 justify-between lg:px-20 flex-wrap gap-y-4">
                    <div className="flex w-[300px] flex-col gap-y-2">
                        <h1 className="text-lg font-semibold">
                            Develop Skills for real career
                        </h1>
                        <p>
                            Cutting-edge curriculum designed in guidance with industry and academia to develop job-ready skills
                        </p>
                    </div>
                    <div className="flex w-[300px] flex-col gap-y-2">
                        <h1 className="text-lg font-semibold">
                            Learn from experts active in their field, not out-of-touch trainers
                        </h1>
                        <p>
                            Leading practitioners who bring current best practices and case studies to sessions that fit into your work schedule.
                        </p>
                    </div>
                    <div className="flex w-[300px] flex-col gap-y-2">
                        <h1 className="text-lg font-semibold">
                            Learn by working on real-world problems
                        </h1>
                        <p>
                            Capstone projects involving real world data sets with virtual labs for hands-on learning
                        </p>
                    </div>
                    <div className="flex w-[300px] flex-col gap-y-2">
                        <h1 className="text-lg font-semibold">
                            Structured guidance ensuring learning never stops
                        </h1>
                        <p>
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
    );
}

export default CourseDetails;