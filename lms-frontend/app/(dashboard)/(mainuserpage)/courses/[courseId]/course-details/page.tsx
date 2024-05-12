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
    const [userRoleData, setUserRoleData] = useState([]);


    const userDetails = async () => {
        try {
            const courseId = params.courseId;
            const response = await axios.get(`/api/course/course-details/${courseId}`);
            const course = response.data.course;
            console.log(response.data);

            console.log(course);

            //setting name data
            const newUserNameData = course.title;
            setCourseTitleData(newUserNameData);
            // setting email data
            const newUserEmailData = course.description;
            setCourseDescData(newUserEmailData)


            const coursePrice = course.price;
            setCoursePriceData(coursePrice)
            console.log(coursePrice);
            // setting role data
            const newUserRoleData = course.lectures.map((e: any) => e);
            // setUserRoleData(newUserRoleData)
            console.log(newUserRoleData);

            console.log(course.lectures[0]);
            console.log(course.lectures[1]);

        } catch (error: any) {
            toast.error('Something went wrong')
        }
    }

    useEffect(() => {
        userDetails()
    }, []);

    return (
        <div className="flex h-100vh items-center justify-center py-10">
            <div className="py-10 w-[500px] px-14 grid border-black gap-y-4 shadow-[0_0_10px_black] border flex-col h-full justify-center">
                <p className="flex items-center justify-center gap-x-14">
                    <span className="text-3xl font-bold font-sans pb-8">{courseTitleData}</span>
                </p>
                <p>
                    {/* <span className="font-semibold text-[19px]">Email:</span> */}
                    <span className="font-semibold text-gray-500">{courseDescData}</span>
                </p>
                <p className="grid grid-cols-2 gap-x-14">
                    {/* <span className="font-semibold text-[19px]">Role:</span> */}
                    <span className="font-semibold text-gray-500">
                        {userRoleData}
                    </span>
                    {/* {params.courseId} */}
                </p>
                <p className="font-semibold flex items-center">
                   <IndianRupeeIcon size={17} /> <span>{coursePriceData}</span>
                </p>
            </div>
        </div>
    );
}

export default User;