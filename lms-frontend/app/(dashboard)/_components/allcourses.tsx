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
    }, [])

    return (
        <div>
            <div className="">
                {course.map((e) => <CourseCard
                 key={e._id} 
                 title={e.title} description={e.description} category={e.category} createdBy={e.createdBy} />)}
            </div>
        </div>
    );
}

export default GetAllCourses;