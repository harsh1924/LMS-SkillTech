'use client'

import axios from "axios"
import { useEffect, useState } from "react"
import { MainPageCourseCard } from "./mainPage-coursecard"

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
    skillsThree: string;
    duration: number;
    isFree: boolean
}

export const MainPageCourses = ({
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
        <div className="flex flex-col gap-y-6 w-full h-[602px] overflow-y-scroll no-scrollbar">
            <div className="flex flex-wrap gap-x-5 gap-y-4">
                {categoryCourses.map((course: CourseData) =>
                    <MainPageCourseCard key={course._id} title={course.title} imageUrl={course.imageUrl} isPublihed={course.isPublished} courseId={course._id} skillsOne={course.skillsOne} skillsTwo={course.skillsTwo} skillsThree={course.skillsThree} duration={course.duration} isFree={course.isFree} />
                )}
            </div>
        </div>
    )
}