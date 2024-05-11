'use client';

import courseModel from "@/app/server/models/courseModel";
import axios from "axios";
import { useParams } from "next/navigation";
import { FormEvent, useState } from "react";
import { CldUploadWidget } from 'next-cloudinary'

export const ImageUpload = () => {


    return (
        <div className="pt-4">
            <CldUploadWidget signatureEndpoint={'/api/course/image-upload'}>
                {({ open }) => {
                    return (
                        <button onClick={() => open()}>
                            Upload an Image
                        </button>
                    );
                }}
            </CldUploadWidget>
        </div>
    )
}