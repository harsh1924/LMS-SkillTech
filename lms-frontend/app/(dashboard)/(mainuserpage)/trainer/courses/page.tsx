import Link from "next/link";
import { Button } from "@/components/ui/button";

import '@/app/(dashboard)/dashboard.css'

const CoursePage = () => {
    return (
        <div className="px-10 source-sans-3-regular items-center h-[150px] flex gap-x-10">
            <Link href={'/trainer/courses/all-courses'}>
            <span className="px-6 py-4 rounded-md text-white bg-[#0056d2]">
                    View all Courses
                </span>
            </Link>
            <Link href='/admin/create'>
                <span className="px-6 py-4 rounded-md text-white bg-[#0056d2]">
                    New Course
                </span>
            </Link>
            <Link href='/admin/create/free-course'>
                <span className="px-6 py-4 rounded-md text-white bg-[#0056d2]">
                    Create Free Course
                </span>
            </Link>
        </div>
    );
}

export default CoursePage;