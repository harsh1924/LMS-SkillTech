'use client'

import { ArrowRight, SquarePlay } from "lucide-react"
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
        <div>
            <div className="outline-none border px-5 py-2 rounded-sm bg-sky-500 text-white font-serif lg:flex items-center gap-x-2 hidden group relative cursor-pointer">
                <SquarePlay />
                All Courses
                <div className="hidden border rounded-md flex-col gap-y-4 group-hover:flex hover:flex bg-white absolute text-black top-[41px] left-0 text-lg px-5 py-2 w-[300px] transition-all ease-in-out duration-300">
                    Categories
                    <div className="w-full">
                        <Separator />
                    </div>
                    <div className="flex flex-col gap-y-5 ">
                        <div className="flex flex-col gap-y-5">
                            {courses.map((e) =>
                                <button className="flex active:text-sky-500 text-start justify-between group" onClick={() => setCourseName(e)}>
                                    {e}
                                    <ArrowRight />
                                </button>)}
                            <span className="hidden group-hover:flex absolute left-[300px] border rounded-md z-50 w-[900px] bg-slate-100 px-4 py-6">
                                <AllCoursesHoverList category={courseName} />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}