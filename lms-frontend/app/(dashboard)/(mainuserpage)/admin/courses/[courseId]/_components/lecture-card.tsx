'use client'

import { Player } from "@/app/(dashboard)/learn/[userId]/_components/ReactPlayer"
import axios from "axios"
import { Pen, Trash2Icon } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import YouTube from 'react-youtube';

interface courseData {
    title: string,
    description: string,
    videoUrl: string,
    id: string,
    courseId: string
}

export const LectureCard = ({
    title,
    description,
    videoUrl,
    id,
    courseId
}: courseData) => {

    const router = useRouter();
    const videoCode = videoUrl.split("v=")[1].split("&")[0];
    const opts = {
        height: '240',
        width: '330',
        playerVars: {
            autoplay: 0,
        },
    };

    const deleteLectureById = async () => {
        await axios.delete(`/api/course/?courseId=${courseId}&lectureId=${id}`);
        router.refresh();
    }

    return (
        <div className="border rounded-md overflow-hidden">
            <div>
                <p>
                    {/* <iframe allowFullScreen className="w-[560px] md:w-full" height="240" src={videoUrl}>
                    </iframe> */}
                    {/* <Player url={videoUrl}></Player> */}
                    {/* {videoUrl} */}
                    <YouTube videoId={videoCode} opts={opts} />
                </p>
                <div className="px-4 py-3 flex items-end justify-between">
                    <div className="flex flex-col gap-y-3">
                        <h1 className="text-2xl font-bold font-sans">
                            {title}
                        </h1>
                        <p className="text-lg">
                            {description}
                        </p>
                    </div>
                    <div className="flex items-center gap-x-2">
                        <button onClick={deleteLectureById} className="py-3">
                            <Trash2Icon />
                        </button>
                        <Link href={`/admin/courses/${courseId}/edit-course/add-lectures/${id}/edit-lecture`}>
                            <Pen />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}