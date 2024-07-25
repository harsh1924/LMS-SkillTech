'use client';

import { useEffect, useState } from "react";
import { AdminMainPageCourses } from "@/app/(dashboard)/_components/(mainPageComponents)/admin-allCourse-page";
import { cn } from "@/lib/utils";
import axios from "axios";

const courses = [
    'Software Development',
    'Data Science and Business Analytics',
    'Cyber Security',
    'Cloud Computing',
    'AI and ML',
    'Digital Marketing',
    'IT Service',
    'Project Management'
]

const GetAllCourses = () => {

    const [courseName, setCourseName] = useState('Software Development');
    const [isActive, setIsActive] = useState('Software Development');
    const [userIdData, setUserIdData] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);

    const getId = async () => {
        const res = await axios.get('/api/user/user-details')
        const userId = res.data.user._id;
        if (res) {
            setUserIdData(userId);
            setIsLoading(true);
        }
        // setUserRole(res.data.user.role);
        if (res.data.user.role === 'ADMIN') {
            setIsAdmin(true)
        }
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
                            <span className="flex rounded-md bg-slate-100 px-4 shadow-lg py-6">
                                <AdminMainPageCourses category={courseName} userId={userIdData}/>
                            </span>
                        </div>
                    ) : (
                        <div className="flex h-screen w-screen items-center justify-center">
                            <div className="animate-spin rounded-full border-4 border-gray-300 border-t-gray-900 h-12 w-12 dark:border-gray-600 dark:border-t-gray-50" />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default GetAllCourses;