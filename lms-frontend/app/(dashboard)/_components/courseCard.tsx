'use client';

import { DollarSign, IndianRupee, PenIcon } from "lucide-react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

interface data {
    title: string,
    description: string,
    category: string,
    createdBy: string,
    price: number,
    id: string
}


const CourseCard = ({
    title,
    description,
    category,
    createdBy,
    price,
    id
}: data) => {
    const pathname = usePathname();
    const courseId = id;
    const isAdminPage = pathname?.startsWith('/admin')


    return (
        <Link href={`/courses/${id}/course-details`} className="flex flex-col justify-between gap-y-3 rounded  border border-black py-12 px-14 font-sans mb-8">
            <div className="flex flex-col gap-y-3 w-full">
                <div className="text-xl font-sans font-bold ">
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
                <p>
                    <span className=" flex items-center juc">
                        <IndianRupee className="text-black" size={15} />
                        <span className="">
                            {price}
                        </span>
                    </span>
                </p>
            </div>
            <div>
                {isAdminPage ? (
                    <div className="flex items-center">
                        <Link href={`/admin/courses/${id}/edit-course`} className="bg-black text-white py-1 rounded-md px-4 hover:bg-white hover:text-black hover:border hover:border-black border transition-all ease-in-out duration-300">
                            Edit
                        </Link>
                    </div>
                ) : (
                    <Link href={'/user/purchase'} className="flex items-center">
                        <button className="bg-sky-500 text-white py-1 rounded-md px-4 hover:bg-white hover:text-sky-500 border border-sky-500 transition-all ease-in-out duration-300">
                            Enroll Now
                        </button>
                    </Link>
                )}
            </div>
        </Link>
    );
}

export default CourseCard;