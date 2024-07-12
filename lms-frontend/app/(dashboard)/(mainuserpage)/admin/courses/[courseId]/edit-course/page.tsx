import courseModel from "@/app/server/models/courseModel";
import { TitleForm } from "../_components/title-form";
import { DescriptionForm } from "../_components/description-form";
import { PriceForm } from "../_components/price-form";
import { CategoryForm } from "../_components/category-form";
import { CreatedByForm } from "../_components/createdBy-form";
import { ImageForm } from "../_components/image-form";
import connectToDB from "@/app/server/dbconfig/dbconfig";
import { PublishCourseButton } from "@/app/(dashboard)/_components/(buttons)/publish-course-button";
import { UnPublishCourseButton } from "@/app/(dashboard)/_components/(buttons)/unpublish-course-button";

import { LayoutDashboard, Trash2 } from "lucide-react";

import Link from "next/link";
import { AttachmentForm } from "../_components/attachment-form";
import { ResourceForm } from "../_components/resource-form";

connectToDB();

const CourseEdit = async ({
    params
}: {
    params: { courseId: string }
}) => {

    const course = await courseModel.findById(params.courseId).select('-lectures');

    return (
        <div>
            {!course.isPublished ? (
                <div className="bg-yellow-200 font-sans py-4 px-3 text-center">
                    This course is <span className="font-semibold">NOT PUBLISHED</span>. It will not be visible to students!
                </div>
            ) : (
                <div className="bg-green-300 font-sans py-4 px-3 text-center">
                    This course is <span className="font-semibold">PUBLISHED</span>. It is visible to students!
                </div>
            )}
            <div className="px-6 pb-10">
                <div className="grid grid-cols-1 mt-16">
                    <div className="flex items-center">
                        <div className="flex items-center w-full gap-x-2">
                            <LayoutDashboard className="hidden md:block text-sky-500" />
                            <h2 className="text-xl">
                                Customize Your Course
                            </h2>
                        </div>
                        <div className="flex gap-x-4">
                            {!course.isPublished ? (
                                <PublishCourseButton courseId={params.courseId} />
                            ) : (
                                <UnPublishCourseButton courseId={params.courseId} />
                            )}
                            
                            <Link href={`/admin/courses/${params.courseId}/edit-course/delete-course`} className="bg-red-600 hover:bg-red-700 transition-all duration-300 ease-in-out text-white py-2 rounded-md px-5">
                                <Trash2 size={20} />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-x-6">
                    <TitleForm
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
                    <AttachmentForm
                        initialData={course}
                        courseId={course.id} />
                    <DescriptionForm
                        initialData={course}
                        courseId={course.id} />
                    <ImageForm
                        initialData={course}
                        courseId={course.id} />
                    <ResourceForm
                        initialData={course}
                        courseId={course.id} />
                </div>
                <div className="my-6 flex justify-between items-center flex-wrap gap-y-2">
                    <Link href={'/admin/courses/all-courses'} className="bg-sky-500 hover:bg-sky-600 transition-all duration-300 ease-in-out text-white py-2 rounded-md px-5">
                        Done
                    </Link>
                    <Link href={`/admin/courses/${params.courseId}/edit-course/other-details`} className="bg-sky-500 hover:bg-sky-600 transition-all duration-300 ease-in-out text-white py-2 rounded-md px-5">
                        Other Details
                    </Link>
                    <Link href={`/admin/courses/${params.courseId}/edit-course/add-lectures/view-lectures`} className="bg-sky-500 hover:bg-sky-600 transition-all duration-300 ease-in-out text-white py-2 rounded-md px-5">
                        Edit Lectures
                    </Link>
                    <Link href={`/admin/courses/${params.courseId}/edit-course/add-lectures`} className="bg-sky-500 hover:bg-sky-600 transition-all duration-300 ease-in-out text-white py-2 rounded-md px-5">
                        Add Lectures
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default CourseEdit;