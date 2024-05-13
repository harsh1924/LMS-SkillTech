"use client";

import connectToDB from "@/app/server/dbconfig/dbconfig";
import { useState } from "react";
import axios from "axios";
import { NextResponse } from "next/server";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

connectToDB();

const AddLecturesPage = ({
    params
}: {
    params: { courseId: string }
}) => {
    const router = useRouter();
    const [lecture, setLecture] = useState({
        title: '',
        description: ''
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
            if (response) {
                toast.success('Lecture Added Successfully')
            }
            // const courseId = response.data.course._id;
            router.refresh();


        } catch (error: any) {
            console.log(error.message);
            toast.error('Lecture could not be added')
            return NextResponse.json({ error: error.message },
                { status: 400 })
        }
    }

    return (
        <div>
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
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center justify-center">
                            <button type="submit" className="border px-4 py-2 bg-sky-500 text-white font-serif rounded-md">Add Lecture</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>

    );
}

export default AddLecturesPage;