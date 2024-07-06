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
        if (currentTime / duration > 0.95) {
            courseCompletionFunction();
        }
    };

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
    const videoCode = url.split("v=")[1].split("&")[0];
    const opts = {
        height: '400',
        width: '880',
        playerVars: {rel: 0, showinfo: 0, ecver: 0, autoplay: 0},
        
    };

    const opts1 = {
        height: '300',
        width: '330',
        playerVars: {rel: 0, showinfo: 0, ecver: 0, autoplay: 0}
    };

    const opts2 = {
        height: '300',
        width: '700',
        playerVars: {rel: 0, showinfo: 0, ecver: 0, autoplay: 0}
    };

    return (
        <>
            <div className='md:hidden'>
                <YouTube videoId={videoCode} opts={opts1} onStateChange={(e: any) => checkElapsedTime(e)}
                />
            </div>
            <div className='hidden md:flex lg:hidden'>
                <YouTube videoId={videoCode} opts={opts2} onStateChange={(e: any) => checkElapsedTime(e)}
                />
            </div>
            <div className='hidden lg:flex'>
                <YouTube videoId={videoCode} opts={opts} onStateChange={(e: any) => checkElapsedTime(e)}
                />
            </div>
        </>
    )
}