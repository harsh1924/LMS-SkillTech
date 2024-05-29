import { Calendar, DotIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface AllHoverCoursesData {
    title: string,
    imageUrl: string,
    isPublihed: boolean,
    courseId: string,
    skillsOne: string
    skillsTwo: string,
    duration: number
}

export const AllHoverCoursesCard = ({
    title,
    imageUrl,
    isPublihed,
    courseId,
    skillsOne,
    skillsTwo,
    duration
}: AllHoverCoursesData) => {
    return (
        <div>
            {isPublihed && (
                <Link href={`/course/${courseId}/course-details`} className="flex flex-col min-h-[150px] w-[350px] bg-white p-2 rounded-md justify-between shadow-md">
                    <Image alt="Course Thumbnail" width={100} height={100} src={imageUrl} />
                    <span className="oxygen-bold text-[13px]">
                        {title}
                    </span>
                    <div className="text-sm flex mt-4 gap-x-1 items-center">
                        <Calendar size={16} className="text-gray-500 " />
                        <span className="text-[12px] text-gray-500">
                            {duration} months
                        </span>
                    </div>
                </Link>
            )}
        </div>
    )
}