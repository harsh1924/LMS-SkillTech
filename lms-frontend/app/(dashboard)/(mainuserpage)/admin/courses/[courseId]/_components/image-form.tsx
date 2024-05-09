'use client';

import courseModel from "@/app/server/models/courseModel";
import axios from "axios";
import { useParams } from "next/navigation";
import { FormEvent, useState } from "react";

export const ImageUpload = () => {


    return (
        <div className="pt-4">
            <form >
                <label htmlFor="image-upload" className="cursor-pointer " >
                    Choose Course Thumbnail
                </label>
                <input type="file" id="image-upload" className="" />
                <button type="submit" className="border px-4 py-2 my-3 border-sky-500 rounded-md text-sky-600 hover:text-white hover:cursor-pointer hover:bg-sky-500 transition-all ease-in-out duration-300">
                    Upload
                </button>
            </form>
        </div>
    )
}