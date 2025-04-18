/* eslint-disable no-unused-vars */
'use client';

import { Check } from "lucide-react";
import { useEffect, useRef } from "react"
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
    const ref = useRef<null | HTMLDivElement>(null);

    const setLecture = async () => {
        try {
            await axios.put(`/api/user/${userId}/setLectureURL/course/${courseId}/lecture?lectureId=${id}`)
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
                toast.success('Lecture Completed')
            }
        } catch (error: any) {
            console.log(error.message);
        }
    }

    const scrollToLecture = () => {
        const lectureSection = document.getElementById('id')!;
        if (lectureSection) {
            ref.current!.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        scrollToLecture()
    }, [])
    return (

        <div>
            <div className="flex items-center justify-between gap-x-4 px-6 py-6 border-b w-full">
                <div>
                    <div onClick={setLecture} className="oxygen-semibold flex items-center gap-x-6 cursor-pointer">
                        <div className="flex flex-col gap-y-2">
                            <div>
                                {!isCompleted ? (
                                    <input type="checkbox" onChange={courseCompletionFunction} />
                                ) : (
                                    <Check className="text-green-700" size={15} />
                                )}
                            </div>
                        </div>
                        <div id="id" ref={ref} className="lg:w-[150px] overflow-hidden">
                            {title}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}