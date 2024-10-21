'use client';

import axios from "axios";

import Link from "next/link";
import { CheckCircle, Dot, IndianRupeeIcon } from "lucide-react";

import { Footer } from "@/app/(dashboard)/_components/(mainPageComponents)/footer";
import { HomeNavbar } from "@/app/(dashboard)/_components/(mainPageComponents)/navbar";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import '@/app/(dashboard)/dashboard.css'
import { useRouter } from "next/navigation";

const CourseDetails = ({
    params
}: {
    params: { courseId: string }
}) => {

    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [userId, setUserIdData] = useState('');

    const getId = async () => {
        const res = await axios.get('/api/user/user-details')
        const userData = res.data.user;
        const userIdData = res.data.user._id;
        setUserIdData(userIdData);
        setData({
            ...data,
            userId: userIdData
        })
    }

    const [data, setData] = useState({
        courseId: params.courseId,
        userId: ''
    })

    const addFreeCourse = async () => {
        const res = await axios.get('/api/user/user-details')
        const userIdData = res.data.user._id;
        setUserIdData(userIdData);
        setData({
            ...data,
            userId: userIdData
        })
        const resp = await axios.post(`/api/course/${params.courseId}/user/${userIdData}/add-free-course`, data)
        if (resp) {
            toast.success('Enrolled Successfully');
            router.push('/profile')
        }
    }

    // basic data of course
    const [courseTitleData, setCourseTitleData] = useState('');
    const [courseDescData, setCourseDescData] = useState('');
    const [coursePriceData, setCoursePriceData] = useState('');
    const [courseCreatorData, setCourseCreatorData] = useState('');
    const [courseImageURLData, setCourseImageURLData] = useState('');
    const [courseDurationData, setCourseDurationData] = useState('');
    const [isFree, setIsFree] = useState(false);
    const [syllabusURL, setSyllabusURL] = useState('');

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

    const courseDetails = async () => {
        try {
            const courseId = params.courseId;
            const response = await axios.get(`/api/course/course-details/${courseId}`);
            const course = response.data.course;
            setCourseImageURLData(course.imageUrl)
            setCourseTitleData(course.title);
            setCourseDescData(course.description)
            setCourseCreatorData(course.createdBy)
            setCoursePriceData(course.price);
            setCourseDurationData(course.duration);
            setCourseOverviewData(course.overview);
            setIsFree(course.isFree);
            setSyllabusURL(course.syllabus);

            // setting course key features
            setCourseKeyFeatureOneData(course.keyFeaturesOne);
            setCourseKeyFeatureTwoData(course.keyFeaturesTwo);
            setCourseKeyFeatureThreeData(course.keyFeaturesThree);
            setCourseKeyFeatureFourData(course.keyFeaturesFour);
            setCourseKeyFeatureFiveeData(course.keyFeaturesFive);
            setCourseKeyFeatureSixData(course.keyFeaturesSix);

            // setting course skills covered
            setCourseSkillsCoveredOne(course.skillsOne)
            setCourseSkillsCoveredTwo(course.skillsTwo)
            setCourseSkillsCoveredThree(course.skillsThree)
            setCourseSkillsCoveredFour(course.skillsFour)
            setCourseSkillsCoveredFive(course.skillsFive)
            setCourseSkillsCoveredSix(course.skillsSix)

            // setting course card details
            setCourseCardOne(course.cardOne);
            setCourseCardTwo(course.cardTwo);
            setCourseCardThree(course.cardThree);
            setCourseCardFour(course.cardFour);

            setIsLoading(true);
        } catch (error: any) {
            toast.error('Something went wrong')
        }
    }

    const downloadFile = () => {
        // const pdfUrl = syllabusURL
        const link = document.createElement('a');
        link.href = syllabusURL;
        link.download = 'syllabus.pdf';
        link.click();
    }

    useEffect(() => {
        courseDetails()
    }, []);

    return (
        <>
            {isLoading ? (
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
                                        <span className="lg:text-5xl text-2xl oxygen-bold font-sans pb-8">{courseTitleData}
                                        </span>
                                    </p>
                                    <p>
                                        <span className="oxygen-semibold text-gray-500 text-lg">
                                            {courseCreatorData}
                                        </span>
                                    </p>
                                    <p>
                                        <span className="source-sans-3-regular text-lg">
                                            {courseDescData}
                                        </span>
                                    </p>
                                    <div className="flex items-center gap-x-10">
                                        {!isFree ? (
                                            <Link href={`/course/${params.courseId}/purchase`} className="font-semibold text-sm text-center border flex bg-[#0056d2] hover:bg-[#00419e] transition-all ease-in-out duration-300 text-white px-6 py-3 rounded-md items-center w-[130px]">
                                                <span>Enroll Now</span>
                                            </Link>
                                        ) : (
                                            <Link href={`/courses/${params.courseId}/add-free-course`} className="font-semibold text-sm text-center border flex bg-[#0056d2] hover:bg-[#00419e] transition-all ease-in-out duration-300 text-white px-6 py-3 rounded-md items-center  cursor-pointer">
                                                Enroll for Free
                                            </Link>
                                        )}
                                        {syllabusURL && (
                                            <button onClick={downloadFile} className="font-semibold text-sm text-center border flex bg-[#0056d2] hover:bg-[#00419e] transition-all ease-in-out duration-300 text-white px-6 py-3 rounded-md items-center">
                                                Download Syllabus
                                            </button>
                                        )}
                                    </div>
                                </div>
                                <p className="lg:w-1/2 w-[80%] text-center">
                                    <img src={courseImageURLData} alt="Course Thumbnail" className="w-full rounded-xl" loading="lazy" />
                                </p>
                            </div>
                        </div>
                        <div className="h-[1px] bg-gray-400 "></div>
                    </div>

                    {/* duration and mode of teaching */}
                    <div className="shadow-md  w-full px-6 lg:px-10 py-5 flex flex-col lg:flex-row justify-center gap-y-4 lg:gap-y-0 source-sans-3-bold">
                        <p className="flex flex-col items-center gap-y-3 lg:border-r border-black py-2 lg:px-20 text-lg font-semibold text-center">
                            <span>
                                Program Duration
                            </span>
                            <span>
                                {courseDurationData && (
                                    <div>
                                        {courseDurationData}
                                    </div>
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
                                    {courseTitleData}
                                </span>
                                <span className="oxygen-semibold">
                                    Overview
                                </span>
                            </span>
                            <span className="source-sans-3-regular">
                                {courseOverviewData}
                                {courseDescData}
                            </span>
                        </p>
                    </div>

                    {/* Cards */}
                    <div className="px-6 lg:px-16 text-lg source-sans-3-regular py-10 flex flex-col md:flex-row flex-wrap gap-y-10 justify-between w-full">
                        {courseCardOne && (
                            <p className="border-b-8 border-b-[#347dfb] border px-4 py-8 rounded-xl w-[300px]">
                                {courseCardOne}
                            </p>
                        )}
                        {courseCardTwo && (
                            <p className="border-b-8 border-b-[#347dfb] border px-4 py-8 rounded-xl w-[300px]">
                                {courseCardTwo}
                            </p>
                        )}
                        {courseCardThree && (
                            <p className="border-b-8 border-b-[#347dfb] border px-4 py-8 rounded-xl w-[300px]">
                                {courseCardThree}
                            </p>
                        )}
                        {courseCardFour && (
                            <p className="border-b-8 border-b-[#347dfb] border px-4 py-8 rounded-xl w-[300px]">
                                {courseCardFour}
                            </p>
                        )}
                    </div>

                    {/* key features */}
                    <div className="flex px-6 lg:px-16 flex-col py-10 shadow-md bg-slate-100 rounded-md">
                        <p className=" pb-8 text-xl oxygen-semibold">KEY FEATURES</p>
                        <div className="flex flex-wrap gap-y-8 justify-between text-[17px] source-sans-3-regular">
                            {courseKeyFeatureOneData && (
                                <p className="w-[400px]">
                                    <span className="flex items-start gap-x-3">
                                        <CheckCircle size={25} className="text-[#347dfb]" /> {courseKeyFeatureOneData}
                                    </span>
                                </p>
                            )}
                            {courseKeyFeatureTwoData && (
                                <p className="w-[400px]">
                                    <span className="flex items-start gap-x-3">
                                        <CheckCircle size={25} className="text-[#347dfb]" /> {courseKeyFeatureTwoData}
                                    </span>
                                </p>
                            )}
                            {courseKeyFeatureThreeData && (
                                <p className="w-[400px]">
                                    <span className="flex items-start gap-x-3">
                                        <CheckCircle size={25} className="text-[#347dfb]" /> {courseKeyFeatureThreeData}
                                    </span>
                                </p>
                            )}
                            {courseKeyFeatureFourData && (
                                <p className="w-[400px]">
                                    <span className="flex items-start gap-x-3">
                                        <CheckCircle size={25} className="text-[#347dfb]" /> {courseKeyFeatureFourData}
                                    </span>
                                </p>
                            )}
                            {courseKeyFeatureFiveData && (
                                <p className="w-[400px]">
                                    <span className="flex items-start gap-x-3">
                                        <CheckCircle size={25} className="text-[#347dfb]" /> {courseKeyFeatureFiveData}
                                    </span>
                                </p>
                            )}
                            {courseKeyFeatureSixData && (
                                <p className="w-[400px]">
                                    <span className="flex items-start gap-x-3">
                                        <CheckCircle size={25} className="text-[#347dfb]" /> {courseKeyFeatureSixData}
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
                            {courseSkillsCoveredOne && (
                                <span className="flex items-center gap-x-1 w-[400px]">
                                    <Dot size={40} className="text-[#347dfb]" />  {courseSkillsCoveredOne}
                                </span>
                            )}
                            {courseSkillsCoveredTwo && (
                                <span className="flex w-[400px] items-center gap-x-1">
                                    <Dot size={40} className="text-[#347dfb]" />  {courseSkillsCoveredTwo}
                                </span>
                            )}
                            {courseSkillsCoveredThree && (
                                <span className="flex w-[400px] items-center gap-x-1">
                                    <Dot size={40} className="text-[#347dfb]" />  {courseSkillsCoveredThree}
                                </span>
                            )}
                            {courseSkillsCoveredFour && (
                                <span className="flex w-[400px] items-center gap-x-1">
                                    <Dot size={40} className="text-[#347dfb]" />  {courseSkillsCoveredFour}
                                </span>
                            )}
                            {courseSkillsCoveredFive && (
                                <span className="flex w-[400px] items-center gap-x-1">
                                    <Dot size={40} className="text-[#347dfb]" />  {courseSkillsCoveredFive}
                                </span>
                            )}
                            {courseSkillsCoveredSix && (
                                <span className="flex w-[400px] items-center gap-x-1">
                                    <Dot size={40} className="text-[#347dfb]" />  {courseSkillsCoveredSix}
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