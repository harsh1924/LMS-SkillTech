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
            <div className="px-10 source-sans-3-regular items-center h-[150px] flex gap-x-10 flex-wrap">
                <Link href={'/admin/courses/all-courses/edit_details_of_all_courses'}>
                    <span className="px-6 py-4 rounded-md text-white bg-[#0056d2] hover:bg-[#00419e] duration-300 transition-all ease-in-out">
                        View all Courses
                    </span>
                </Link>
                <Link href='/admin/create/create_new_paid_courses'>
                    <span className="px-6 py-4 rounded-md text-white bg-[#0056d2] hover:bg-[#00419e] duration-300 transition-all ease-in-out">
                        New Course
                    </span>
                </Link>
                <Link href='/admin/create/free-course/create_new_free_courses'>
                    <span className="px-6 py-4 rounded-md text-white bg-[#0056d2] hover:bg-[#00419e] duration-300 transition-all ease-in-out">
                        Create Free Course
                    </span>
                </Link>
            </div>
        </div>
    );
}

export default CoursePage;