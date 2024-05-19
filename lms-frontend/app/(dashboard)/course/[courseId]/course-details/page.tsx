'use client';

import { DashboardComponent } from "@/app/(dashboard)/_components/dashboard-component";
import axios from "axios";
import { IndianRupeeIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const CourseDetails = ({
    params
}: {
    params: { courseId: string }
}) => {

    const [courseTitleData, setCourseTitleData] = useState('');
    const [courseDescData, setCourseDescData] = useState('');
    const [coursePriceData, setCoursePriceData] = useState('');
    const [courseCreatorData, setCourseCreatorData] = useState('');
    const [courseImageURLData, setCourseImageURLData] = useState('');

    const [course, setCourse] = useState([])

    const courseDetails = async () => {
        try {
            const courseId = params.courseId;
            const response = await axios.get(`/api/course/course-details/${courseId}`);
            const course = response.data.course;
            console.log(course.lectures);
            const lectures = course.lectures;
            setCourse(lectures);



            //setting image
            const courseImage = course.imageUrl;
            setCourseImageURLData(courseImage)

            //setting name data
            const courseTitle = course.title;
            setCourseTitleData(courseTitle);

            // setting email data
            const courseEmail = course.description;
            setCourseDescData(courseEmail)

            // setting created by data
            const courseCreator = course.createdBy;
            setCourseCreatorData(courseCreator)

            // setting course price data
            const coursePrice = course.price;
            setCoursePriceData(coursePrice);

        } catch (error: any) {
            toast.error('Something went wrong')
        }
    }

    useEffect(() => {
        courseDetails()
    }, []);

    return (
        <div className="flex flex-col gap-y-3 h-100vh items-center ">
            <div className="w-full">
                <DashboardComponent />
            </div>
            <div className="flex justify-between gap-x-20 ">
                <div className="flex flex-col gap-y-3 items-center">
                    <div className="py-10 w-full px-14 grid gap-y-4 flex-col h-full justify-center">
                        <p>
                            <img src={courseImageURLData} alt="Course Thumbnail" className="w-full rounded-xl" />
                        </p>
                        <p className="flex items-center justify-center gap-x-14">
                            <span className="text-3xl font-bold font-sans pb-8">{courseTitleData}
                            </span>
                        </p>
                        <p className="grid grid-cols-2 gap-x-14">
                            <span className="font-semibold text-gray-500">
                                {courseCreatorData}
                            </span>
                        </p>
                        <p>
                            <span className="font-semibold">
                                {courseDescData}
                            </span>
                        </p>
                        <p className="font-semibold flex items-center">
                            <IndianRupeeIcon size={17} />
                            <span>
                                {coursePriceData}
                            </span>
                        </p>
                    </div>
                    <Link href={`/courses/${params.courseId}/certificate`}>
                        Generate Certificate
                    </Link>
                </div>
                {/* <div className="flex flex-col gap-y-6 ">
                    <span className="font-bold text-xl">
                        View Course Lectures
                    </span>
                    <div className="flex flex-col gap-y-3">
                        {course.map((e: { title: string; description: string; _id: string; }, idx) =>
                            <LectureList
                                title={e.title}
                                description={e.description}
                                idx={idx}
                                id={e._id} />)}
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default CourseDetails;