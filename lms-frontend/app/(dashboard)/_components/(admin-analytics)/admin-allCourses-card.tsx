'use client';

import { IndianRupee } from "lucide-react";
import Link from "next/link";

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

const AdminAllCourseCard = ({
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
            <Link href={`/course/${id}/course-details`} className="flex flex-col justify-between gap-y-3 rounded  border border-black font-sans mb-8">
                <div className="flex flex-col gap-y-3 w-full">
                    <div>
                        <img src={imageUrl} alt="Course Thumbnail" className="h-[200px] w-full object-cover" />
                    </div>
                    <div className="flex flex-col gap-y-4 py-6 px-4">
                        <div className="text-xl font-sans font-bold h-[50px]">
                            {title}
                        </div>
                        {/* <p>
                            <span className="text-gray-500 font-semibold">
                                {createdBy}
                            </span>
                        </p> */}
                        {/* <div className="text-lg font-sans">
                            <span className="text-lg">
                                {description}
                            </span>
                        </div> */}
                        <p>
                            <span className="font-semibold text-lg">
                                {category}
                            </span>
                        </p>
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
                <div>
                    <div className="flex items-center px-4 pb-6">
                        <Link href={`/admin/courses/${id}/edit-course`} className="bg-black text-white py-1 rounded-md px-4 hover:bg-white hover:text-black hover:border hover:border-black border transition-all ease-in-out duration-300">
                            Edit
                        </Link>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default AdminAllCourseCard;