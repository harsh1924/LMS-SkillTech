import { IndianRupee } from "lucide-react";
import Link from "next/link";

import '@/app/(dashboard)/dashboard.css'

interface data {
    title: string,
    description: string,
    category: string,
    createdBy: string,
    price: number,
    id: string,
    imageUrl: string,
    isPublished: boolean,
    userId: string
}

const AdminAllCourseCard = ({
    title,
    description,
    category,
    createdBy,
    price,
    id,
    imageUrl,
    isPublished,
    userId
}: data) => {

    return (
        <div>
            <Link href={`/course/${id}/course-details`} className="flex flex-col justify-between rounded border bg-white shadow-md  w-[250px] h-[270px] mb-4">
                <div className="flex flex-col gap-y-1 w-full">
                    <div>
                        <img src={imageUrl} alt="Course Thumbnail" className="h-[100px] w-full object-cover" />
                    </div>
                    <div className="flex flex-col justify-between gap-y-1 py-2 px-4">
                        <div className="oxygen-bold text-[14px]">
                            {title}
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex items-center px-4 pb-6">
                        <Link href={`/admin/courses/${id}/edit-course`} className="bg-[#0056d2] text-white py-2 rounded-md px-5 source-sans-3-regular">
                            Edit
                        </Link>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default AdminAllCourseCard;