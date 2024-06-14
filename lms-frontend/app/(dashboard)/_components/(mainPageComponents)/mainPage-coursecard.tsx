import { Calendar, Check } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface AllHoverCoursesData {
    title: string,
    imageUrl: string,
    isPublihed: boolean,
    courseId: string,
    skillsOne: string
    skillsTwo: string,
    skillsThree: string,
    duration: number,
    isFree: boolean
}

export const MainPageCourseCard = ({
    title,
    imageUrl,
    isPublihed,
    courseId,
    skillsOne,
    skillsTwo,
    skillsThree,
    duration,
    isFree
}: AllHoverCoursesData) => {
    return (
        <div className="px-1">
            {isPublihed && (
                <Link href={`/course/${courseId}/course-details`} className="flex flex-col min-h-[400px] gap-y-2 w-[250px] bg-white p-2 rounded-md justify-between shadow-md hover:shadow-lg">
                    <Image alt="Course Thumbnail" width={230} height={100} src={imageUrl} />
                    <span className="oxygen-bold">
                        {title}
                    </span>
                    <div className="text-gray-500 text-sm source-sans-3-regular">
                        <p className="flex items-center gap-x-2">
                            <Check size={13}
                                className="text-[#347dfb]" />                            {skillsOne}
                        </p>
                        <p className="flex items-center gap-x-2">
                            <Check size={13} className="text-[#347dfb]" />
                            {skillsTwo}
                        </p>
                        <p className="flex items-center gap-x-2">
                            <Check size={13} className="text-[#347dfb]" />
                            {skillsThree}
                        </p>
                    </div>
                    <div className="mt-4 source-sans-3-regular">
                        <p className="flex items-center gap-x-1">
                            <Calendar size={20} className="text-gray-500 pb-1" />
                            <span className="text-[13px]">
                                {duration} months
                            </span>
                        </p>
                        <p className="flex items-center justify-between">
                            <span className="text-[13px]">
                                Online Bootcamp
                            </span>
                            <span className="text-[#347dfb] text-[13px]">
                                Know More
                            </span>
                        </p>
                    </div>
                </Link>
            )}
        </div>
    )
}