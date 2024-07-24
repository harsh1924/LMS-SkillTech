'use client'

import Link from "next/link";
import { Button } from "@/components/ui/button";

import '@/app/(dashboard)/dashboard.css'
import { useEffect, useState } from "react";
import axios from "axios";

const CoursePage = () => {

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
            {isAdmin ? (
                <div className="px-10 source-sans-3-regular items-center h-[150px] flex gap-x-10 flex-wrap">
                    <Link href={'/admin/courses/all-courses'}>
                        <span className="px-6 py-4 rounded-md text-white bg-[#0056d2] hover:bg-[#00419e] duration-300 transition-all ease-in-out">
                            View all Courses
                        </span>
                    </Link>
                    <Link href='/admin/create'>
                        <span className="px-6 py-4 rounded-md text-white bg-[#0056d2] hover:bg-[#00419e] duration-300 transition-all ease-in-out">
                            New Course
                        </span>
                    </Link>
                    <Link href='/admin/create/free-course'>
                        <span className="px-6 py-4 rounded-md text-white bg-[#0056d2] hover:bg-[#00419e] duration-300 transition-all ease-in-out">
                            Create Free Course
                        </span>
                    </Link>
                </div>
            ) : (
                <div className="flex h-[600px] w-full justify-center items-center">
                    <span className="text-5xl oxygen-bold">
                        Unauthorized!
                    </span>
                </div>
            )}
        </div>
    );
}

export default CoursePage;