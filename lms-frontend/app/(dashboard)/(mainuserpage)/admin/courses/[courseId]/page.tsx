'use client';

import connectToDB from "@/app/server/dbconfig/dbconfig";
import courseModel from "@/app/server/models/courseModel";
import { FileEdit, Link } from "lucide-react";
import { redirect } from "next/navigation";
import { ImageUpload } from "./_components/image-form";
import { useState } from "react";

connectToDB();

const courseIdPage = async ({
    params
}: {
    params: { courseId: string }
}) => {

    return (
        <form className="flex justify-center items-center h-full flex-col gap-10 pt-6">
            <div className="w-[400px] border shadow-[0_0_10px_skyblue] px-6 py-4 flex flex-col gap-y-4">
                <h2 className="font-semibold text-xl">
                    Add Lectures
                </h2>
                <div className="gap-2 flex flex-col">
                    <label htmlFor="title" className="font-semibold">
                        Title
                    </label>
                    <input  name="title" type="text" id="title" className="p-2 border rounded-md text-[12px] outline-none" placeholder="Enter Your Name" />
                </div>
                <div className="gap-2 flex flex-col">
                    <label htmlFor="email" className="font-semibold">
                        Email
                    </label>
                    <input name="email" type="email" id="email" className="p-2 border rounded-md text-[12px] outline-none" placeholder="Enter Your Email" />
                </div>
                <div className="gap-2 flex flex-col">
                    <label htmlFor="password" className="font-semibold">
                        Password
                    </label>
                    <input name="password" type="password" id="password" className="p-2 border rounded-md text-[12px] outline-none" placeholder="Enter Your Password" />
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-center">
                        <button type="submit" className="border px-4 py-2 bg-sky-500 text-white font-serif rounded-md">Create Account</button>
                    </div>
                    <div className="text-[13px] text-gray-500">
                        Already have an account? {" "}
                        <Link href={'/login'} className="text-sky-500 font-serif">Log In</Link>

                    </div>
                </div>
            </div>
        </form>
    );
}

export default courseIdPage;