import { ArrowLeftCircle, PanelLeftDashed } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { CourseEnrollButton } from "@/app/(dashboard)/_components/course-enroll-button";
import { Logo } from "@/app/(dashboard)/_components/logo";
import connectToDB from "@/app/server/dbconfig/dbconfig";
import courseModel from "@/app/server/models/courseModel";

connectToDB();

const PurchaseCourse = async ({ params }: {
    params: { courseId: string }
}) => {

    const course = await courseModel.findById(params.courseId);

    return (
        <div className="flex flex-col items-center mb-10">
            <Link href={'/'} className="w-full shadow-md py-6 px-20">
                <Logo />
            </Link>
            <Link href={`/`} className="my-5 flex items-center gap-x-2 text-gray-500 hover:text-black ease-in-out transition-all duration-300">
                <ArrowLeftCircle />
                Back
            </Link>
            <div className="shadow-[0_0_10px_#C5C6D0] py-10 px-8 rounded-md max-w-[550px] mb-10">
                <h1 className="oxygen-bold text-2xl pb-6 text-center">
                    Order Details
                </h1>
                <div className="bg-gray-300 h-[2px] mb-10"></div>
                <div className="flex flex-col gap-y-6">
                    <p className="flex gap-x-6">
                        <Image width={250} height={200} src={course.imageUrl} className="rounded-md" alt="Course Thumbnail" loading="lazy" />
                        <span className="oxygen-bold text-xl">
                            {course.title}
                        </span>
                    </p>
                    <div className="flex flex-col gap-y-6">
                        <CourseEnrollButton
                            price={course.price}
                            courseId={params.courseId}
                            courseName={course.title}
                            courseDescription={course.description} 
                            isCourseFree={course.isFree}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PurchaseCourse;