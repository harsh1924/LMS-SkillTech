import Link from "next/link"
import '@/app/(dashboard)/dashboard.css'

interface searchPageCourseData {
    title: string,
    description: string,
    imageUrl: string,
    duration: string,
    createdBy: string,
    id: string
}

export const SearchPageCourses = ({
    title,
    description,
    imageUrl,
    duration,
    createdBy,
    id
}: searchPageCourseData) => {
    return (
        <>
            <Link href={`course/${id}/course-details`} className="flex flex-col w-[500px]">
                <div className="flex gap-y-3 items-center">
                    <div className="py-10 w-full lg:px-8 flex flex-row-reverse gap-x-4 items-center justify-center border rounded-md h-[280px]">
                        <div className="flex gap-y-1 flex-col px-4 py-6 justify-around h-[200px] w-[280px]">
                            <p>
                                <span className="text-lg oxygen-bold w-[300px]">
                                    {title}
                                </span>
                            </p>
                            <p>
                                <span className="oxygen-semibold text-gray-500">
                                    {createdBy}
                                </span>
                            </p>
                            <p>
                                <span className="source-sans-3-regular">
                                    {duration} Months
                                </span>
                            </p>
                            <p className="flex items-center justify-between source-sans-regular">
                                <span className="text-[13px]">
                                    Online Bootcamp
                                </span>
                                <span className="text-[#347bdc] text-[13px]">
                                    Know More
                                </span>
                            </p>
                        </div>
                        <p className="shadow-md border p-6 text-center">
                            <img src={imageUrl} alt="Course Thumbnail" className="w-[200px] rounded-xl" />
                        </p>

                    </div>
                </div>
            </Link>
        </>
    )
}