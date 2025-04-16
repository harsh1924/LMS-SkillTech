'use client';

import { useState } from "react";

import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { courses } from "@/app/data/courses"

import { MainPageCourses } from "./(mainPageComponents)/mainpage-courses";

const GetAllCourses = () => {

    const [courseName, setCourseName] = useState('Software Development');
    const [isActive, setIsActive] = useState('Software Development');

    return (
        <div>
            <div className="flex justify-between flex-col w-full gap-x-10 gap-y-5 px-12
                ">
                <div className="flex flex-col md:flex-row justify-start gap-x-8">
                    <div className="flex flex-col gap-y-2 md:w-[300px] border py-4 rounded-md shadow-lg md:h-[650px]">
                        <span className="text-lg oxygen-bold px-3">
                            Categories
                        </span>
                        <Separator />
                        <div className="flex md:flex-col flex-wrap gap-y-2 text-[15px]">
                            {courses.map((e) =>
                                <button key={e} className={cn(
                                    'hover:text-primaryhoverblue py-2 px-3 text-start source-sans-3-regular'
                                    , isActive === e && 'bg-categorybg hover:text-black border-r-4 border-categoryborder')} onClick={() => { setCourseName(e), setIsActive(e) }}>
                                    {e}
                                </button>)}
                        </div>
                    </div>
                    <div className="md:w-[80%]">
                        <span className="flex justify-center border rounded-md px-4 py-6">
                            <MainPageCourses category={courseName} />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GetAllCourses;