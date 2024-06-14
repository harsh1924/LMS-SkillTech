'use client';

import { Play, PlayCircle } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react"
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
    isCompleted: boolean,
    currentLecture: string
}

export const LectureList = ({
    title,
    description,
    idx,
    id,
    videoUrl,
    courseId,
    userId,
    isCompleted,
    currentLecture
}: LectureData) => {

    const router = useRouter();
    const [lectureTitle, setLectureTitle] = useState('');
    const [isDisabled, setIsDisabled] = useState(false);
    const ref = useRef(currentLecture);
    // const [lectureURL]
    // console.log(isCompleted);

    const setLecture = async () => {
        try {
            const res = await axios.put(`/api/user/${userId}/setLectureURL/course/${courseId}/lecture?lectureId=${id}`)
            router.refresh();
        } catch (error: any) {
            console.log(error.message);
        }
    }

    const courseCompletionFunction = async () => {
        try {
            const res = await axios.put(`/api/course/${courseId}/user/${userId}/course-completion?lectureId=${id}`);
            router.refresh();
            if (res) {
                toast.success('Mark as completed')
            }
        } catch (error: any) {
            console.log(error.message);
        }
    }

    
    return (

        <div>
            <div className="flex items-center justify-between gap-x-4 px-6 py-6 border-b w-[400px]">
                <p className="flex flex-col gap-y-2">
                    <span onClick={setLecture} className="font-semibold flex items-center gap-x-2 font-sans text-xl cursor-pointer">
                        <PlayCircle />
                        {title}
                    </span>
                </p>
                <div className="flex flex-col gap-y-2">
                    <p>
                        <button onClick={courseCompletionFunction}>
                            Mark as complete
                        </button>
                    </p>
                    {/* <Link className="flex items-center gap-x-2" href={`/course/${courseId}/purchased-course-lectures/${id}/watch-lectures`}>
                        <Play size={18} />
                        Watch Lecture
                    </Link> */}
                </div>
            </div>

        </div>
    )
}