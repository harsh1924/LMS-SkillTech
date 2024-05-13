'use client';

import userModel from "@/app/server/models/userModel";
import axios from "axios";
import { IndianRupeeIcon } from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const User = ({
    params
}: {
    params: { courseId: string }
}) => {

    const [courseTitleData, setCourseTitleData] = useState([]);
    const [courseDescData, setCourseDescData] = useState([]);
    const [coursePriceData, setCoursePriceData] = useState([]);
    const [courseCreatorData, setCourseCreatorData] = useState([]);
    const [courseImageURLData, setCourseImageURLData] = useState([]);


    const courseDetails = async () => {
        try {
            const courseId = params.courseId;
            const response = await axios.get(`/api/course/course-details/${courseId}`);
            const course = response.data.course;
            console.log(course);

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
            setCoursePriceData(coursePrice)

            console.log(course.lectures[0]);
            console.log(course.lectures[1]);

        } catch (error: any) {
            toast.error('Something went wrong')
        }
    }

    useEffect(() => {
        courseDetails()
    }, []);

    return (
        <div className="flex h-100vh items-center justify-center py-10">
            <div className="py-10 w-[500px] px-14 grid border-black gap-y-4 shadow-[0_0_10px_black] border flex-col h-full justify-center">
                <p>
                    <img src={courseImageURLData} alt="Course Thumbnail" />
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
        </div>
    );
}

export default User;