import Image from "next/image"
import Link from "next/link"

import '@/app/(dashboard)/dashboard.css'

interface courseData {
    courseId: string,
    title: string,
    imageUrl: string,
    userId: string
}

export const UserPurchasedCoursesCard = async ({
    courseId,
    title,
    imageUrl,
    userId
}: courseData) => {

    return (
        <div className="h-full">
            <div className="px-4 py-5 flex flex-col justify-between border rounded-md w-[250px] h-[300px]">
                <Image className="h-[100px] w-full" height={0} width={200} src={imageUrl} alt='Course Thumbnail'></Image>
                <p className="text-[16px] oxygen-semibold">
                    {title}
                    {/* {userId} */}
                </p>
                <p className="flex justify-center items-center text-center">
                    <Link href={`/learn/${userId}/purchased-course-lectures/${courseId}`} className="border px-6 py-2 rounded-md w-full bg-yellow-600 text-white hover:bg-yellow-500 transition-all ease-in-out duration-300 source-sans-3-regular">
                        Continue
                    </Link>
                </p>
            </div>
        </div>
    )
}