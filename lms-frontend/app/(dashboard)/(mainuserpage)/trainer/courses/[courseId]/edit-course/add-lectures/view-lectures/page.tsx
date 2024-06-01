import connectToDB from "@/app/server/dbconfig/dbconfig";
import courseModel from "@/app/server/models/courseModel";
import { Layout } from "lucide-react";
import { LectureCard } from "../../../_components/lecture-card";

connectToDB();

const ViewLectures = async ({
    params
}: {
    params: { courseId: string }
}) => {

    const course = await courseModel.findById(params.courseId);
    const courseLectures = course.lectures;

    return (
        <div className="flex flex-col ">
            <h1 className="px-6 py-4 flex gap-x-3 items-center justify-center">
                <Layout className="text-sky-500" /> 
                <span className="text-xl">
                Course Lectures
                </span>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 px-2 py-6">
                {courseLectures.map((e: { title: string; description: string; videoUrl: string; _id: string; }) => <LectureCard key={e._id} title={e.title} description={e.description} videoUrl={e.videoUrl} id={e._id} courseId={params.courseId} /> )
                }
            </div>
        </div>
    );
}

export default ViewLectures;