import { HomeNavbar } from "@/app/(dashboard)/_components/(mainPageComponents)/navbar";
import { CourseEnrollButton } from "@/app/(dashboard)/_components/course-enroll-button";
import connectToDB from "@/app/server/dbconfig/dbconfig";
import courseModel from "@/app/server/models/courseModel";
import Image from "next/image";

connectToDB();

const PurchaseCourse = async ({ params }: {
    params: { courseId: string }
}) => {

    const course = await courseModel.findById(params.courseId);

    return (
        <div className="flex flex-col items-center h-full">
            <div className="w-full">
                <HomeNavbar />
            </div>
            <div className="border mt-20">
                <h1 className="font-bold text-2xl ">
                    {/* Purchase this course */}
                </h1>
                <div className="flex flex-col gap-y-6">
                    <p>
                        <Image width={500} height={500} src={course.imageUrl} alt="Course Thumbnail" />
                    </p>
                    <div className="flex flex-col gap-y-6">
                        <h1 className="font-bold font-sans text-xl">
                            {course.title}
                        </h1>
                        {/* <Separator /> */}
                        <CourseEnrollButton
                            price={course.price}
                            courseId={params.courseId} />
                        <div className="h-[1px] bg-gray-800 ">

                        </div>
                        <p className="flex items-center justify-between">
                            <span>
                                {course.description}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PurchaseCourse;