"use client"

import axios from "axios";
import { useRouter } from "next/navigation";
import { NextResponse } from "next/server";
import { useState } from "react";
import toast from "react-hot-toast";

export default function FreeCourseCreationPage() {

    const router = useRouter();
    const [course, setCourse] = useState({
        title: '',
        description: '',
        category: '',
        createdBy: '',
        price: '',
    });

    const handleUserInput = (event: { target: { name: any; value: any; }; }) => {
        const { name, value } = event.target;
        setCourse({
            ...course,
            [name]: value,
        });
    };

    const createNewCourse = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        try {
            // API REQUEST
            const response = await axios.post('/api/course/create/free-course', course);

            const courseId = response.data.course._id;
            
            router.push(`/admin/courses/${courseId}/edit-course`);
            if (response) {
                toast.success('Course Created Successfully')
            }


        } catch (error: any) {
            console.log('Course Creation failed', error.message);

            // errors
            if (!course.title || !course.category || !course.createdBy || !course.description || !course.price) {
                toast.error('All fields are required')
            }
            if (course.description.length < 5) {
                toast.error('Description should be atleast 5 characters')
            }

            toast.error(error.message)

            return NextResponse.json({ error: error.message },
                { status: 400 })
        }
    }

    return (
        <form onSubmit={createNewCourse} className="flex justify-center items-center h-full flex-col md:flex-row  gap-10 py-7">
            <div className="w-[400px] border shadow-[0_0_10px_skyblue] px-6 py-4 flex flex-col gap-y-4">
                <h2 className="font-semibold text-xl">
                    Create New Course
                </h2>
                <span className="text-md text-gray-600">
                    Enter details for course creation
                </span>
                <div className="gap-2 flex flex-col">
                    <label htmlFor="title" className="font-semibold">
                        Title
                    </label>
                    <input onChange={handleUserInput} value={course.title} name="title" type="text" id="title" className="p-2 border rounded-md text-[12px] outline-none" placeholder="e.g. Web Development" />
                </div>

                <div className="gap-2 flex flex-col">
                    <label htmlFor="category" className="font-semibold">
                        Category
                    </label>
                    {/* <input onChange={handleUserInput} value={course.category} name="category" type="text" id="category" className="p-2 border rounded-md text-[12px] outline-none" placeholder="e.g. AI & ML" /> */}
                    <select id="options" value={course.category} onChange={handleUserInput} name="category" className="p-2 border rounded-md text-[13px] outline-none">
                        <option value="">Select Course</option>
                        <option value="Software Development">Software Development</option>
                        <option value="Data Science and Business Analytics">Data Science and Business Analytics</option>
                        <option value="Cyber Security">Cyber Security</option>
                        <option value="Cloud Computing">Cloud Computing</option>
                        <option value="AI and ML">AI and ML</option>
                        <option value="Digital Marketing">Digital Marketing</option>
                        <option value="IT Service">IT Service</option>
                        <option value="Project Management">Project Management</option>
                        <option value="Workshop">Workshop</option>
                        <option value="On Job Training">On Job Training</option>
                        <option value="Language Course">Language Course</option>
                    </select>
                </div>
                <div className="gap-2 flex flex-col">
                    <label htmlFor="category" className="font-semibold">
                        Created By
                    </label>
                    <input onChange={handleUserInput} value={course.createdBy} name="createdBy" type="text" id="createdBy" className="p-2 border rounded-md text-[12px] outline-none" placeholder="e.g. John" />
                </div>
                <div className="gap-2 flex flex-col">
                    <label htmlFor="description" className="font-semibold">
                        Description
                    </label>
                    <textarea onChange={handleUserInput} value={course.description} name="description" id="description" className="p-2 border rounded-md text-[12px] outline-none h-[100px] resize-none" placeholder="What are you going to teach?" />
                </div>
                <div className="flex flex-col gap-2">
                    <div className="gap-2 flex flex-col">
                        <label htmlFor="price" className="font-semibold">
                            Certificate Price
                        </label>
                        <input onChange={handleUserInput} value={course.price} name="price" type="number" id="price" className="p-2 border rounded-md text-[12px] outline-none" placeholder="e.g. 32000" />
                    </div>
                    <div className="flex items-center justify-center">
                        <button type="submit" className="border px-4 py-2 bg-[#0056d2] text-white font-serif rounded-md">Create Course</button>
                    </div>
                </div>

            </div>
        </form>
    );
}