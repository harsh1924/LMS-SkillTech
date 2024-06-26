'use client'

import { HomeNavbar } from "@/app/(dashboard)/_components/(mainPageComponents)/navbar";
import { Logo } from "@/app/(dashboard)/_components/logo";
import axios from "axios";
import { ArrowLeftCircle, IndianRupeeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const AddFreeCourse = ({
    params
}: {
    params: { courseId: string }
}) => {

    const router = useRouter();

    const [courseTitleData, setCourseTitleData] = useState('');
    const [courseDescData, setCourseDescData] = useState('');
    const [courseCreatorData, setCourseCreatorData] = useState('');
    const [courseImageURLData, setCourseImageURLData] = useState('');
    const [courseDurationData, setCourseDurationData] = useState('');
    const [userIdData, setUserIdData] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const [data, setData] = useState({
        courseId: params.courseId,
        userId: ''
    })

    const getId = async () => {
        const res = await axios.get('/api/user/user-details')
        const userIdData = res.data.user._id;
        setUserIdData(userIdData);
        setData({
            ...data,
            userId: userIdData
        })
        setIsLoading(true)
    }

    const addFreeCourse = async () => {
        try {
            const res = await axios.post(`/api/course/${params.courseId}/user/${userIdData}/add-free-course`, data)
            if (res) {
                toast.success('Enrolled Successfully');
                router.push('/profile')
            }
        } catch (error: any) {
            console.log(error.message);
            toast.error('Course Already Purchased');
            router.push('/profile');
        }
    }

    const courseDetails = async () => {
        const courseId = params.courseId;
        const response = await axios.get(`/api/course/course-details/${courseId}`);
        const course = response.data.course;
        setCourseImageURLData(course.imageUrl)
        setCourseTitleData(course.title);
        setCourseDescData(course.description)
        setCourseCreatorData(course.createdBy)
        setCourseDurationData(course.duration);
    }

    useEffect(() => {
        getId(),
            courseDetails()
    }, []);

    return (
        <div>
            {!isLoading ? (
                <div className="flex h-screen w-screen items-center justify-center">
                    <div className="animate-spin rounded-full border-4 border-gray-300 border-t-gray-900 h-12 w-12 dark:border-gray-600 dark:border-t-gray-50" />
                </div>
            ) : (
                // <div>
                //     <HomeNavbar />
                //     <div className="flex px-6 flex-col justify-between lg:gap-x-20 ">
                //         <div className="flex flex-col gap-y-3 items-center">
                //             <div className="py-10 w-full lg:px-8 flex flex-col-reverse lg:flex-row gap-x-4  h-full justify-center">
                //                 <div className="lg:w-[750px] flex gap-y-6 flex-col lg:px-8 py-3">
                //                     <p>
                //                         <span className="lg:text-5xl text-2xl oxygen-bold font-sans pb-8">{courseTitleData}
                //                         </span>
                //                     </p>
                //                     <p>
                //                         <span className="oxygen-semibold text-gray-500 text-lg">
                //                             {courseCreatorData}
                //                         </span>
                //                     </p>
                //                     <p>
                //                         <span className="source-sans-3-regular text-lg">
                //                             {courseDescData}
                //                         </span>
                //                     </p>
                //                 </div>
                //                 <p className="lg:w-1/2 w-[80%] text-center">
                //                     <img src={courseImageURLData} alt="Course Thumbnail" className="w-full rounded-xl" />
                //                 </p>
                //             </div>
                //         </div>
                //         <span onClick={addFreeCourse} className="font-semibold text-sm text-center border flex bg-[#0056d2] hover:bg-[#00419e] transition-all ease-in-out duration-300 text-white px-6 py-3 rounded-md items-center w-[130px] cursor-pointer">
                //             <span>Enroll Now</span>
                //         </span>
                //         <div className="h-[1px] bg-gray-400 "></div>
                //     </div>
                // </div>
                <div className="flex flex-col items-center mb-10">
                    <div className="w-full shadow-md py-6 px-20">
                        <Logo />
                    </div>
                    <Link href={`/`} className="my-5 flex items-center gap-x-2 text-gray-500 hover:text-black ease-in-out transition-all duration-300">
                        <ArrowLeftCircle />
                        Back
                    </Link>
                    <div className="shadow-[0_0_10px_#C5C6D0] py-10 px-8 rounded-md max-w-[550px] mb-10">
                        <h1 className="oxygen-bold text-2xl pb-6 text-center">
                            Order Details
                        </h1>
                        <div className="bg-gray-300 h-[2px] mb-10"></div>
                        <div className="flex flex-col gap-y-6">
                            <p className="flex gap-x-6">
                                <Image width={250} height={200} src={courseImageURLData} className="rounded-md" alt="Course Thumbnail" />
                                <span className="oxygen-bold text-xl">
                                    {courseTitleData}
                                </span>
                            </p>
                            <div>
                                <p className="flex justify-between text-lg w-full p-1 text-gray-500 source-sans-3-regular">
                                    <span>
                                        Subtotal
                                    </span>
                                    <span className="flex items-center">
                                        <IndianRupeeIcon size={17} />
                                        00
                                    </span>
                                </p>
                                <p className="flex justify-between text-lg w-full p-1 text-gray-500 source-sans-3-regular">
                                    <span>
                                        GST (18%)
                                    </span>
                                    <span className="flex items-center">
                                        <IndianRupeeIcon size={17} />
                                        00
                                    </span>
                                </p>
                                <div className="h-[1px] my-5 bg-gray-800 "></div>
                                <p className="flex justify-between text-lg w-full p-1 font-semibold">
                                    <span>
                                        Total
                                    </span>
                                    <span className="flex items-center">
                                        <IndianRupeeIcon size={17} />
                                        00
                                    </span>
                                </p>
                            </div>
                            <button onClick={addFreeCourse} className="rounded-md px-16 py-2 bg-[#0056d2] text-white oxygen-regular hover:bg-[#00419e] transition-all ease-in-out duration-300 cursor-pointer">
                                Enroll Now
                            </button>
                        </div>
                    </div>
                </div>
            )
            }
        </div>
    )
}

export default AddFreeCourse;