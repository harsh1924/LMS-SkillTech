'use client';

import { useEffect, useState } from "react";
import { AdminMainPageCourses } from "@/app/(dashboard)/_components/(mainPageComponents)/admin-allCourse-page";
import { cn } from "@/lib/utils";
import axios from "axios";
import courseModel from "@/app/server/models/courseModel";
import LoadingState from "@/app/(dashboard)/_components/LoadingState";
import Link from "next/link";

const courses = [
    'All Courses',
    'Software Development',
    'Data Science and Business Analytics',
    'Cyber Security',
    'Cloud Computing',
    'AI and ML',
    'Digital Marketing',
    'IT Service',
    'Project Management',
    'Workshop',
    'On Job Training',
    'Language Course'
]

const GetAllCourses = () => {

    const [courseName, setCourseName] = useState('All Courses');
    const [isActive, setIsActive] = useState('All Courses');
    const [userIdData, setUserIdData] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [allCourses, setAllCourses] = useState<any[]>([]);

    const getId = async () => {
        const res = await axios.get('/api/user/user-details')
        const userId = res.data.user._id;
        if (res) {
            setUserIdData(userId);
            getCourses();
            setIsLoading(true);
        }
        if (res.data.user.role === 'ADMIN') {
            setIsAdmin(true)
        }
    }

    const getCourses = async () => {
        const response = await axios.get('/api/course/get-all-courses');
        const allCourses: any[] = response.data.courses;
        setAllCourses(allCourses);
    }

    useEffect(() => {
        getId()
    }, []);

    return (
        <div>
            <div className="flex justify-between w-full gap-x-10 gap-y-5
                ">
                <div className="flex w-full flex-col justify-start gap-x-8">
                    <div className="flex gap-y-2 border px-3 py-4  w-full">
                        <div className="flex gap-y-2 flex-wrap">
                            {courses.map((e) =>
                                <button className={cn(
                                    'hover:text-[#347bdc] py-2 px-3 text-start rounded-md mr-1 border source-sans-3-regular'
                                    , isActive === e && 'bg-[#d3e2fd] hover:text-black shadow-md')} onClick={() => { setCourseName(e), setIsActive(e) }}>
                                    {e}
                                </button>)}
                        </div>
                    </div>
                    {isLoading ? (
                        <div className="w-full">
                            {courseName != 'All Courses' && (
                                <span className="flex rounded-md bg-slate-100 px-4 shadow-lg py-6 h-[900px] overflow-scroll no-scrollbar">
                                    <AdminMainPageCourses category={courseName} userId={userIdData} />
                                </span>
                            )}
                        </div>
                    ) : (
                        <LoadingState />
                    )}
                </div>
            </div>
            {courseName === 'All Courses' && (
                <div>
                    {!isLoading ? (
                        <LoadingState />
                    ) : (
                        <div className="flex flex-wrap rounded-md bg-slate-100 px-4 shadow-lg py-6 h-[900px] overflow-scroll no-scrollbar">
                            {allCourses.map((course) =>
                                <div className="flex flex-col mx-4">
                                    <Link href={`/course/${course._id}/course-details`} className="flex flex-col justify-between rounded border bg-white shadow-md w-[250px] h-[300px] font-sans mb-4">
                                        <div className="flex flex-col gap-y-1 w-full">
                                            <div>
                                                <img src={course.imageUrl} alt="Course Thumbnail" className="h-[100px] w-full object-cover" />
                                            </div>
                                            <div className="flex flex-col gap-y-1 min-h-[130px] justify-around py-2 px-4">
                                                <div className="oxygen-bold text-[14px]">
                                                    {course.title}
                                                </div>
                                                <div className="oxygen-regular text-[14px]">
                                                    {course.category}
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex items-center px-4 pb-6">
                                                <Link href={`/admin/courses/${course._id}/edit-course`} className="bg-[#0056d2] text-white py-2 rounded-md px-5 source-sans-3-regular">
                                                    Edit
                                                </Link>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default GetAllCourses;