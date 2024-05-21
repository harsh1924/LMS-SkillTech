import { LectureList } from "@/app/(user)/(lectures)/lecture-list";
import connectToDB from "@/app/server/dbconfig/dbconfig";
import courseModel from "@/app/server/models/courseModel";
import { ArrowLeftCircle } from "lucide-react";

connectToDB();
const PurchasedCourseLectures = async ({
    params
}: {
    params: { courseId: string }
}) => {

    const course = await courseModel.findById(params.courseId);
    const courseLectures = course.lectures;
    const courseLecturesLength = courseLectures.length;

    return (
        <div className="px-10 py-7 flex flex-col gap-y-8">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-4">
                    <ArrowLeftCircle className="mt-1" size={21} />
                    <span className="text-2xl font-sans font-bold text-gray-700">
                        {course.title}
                    </span>
                </div>
                <div className="">
                    Course Progress
                    {courseLecturesLength}
                </div>
            </div>
            <div className="h-[1px] bg-gray-500"></div>
            <div className="flex flex-col gap-y-6">
                {courseLectures.map((e: { _id: string; title: string; description: string; videoUrl: string }, idx: number) =>
                    <div>
                        <LectureList id={e._id} title={e.title} description={e.description} idx={idx} videoUrl={e.videoUrl} courseId={params.courseId} />
                    </div>)
                }
            </div>
        </div>
    );
}

export default PurchasedCourseLectures;