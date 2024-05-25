'use client';

import { Play } from "lucide-react";
import Link from "next/link";
import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"

interface LectureData {
    title: string,
    description: string,
    idx: number,
    id: string,
    videoUrl: string,
    courseId: string
}

export const LectureList = ({
    title,
    description,
    idx,
    id,
    videoUrl,
    courseId
}: LectureData) => {

    const [isDisabled, setIsDisabled] = useState(false);
    const [watchedLectures, setWatchedLectures] = useState(0);
    const watchedLecturesFunction = () => {
        setWatchedLectures(watchedLectures + 1)
        setIsDisabled(true)
    }

    return (
        <div>
            <div className="flex items-end justify-between gap-x-4 border px-6 py-4 shadow-lg rounded-md w-[400px]">
                <p className="flex flex-col gap-y-2">
                    <span className="font-semibold font-sans text-xl">
                        {title.toUpperCase()}
                    </span>
                    <span className="text-gray-600 font-semibold">
                        {description}
                    </span>
                </p>
                <div className="flex flex-col gap-y-2">
                    <p>
                        <Checkbox onClick={watchedLecturesFunction} />
                        Mark as complete
                        {watchedLectures}
                    </p>
                    <Link className="flex items-center gap-x-2" href={`/course/${courseId}/purchased-course-lectures/${id}/watch-lectures`}>
                        <Play size={18} /> Watch Lecture
                    </Link>
                </div>
            </div>
        </div>
    )
}