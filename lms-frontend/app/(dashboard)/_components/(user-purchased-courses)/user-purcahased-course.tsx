import Image from "next/image"
import Link from "next/link"

interface courseData {
    courseId: string,
    title: string,
    imageUrl: string,
}

export const UserPurchasedCoursesCard = async ({
    courseId,
    title,
    imageUrl
}: courseData) => {

    return (
        <div className="py-10 flex items-center justify-center h-full px-10">
            <div className="px-4 py-5 border rounded-md w-[430px]">
                <Image height={400} width={400} src={imageUrl} alt='Course Thumbnail'></Image>
                <p className="text-xl font-sans font-semibold my-10">
                    {title}
                </p>
                <p className="flex justify-center items-center text-center">
                    <Link href={`/course/${courseId}/purchased-course-lectures`} className="border px-6 py-2 rounded-md w-full bg-yellow-600 text-white hover:bg-yellow-500 transition-all ease-in-out duration-300">
                        Continue
                    </Link>
                </p>
            </div>
        </div>
    )
}