import courseModel from "@/app/server/models/courseModel";
import { LectureTitleForm } from "../../../../_components/lecture-title-form";
import connectToDB from "@/app/server/dbconfig/dbconfig";
import { LectureDescriptionForm } from "../../../../_components/lecture-description-form";
import { LectureVideoForm } from "../../../../_components/lecture-video-form";

connectToDB();

const chapterIdPage = async (
    { params }: {
        params: { courseId: string; lectureId: string }
    }
) => {

    const course = await courseModel.findById(params.courseId)
    const courseId = params.courseId;
    const chapter = course.lectures;
    const lecture = chapter.findIndex((e: { id: string; }) => e.id === params.lectureId)
    const finalChapter = chapter[lecture];

    return (
        <div>
            <div className="flex flex-col px-6 lg:justify-between">
                <LectureTitleForm
                title={finalChapter.title}
                lectureId={finalChapter._id}
                courseId={courseId} />
                <LectureDescriptionForm
                description={finalChapter.description}
                lectureId={finalChapter._id}
                courseId={courseId} />
                <LectureVideoForm
                videoUrl={finalChapter.videoUrl}
                lectureId={finalChapter._id}
                courseId={courseId} />
            </div>
        </div>
    )
};

export default chapterIdPage;