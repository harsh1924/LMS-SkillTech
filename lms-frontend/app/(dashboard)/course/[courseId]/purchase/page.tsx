import { HomeNavbar } from "@/app/(dashboard)/_components/(mainPageComponents)/navbar";
import { CourseEnrollButton } from "@/app/(dashboard)/_components/course-enroll-button";
import { Logo } from "@/app/(dashboard)/_components/logo";
import connectToDB from "@/app/server/dbconfig/dbconfig";
import courseModel from "@/app/server/models/courseModel";
import { ArrowLeftCircle, PanelLeftDashed } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

connectToDB();

const PurchaseCourse = async ({ params }: {
    params: { courseId: string }
}) => {

    const course = await courseModel.findById(params.courseId);

    return (
        <div className="flex flex-col items-center h-full">
            <div className="w-full shadow-md py-6 px-20">
                <Logo />
            </div>
            <Link href={`/`} className="my-10 flex items-center gap-x-2 text-gray-500">
                <ArrowLeftCircle />
                Back
            </Link>
            <div className="shadow-[0_0_10px_#C5C6D0] py-10 px-8 rounded-md max-w-[550px]">
                <h1 className="font-bold text-2xl pb-6 text-center">
                    Order Details
                </h1>
                <div className="bg-gray-300 h-[2px] mb-10"></div>
                <div className="flex flex-col gap-y-6">
                    <p className="flex gap-x-6">
                        <Image width={250} height={200} src={course.imageUrl} className="rounded-md" alt="Course Thumbnail" />
                        <span className="font-bold font-sans text-xl">
                            {course.title}
                        </span>
                    </p>
                    <div className="flex flex-col gap-y-6">
                        <CourseEnrollButton
                            price={course.price}
                            courseId={params.courseId} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PurchaseCourse;