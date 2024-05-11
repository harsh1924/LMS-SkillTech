"use client";

import connectToDB from "@/app/server/dbconfig/dbconfig";
import courseModel from "@/app/server/models/courseModel";
import { FileEdit, Link } from "lucide-react";
import { redirect, useRouter } from "next/navigation";
import { ImageUpload } from "./_components/image-form";
import { useState } from "react";
import axios from "axios";
import { NextResponse } from "next/server";

connectToDB();

const courseIdPage = ({
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

    const addNewLecture = async  (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        try {
            // API REQUEST
            const response = await axios.post('/api/course/create/add-lecture/:id', lecture);
            // const courseId = response.data.course._id;
            // router.push(`/admin/courses/`);


        } catch (error: any) {
            console.log('Course Creation failed', error.message);

            return NextResponse.json({ error: error.message },
                { status: 400 })
        }
    }

    return (
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
                    <input onChange={handleUserInput} value={lecture.description} name="description" type="text" id="description" className="p-2 border rounded-md text-[12px] outline-none" placeholder="Enter Lecture Description" />
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-center">
                        <button type="submit" className="border px-4 py-2 bg-sky-500 text-white font-serif rounded-md">Add Lecture</button>
                    </div>
                </div>
            </div>
            {params.courseId}
        </form>
    );
}

export default courseIdPage;