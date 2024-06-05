'use client';

import { Play } from "lucide-react";
import Link from "next/link";
import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

interface LectureData {
    title: string,
    description: string,
    idx: number,
    id: string,
    videoUrl: string,
    courseId: string,
    userId: string,
    isCompleted: boolean
}

export const LectureList = ({
    title,
    description,
    idx,
    id,
    videoUrl,
    courseId,
    userId,
    isCompleted
}: LectureData) => {

    const router = useRouter();
    const [lectureTitle, setLectureTitle] = useState('');
    const [isDisabled, setIsDisabled] = useState(false);

    const courseCompletionFunction = async () => {
        try {
            const res = await axios.put(`/api/course/${courseId}/user/${userId}/course-completion?lectureId=${id}`);
            const resData = res.data.title
            console.log(resData);
            setLectureTitle(resData)
            // if (resData === true) {
            //     // setIsDisabled(true);
            // }
            if (res) {
                router.refresh();
                toast.success('Mark as completed')
            }
        } catch (error: any) {
            console.log(error.message);
        }
    }

    return (
        <div>
            <div className="flex items-end justify-between gap-x-4 border px-6 py-4 shadow-lg rounded-md w-[400px]">
                <p className="flex flex-col gap-y-2">
                    <span className="font-semibold font-sans text-xl">
                            {title}
                        {id}
                    </span>
                    <span className="text-gray-600 font-semibold">
                        {description}
                    </span>
                </p>
                <div className="flex flex-col gap-y-2">
                    <p>
                        <button onClick={courseCompletionFunction}>
                        Mark as complete
                        </button>
                    </p>
                    <Link className="flex items-center gap-x-2" href={`/course/${courseId}/purchased-course-lectures/${id}/watch-lectures`}>
                        <Play size={18} /> Watch Lecture
                    </Link>
                </div>
            </div>
        </div>
    )
}