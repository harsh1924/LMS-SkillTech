'use client'

import axios from "axios"
import { useEffect, useState } from "react"
import { AllHoverCoursesCard } from "./all-course-hover-card"
import { useRouter } from "next/navigation"
import { Separator } from "@/components/ui/separator"

interface CourseName {
    category: string
}

export const AllCoursesHoverList = ({
    category
}: CourseName) => {

    const [categoryCourses, setCategoryCourses] = useState([]);

    const getCourses = async () => {
        const res = await axios.get(`/api/course/category/?category=${category}`);
        const courses = res.data.courses;
        setCategoryCourses(courses);
    }

    useEffect(() => {
        getCourses()
    }, [category])


    return (
        <div className="flex flex-wrap justify-between gap-y-4 h-[400px] overflow-y-scroll no-scrollbar">
            <span className="text-blue-500">
                {category} Courses
            </span>
            <Separator />
            {categoryCourses.map((course: { title: string; imageUrl: string; isPublished: boolean; _id: string }) =>
                <AllHoverCoursesCard title={course.title} imageUrl={course.imageUrl} isPublihed={course.isPublished} courseId={course._id} />
            )}
        </div>
    )
}