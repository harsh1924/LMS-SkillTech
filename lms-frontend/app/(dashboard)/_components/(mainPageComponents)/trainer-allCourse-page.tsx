'use client'

import axios from "axios"
import { useEffect, useState } from "react"
import AdminAllCourseCard from "../(admin-analytics)/admin-allCourses-card"
import TrainerAllCourseCard from "./trainer-allCourse-card"

interface CourseName {
    category: string
}

export const TrainerMainPageCourses = ({
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
        <div className="flex flex-col gap-y-6 w-full">
            <div className="flex flex-wrap gap-x-10 gap-y-4">
                {categoryCourses.map((course: { title: string; imageUrl: string; _id: string; price: number;createdBy: string; description: string; category: string; isPublished: boolean }) =>
                    <TrainerAllCourseCard title={course.title} imageUrl={course.imageUrl} price={course.price} id={course._id} createdBy={course.createdBy} description={course.description} category={course.category} isPublished={course.isPublished}  />
                )}
            </div>
        </div>
    )
}