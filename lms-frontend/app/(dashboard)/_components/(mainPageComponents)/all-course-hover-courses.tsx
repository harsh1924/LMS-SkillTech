'use client'

import axios from "axios"
import { useEffect, useState } from "react"
import { AllHoverCoursesCard } from "./all-course-hover-card"

interface CourseName {
    category: string
}

interface CourseData {
    title: string;
    imageUrl: string;
    isPublished: boolean;
    _id: string;
    skillsOne: string;
    skillsTwo: string;
    duration: number
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
        <div className="flex flex-wrap gap-y-6 h-[430px] gap-x-6 overflow-y-scroll no-scrollbar">
            {categoryCourses.map((course: CourseData) =>
                <AllHoverCoursesCard key={course._id} title={course.title} imageUrl={course.imageUrl} isPublihed={course.isPublished} courseId={course._id} skillsOne={course.skillsOne} skillsTwo={course.skillsTwo} duration={course.duration} />
            )}
        </div>
    )
}