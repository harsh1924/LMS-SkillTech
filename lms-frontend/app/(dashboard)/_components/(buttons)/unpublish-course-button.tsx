'use client'

import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";


interface ButtonData {
    courseId: string
}
export const UnPublishCourseButton = ({
    courseId
}: ButtonData) => {

    const router = useRouter();
    const onSubmit = async () => {

        try {
            await axios.put(`/api/course/${courseId}/unpublish`);
            toast.success('Course Unpublished');
            router.refresh();
        } catch (error: any) {
            toast.error('Something went wrong')
            console.log(error.message);
        }
    }

    return (
        <button onClick={onSubmit} className="bg-yellow-600 text-white px-5 py-2 rounded-md hover:bg-yellow-500 transition-all ease-in-out duration-300">
            UnPublish
        </button>
    )
}