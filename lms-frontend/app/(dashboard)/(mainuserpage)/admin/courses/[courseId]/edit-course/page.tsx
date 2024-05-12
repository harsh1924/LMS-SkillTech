// 'use client';

import courseModel from "@/app/server/models/courseModel";
import { useEffect, useState } from "react";
import { TitleForm } from "../_components/title-form";
import { DescriptionForm } from "../_components/description-form";
import { LayoutDashboard } from "lucide-react";
import { PriceForm } from "../_components/price-form";
import { CategoryForm } from "../_components/category-form";
import { CreatedByForm } from "../_components/createdBy-form";

const CourseEdit = async ({
    params
}: {
    params: { courseId: string }
}) => {
    const course = await courseModel.findById(params.courseId);
    const courseDataA = course;
    console.log(courseDataA.title);

    return (
        <div className="px-6 pb-10">
            <div className="grid grid-cols-1 mt-16">
                <div className="flex items-center w-full gap-x-2">
                    <LayoutDashboard className="hidden md:block text-sky-500" />
                    <h2 className="text-xl">
                        Customize Your Course
                    </h2>
                </div>
            </div>
            <div>
                <TitleForm
                    initialData={course}
                    courseId={course.id} />
                <DescriptionForm
                    initialData={course}
                    courseId={course.id} />
                <PriceForm
                    initialData={course}
                    courseId={course.id} />
                <CategoryForm
                    initialData={course}
                    courseId={course.id} />
                <CreatedByForm
                    initialData={course}
                    courseId={course.id} />
            </div>
        </div>
    );
}

export default CourseEdit;