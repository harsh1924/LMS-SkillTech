'use client';

import { useState } from "react";
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

    const [courseName, setCourseName] = useState('Software Development')

    return (
        <div>
            <div className="flex justify-between flex-col w-full gap-x-10 gap-y-5 px-12
                ">
                <div className="flex justify-start gap-x-8">
                    <div className="flex flex-col gap-y-2 w-[300px] border px-3 py-4 rounded-md shadow-lg h-[650px]">
                        <span className="text-lg oxygen-bold">
                            Categories
                        </span>
                        <Separator />
                        <div className="flex flex-col gap-y-5 text-[15px]">
                            {courses.map((e) =>
                                <button className="hover:text-[#688F4E] text-start source-sans-3-regular" onClick={() => setCourseName(e)}>
                                    {e}
                                </button>)}
                        </div>
                    </div>
                    <div className="w-[80%]">
                        <span className="flex border rounded-md px-4 py-6">
                            <MainPageCourses category={courseName} />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GetAllCourses;