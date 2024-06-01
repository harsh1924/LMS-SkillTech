'use client'

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const DeleteCourse = ({
    params
}: {
    params: { courseId: string }
}) => {

    const router = useRouter();

    const deleteCourse = async () => {
        await axios.delete(`/api/course/delete-course/?courseId=${params.courseId}`);
        router.push('/trainer/courses/all-courses');
        toast.success('Course Deleted Successfully');
    }

    return (
        <div className="flex justify-center items-center h-[90vh]">
            <div className="border flex flex-col items-center justify-center py-10 px-4 gap-y-6
            ">
                <p className="font-bold text-lg w-[80%] text-center">
                    Are you sure you want to delete the course
                </p>
                <div className="flex justify-around w-[80%]">
                    <button onClick={deleteCourse} className="bg-red-600 hover:bg-red-700 transition-all duration-300 ease-in-out text-white py-2 rounded-md px-5">
                        Yes
                    </button>
                    <Link href={`/trainer/courses/${params.courseId}/edit-course`} className="border border-green-500 text-green-600 px-6 py-2 rounded-md">
                        Cancel
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default DeleteCourse;