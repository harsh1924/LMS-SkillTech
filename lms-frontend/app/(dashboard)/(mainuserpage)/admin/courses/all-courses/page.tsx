'use client';

import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import { MainPageCourses } from "@/app/(dashboard)/_components/(mainPageComponents)/mainpage-courses";
import { AdminMainPageCourses } from "@/app/(dashboard)/_components/(mainPageComponents)/admin-allCourse-page";

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
            <div className="flex justify-between w-full gap-x-10 gap-y-5
                ">
                <div className="flex w-full flex-col justify-start gap-x-8">
                    <div className="flex gap-y-2 border px-3 py-4  w-full">
                        {/* <span className="text-lg font-semibold">
                            Categories
                        </span> */}
                        {/* <Separator /> */}
                        <div className="flex gap-y-2 flex-wrap">
                            {courses.map((e) =>
                                <button className="active:text-sky-500 text-start text-[12px] h-[70px] w-[150px] px-4 rounded-md shadow-md" onClick={() => setCourseName(e)}>
                                    {e}
                                </button>)}
                        </div>
                    </div>
                    <div className="w-full">
                        <span className="flex rounded-md bg-slate-100 px-4 shadow-lg py-6">
                            <AdminMainPageCourses category={courseName} />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GetAllCourses;