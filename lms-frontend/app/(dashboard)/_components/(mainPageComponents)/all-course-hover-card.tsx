import Image from "next/image"
import Link from "next/link"

interface AllHoverCoursesData {
    title: string,
    imageUrl: string,
    isPublihed: boolean,
    courseId: string
}

export const AllHoverCoursesCard = ({
    title,
    imageUrl,
    isPublihed,
    courseId
}: AllHoverCoursesData) => {
    return (
        <div>
            {isPublihed && (
                <Link href={`/course/${courseId}/course-details`} className="flex flex-col min-h-[150px] gap-y-2 w-[400px] bg-white p-2 rounded-md shadow-md">
                    <Image alt="Course Thumbnail" width={100} height={100} src={imageUrl} />
                    {title}
                </Link>
            )}
        </div>
    )
}