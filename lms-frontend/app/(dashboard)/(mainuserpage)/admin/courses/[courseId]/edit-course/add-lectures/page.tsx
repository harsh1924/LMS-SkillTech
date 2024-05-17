"use client";

import { useState } from "react";
import axios from "axios";
import { NextResponse } from "next/server";
import toast from "react-hot-toast";
import Link from "next/link";
import { useRouter } from "next/navigation";

const AddLecturesPage = ({
    params
}: {
    params: { courseId: string }
}) => {

    const router = useRouter();
    const [lecture, setLecture] = useState({
        title: '',
        description: '',
        videoUrl: ''
    });

    const handleUserInput = (event: { target: { name: any; value: any; }; }) => {
        const { name, value } = event.target;
        setLecture({
            ...lecture,
            [name]: value,
        });
    };

    const addNewLecture = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        try {
            // API REQUEST
            const courseId = params.courseId
            const response = await axios.post(`/api/course/create/${courseId}/add-lecture`, lecture);
            const lectureId = response.data.lastLecture._id;
            if (response) {
                toast.success('Lecture Added Successfully')
                router.refresh();
            }

        } catch (error: any) {
            console.log(error.message);
            toast.error('Lecture could not be added')
            return NextResponse.json({ error: error.message },
                { status: 400 })
        }
    }

    return (
        <div className="flex flex-col items-center gap-y-10">
            <form onSubmit={addNewLecture} className="flex justify-center items-center h-full flex-col gap-10 pt-6">
                <div className="w-[400px] border shadow-[0_0_10px_skyblue] px-6 py-4 flex flex-col gap-y-4">
                    <h2 className="font-semibold text-xl">
                        Add Lectures
                    </h2>
                    <div className="gap-2 flex flex-col">
                        <label htmlFor="title" className="font-semibold">
                            Title
                        </label>
                        <input onChange={handleUserInput} value={lecture.title} name="title" type="text" id="title" className="p-2 border rounded-md text-[12px] outline-none" placeholder="Enter Lecture Title" />
                    </div>
                    <div className="gap-2 flex flex-col">
                        <label htmlFor="description" className="font-semibold">
                            Description
                        </label>
                        <textarea onChange={handleUserInput} value={lecture.description} name="description" id="description" className="p-2 border rounded-md text-[12px] outline-none resize-none h-[100px]" placeholder="Enter Lecture Description" />
                    </div>
                    <div className="gap-2 flex flex-col">
                        <label htmlFor="videoUrl" className="font-semibold">
                            Video Link
                        </label>
                        <input type="text" onChange={handleUserInput} value={lecture.videoUrl} name="videoUrl" id="videoUrl" className="p-2 border rounded-md text-[12px] outline-none" placeholder="Enter Lecture Video Link" />
                    </div>

                    <div className="flex flex-col gap-2">
                        <div className="flex items-center justify-center">
                            <button type="submit" className="border px-4 py-2 bg-sky-500 text-white font-serif rounded-md">Add Lecture</button>
                        </div>
                    </div>
                </div>
            </form>
            <div>
                <Link href={`/admin/courses/${params.courseId}/edit-course/add-lectures/view-lectures`} className="px-4 py-3 border-b border-sky-500 hover:text-white hover:bg-sky-500 transition-all ease-in-out duration-300 rounded-sm">
                    View Lectures
                </Link>
            </div>
        </div>
    );
}

export default AddLecturesPage;