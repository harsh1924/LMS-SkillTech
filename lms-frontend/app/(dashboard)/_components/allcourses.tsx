'use client';

import { useState } from "react";
import { MainPageCourses } from "./(mainPageComponents)/mainpage-courses";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

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

    const [courseName, setCourseName] = useState('Software Development');
    const [isActive, setIsActive] = useState('Software Development');

    return (
        <div>
            <div className="flex justify-between flex-col w-full gap-x-10 gap-y-5 px-12
                ">
                <div className="flex justify-start gap-x-8">
                    <div className="flex flex-col gap-y-2 w-[300px] border py-4 rounded-md shadow-lg h-[650px]">
                        <span className="text-lg oxygen-bold px-3">
                            Categories
                        </span>
                        <Separator />
                        <div className="flex flex-col gap-y-2 text-[15px]">
                            {courses.map((e) =>
                                <button className={cn(
                                    'hover:text-[#347bdc] py-2 px-3 text-start source-sans-3-regular'
                                    , isActive === e && 'bg-[#ecf2fc] hover:text-black border-r-4 border-[#00419e]')} onClick={() => { setCourseName(e), setIsActive(e) }}>
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