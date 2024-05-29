import { Calendar, Check, DotIcon } from "lucide-react"
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
    duration: number
}

export const MainPageCourseCard = ({
    title,
    imageUrl,
    isPublihed,
    courseId,
    skillsOne,
    skillsTwo,
    skillsThree,
    duration
}: AllHoverCoursesData) => {
    return (
        <div>
            {isPublihed && (
                <Link href={`/course/${courseId}/course-details`} className="flex flex-col min-h-[400px] gap-y-2 w-[250px] bg-white p-2 rounded-md justify-between shadow-md">
                    <Image alt="Course Thumbnail" width={230} height={100} src={imageUrl} />
                    <span className="oxygen-bold">
                        {title}
                    </span>
                    <div className="text-gray-500 text-sm source-sans-3-regular">
                        <p className="flex items-center gap-x-2">
                            <Check size={13} className="text-sky-500" />
                            {skillsOne}
                        </p>
                        <p className="flex items-center gap-x-2">
                            <Check size={13} className="text-sky-500" />
                            {skillsTwo}
                        </p>
                        <p className="flex items-center gap-x-2">
                            <Check size={13} className="text-sky-500" />
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
                            <span className="text-sky-500 text-[13px]">
                                Know More
                            </span>
                        </p>
                    </div>
                </Link>
            )}
        </div>
    )
}