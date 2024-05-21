'use client';

import { IndianRupee } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface data {
    title: string,
    description: string,
    category: string,
    createdBy: string,
    price: number,
    id: string,
    imageUrl: string,
    isPublished: boolean
}

const CourseCard = ({
    title,
    description,
    category,
    createdBy,
    price,
    id,
    imageUrl,
    isPublished
}: data) => {

    return (
        <div>
            {isPublished ? (
                <Link href={`/course/${id}/course-details`} className="flex flex-col justify-between gap-y-3 overflow-hidden border border-black font-sans rounded-lg mb-8 w-[380px]">
                    <div className="flex flex-col gap-y-3 w-full">
                        <div>
                            <img src={imageUrl} alt="Course Thumbnail" className="h-[200px] w-full object-cover" />
                        </div>
                        <div className="flex flex-col gap-y-4 py-6 px-4">
                            <div className="text-xl font-sans font-bold h-[50px]">
                                {title}
                            </div>
                            <p>
                                <span className="text-gray-500 font-semibold">
                                    {createdBy}
                                </span>
                            </p>
                            <div className="text-lg font-sans">
                                <span className="text-lg">
                                    {description}
                                </span>
                            </div>
                            <p>
                                <span className="font-semibold text-lg">
                                    {category}
                                </span>
                            </p>

                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-between px-4 pb-6">
                            <Link href={`/course/${id}/purchase`} className="flex items-center">
                                <p className="bg-sky-500 text-white py-1 rounded-md px-4 hover:bg-white hover:text-sky-500 border border-sky-500 transition-all ease-in-out duration-300">
                                    Enroll Now
                                </p>
                            </Link>
                            <p>
                                <span className=" flex items-center">
                                    <IndianRupee className="text-black" size={15} />
                                    <span className="">
                                        {price}
                                    </span>
                                </span>
                            </p>
                        </div>
                    </div>
                </Link>
            ) : (
                <div className="bg-yellow-200 font-sans py-4 px-3 text-center hidden">
                    This course is being updated.
                </div>
            )}
        </div>
    );
}

export default CourseCard;