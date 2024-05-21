import { Logo } from "@/app/(dashboard)/_components/logo";
import connectToDB from "@/app/server/dbconfig/dbconfig";
import courseModel from "@/app/server/models/courseModel";
import { ArrowLeftCircle } from "lucide-react";
import Link from "next/link";


connectToDB();
const WatchLectures = async ({
    params
}: {
    params: { courseId: string; lectureId: string }
}) => {

    const course = await courseModel.findById(params.courseId);
    const lectureIndex = course.lectures.findIndex((e: { id: string; }) => e.id === params.lectureId)
    const currentLecture = course.lectures[lectureIndex];

    return (
        <div>
            <div className="border-b-2 py-4 px-5">
                <Logo />
            </div>
            <div className="flex flex-col gap-y-6 py-2 px-6">
                <div className="flex flex-col gap-y-6 lg:flex-row-reverse lg:justify-between lg:items-center">
                    <p className="pt-2">
                        <iframe className="h-[200px] w-[400px] md:h-[300px] md:w-[600px] lg:h-[500px] lg:w-[1000px]" src={currentLecture.videoUrl}></iframe>
                    </p>
                    <div className="flex flex-col gap-y-4">
                        <h1 className="font-semibold text-xl">
                            {currentLecture.title}
                        </h1>
                        <p>
                            {currentLecture.description}
                        </p>
                    </div>
                </div>
                <div>
                    <Link href={`/course/${params.courseId}/purchased-course-lectures`} className="flex w-[150px] gap-x-2">
                        <ArrowLeftCircle />
                        <span>
                            Go Back
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default WatchLectures;