'use client'

import { ArrowRight } from "lucide-react"
import { AllCoursesHoverList } from "./all-course-hover-courses"
import { useState } from "react"
import { Separator } from "@/components/ui/separator"

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

export const HoverAllCourses = () => {

    const [courseName, setCourseName] = useState('Software Development')

    return (
        <div className="navbar">
            <div className="outline-none border px-5 z-50 py-2 rounded-sm bg-[#2B463C] text-white font-serif lg:flex items-center gap-x-2 hidden group relative cursor-pointer">
                All Courses
                <div className="hidden border rounded-md flex-col gap-y-4 group-hover:flex hover:flex bg-white absolute text-black top-[41px] left-0 text-lg px-5 py-2 w-[300px] transition-all ease-in-out duration-300">
                    <span className="pt-6 oxygen-bold">
                    CATEGORIES
                    </span>
                    <div className="w-full">
                        <Separator />
                    </div>
                    <div className="flex flex-col gap-y-5 h-[400px]">
                        <div className="flex flex-col gap-y-6">
                            {courses.map((e) =>
                                <button className="flex text-start justify-between group text-sm hover:text-[#688F4E]" onClick={() => setCourseName(e)}>
                                    {e}
                                </button>)}
                            <span className="hidden py-8 group-hover:flex absolute left-[300px] top-0 border rounded-md z-50 w-[750px] bg-slate-100 px-4">
                                <AllCoursesHoverList category={courseName} />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}