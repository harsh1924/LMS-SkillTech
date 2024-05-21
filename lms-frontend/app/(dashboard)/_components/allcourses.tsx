'use client';

import axios from "axios";
import { NextResponse } from "next/server";
import { useEffect, useState } from "react";
import CourseCard from "./courseCard";

const GetAllCourses = () => {

    const [course, setCourse] = useState([]);
    const getAllCourses = async () => {
        try {
            const response = await axios.get('/api/course/getAllCourses');
            const courseData = response.data.courses;

            setCourse(
                courseData
            )

        } catch (error: any) {
            return NextResponse.json({ error: error.message }, { status: 400 });
        }
    };

    useEffect(() => {
        getAllCourses()
    }, []);

    

    return (
        <div>
            <div className=" flex flex-col flex-wrap items-center md:justify-start w-full md:gap-x-2 lg:gap-x-8 md:flex-row px-4">
                {course.map((e: { title: string; description: string; imageUrl: string; _id: string; category: string; createdBy: string; price: number; isPublished: boolean }) => 
                <CourseCard
                    key={e._id} id={e._id} imageUrl={e?.imageUrl}
                    title={e.title} description={e.description} category={e.category} createdBy={e.createdBy}
                    price={e.price} isPublished={e.isPublished} />)}
            </div>
        </div>
    );
}

export default GetAllCourses;