'use client'

import { cn } from "@/lib/utils";
import { AllCoursesHoverList } from "./all-course-hover-courses"
import { useState } from "react"
import { Separator } from "@/components/ui/separator"
import Link from "next/link";

const courses = [
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

export const HoverAllCourses = () => {

    const [courseName, setCourseName] = useState('Software Development');
    const [isActive, setIsActive] = useState('Software Development');

    return (
        <div className="navbar">
            <div className="outline-none border px-5 z-50 py-2 rounded-sm bg-[#0056d2] text-white oxygen-bold lg:flex items-center hidden group relative cursor-pointer">
                <Link href={'/all-courses'}>
                    All Courses
                </Link>
                <div className="hidden border rounded-md flex-col gap-y-4 group-hover:flex hover:flex bg-white absolute text-black top-[41px] left-[-150px] text-lg py-2 w-[280px] transition-all ease-in-out duration-300">
                    <span className="pt-4 oxygen-bold px-5">
                        CATEGORIES
                    </span>
                    <div className="w-full">
                        <Separator />
                    </div>
                    <div className="flex flex-col gap-y-5 h-[400px] overflow-y-scroll no-scrollbar">
                        <div className="flex flex-col gap-y-3">
                            {courses.map((e) =>
                                <button className={cn(
                                    'hover:text-[#347bdc] py-1 px-5 text-start text-[14px] source-sans-3-regular'
                                    , isActive === e && 'bg-[#ecf2fc] hover:text-black border-r-4 border-[#00419e]')} onClick={() => { setCourseName(e), setIsActive(e) }}>
                                    {e}
                                </button>)}
                            <span className="hidden py-8 group-hover:flex absolute left-[277px] top-0 border rounded-md z-50 w-[1000px] bg-slate-100 px-4">
                                <AllCoursesHoverList category={courseName} />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}