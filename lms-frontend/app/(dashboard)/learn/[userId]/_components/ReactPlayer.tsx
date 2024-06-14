'use client'
import axios from 'axios';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import YouTube from 'react-youtube';


interface data {
    url: string,
    courseId: string,
    userId: string,
    id: string
}

export const Player = ({
    url,
    courseId,
    userId,
    id
}: data) => {
    const router = useRouter();
    const checkElapsedTime = (e: { target: { getDuration: () => any; getCurrentTime: () => any; }; }) => {
        const duration = e.target.getDuration();
        const currentTime = e.target.getCurrentTime();
        console.log(currentTime / duration);
        if (currentTime / duration > 0.95) {
            courseCompletionFunction();
        }
    };

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
    const videoCode = url.split("v=")[1].split("&")[0];
    const opts = {
        height: '400',
        width: '800',
        playerVars: {
            autoplay: 0,
        },

    };

    return (
        <div>
            <YouTube videoId={videoCode} opts={opts} onStateChange={(e) => checkElapsedTime(e)}
            />
        </div>
    )
}