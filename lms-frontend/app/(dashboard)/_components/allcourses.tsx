'use client';

import axios from "axios";
import { NextResponse } from "next/server";
import { useEffect, useState } from "react";
import CourseCard from "./courseCard";
import { AllCoursesHoverList } from "./(mainPageComponents)/all-course-hover-courses";
import { ArrowRight } from "lucide-react";
import { MainPageCourses } from "./(mainPageComponents)/mainpage-courses";
import { Separator } from "@/components/ui/separator";

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

    const [courseName, setCourseName] = useState('Software Development')

    return (
        <div>
            <div className="flex justify-between flex-col w-full gap-x-10 gap-y-5 px-10
                ">
                <div className="flex justify-start gap-x-8">
                    <div className="flex flex-col gap-y-2 w-[300px] border px-3 py-4 rounded-md shadow-lg h-[650px]">
                        <span className="text-lg font-semibold">
                            Categories
                        </span>
                        <Separator />
                        <div className="flex flex-col gap-y-10">
                            {courses.map((e) =>
                                <button className="active:text-sky-500 text-start text-lg" onClick={() => setCourseName(e)}>
                                    {e}
                                </button>)}
                        </div>
                    </div>
                    <div className="w-[60%]">
                        <span className="flex rounded-md bg-slate-100 px-4 shadow-lg py-6">
                            <MainPageCourses category={courseName} />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GetAllCourses;