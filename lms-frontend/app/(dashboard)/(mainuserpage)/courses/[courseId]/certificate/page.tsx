'use client'
import '@/app/helpers/Certificate.css'
import certificateImage from '@/app/helpers/Blue and Yellow Vector Modern Completion Certificate.png'

import React, { useEffect, useState, useCallback, useRef } from 'react';
import { toPng } from 'html-to-image';
import Image from 'next/image';
import axios from 'axios';

const PdfCertificate = ({
    params
}: {
    params: { courseId: string }
}) => {
    const ref = useRef(null)
    const [name, setName] = useState('');
    const [course, setCourse] = useState('');

    const getId = async () => {
        const res = await axios.get('/api/user/user-details')

        const userName = res.data.user.name;
        setName(userName)
    }

    const getCourse = async () => {
        const response = await axios.get(`/api/course/course-details/${params.courseId}`);
        const course = response.data.course;
        console.log(course.title);
        if (response) {
            setCourse(course.title)
        }
    }

    const onButtonClick = useCallback(() => {
        if (ref.current === null) {
            return
        }

        toPng(ref.current, { cacheBust: true, })
            .then((dataUrl) => {
                const link = document.createElement('a')
                link.download = 'Blue and Yellow Vector Modern Completion Certificate.png'
                link.href = dataUrl
                link.click()
            })
            .catch((err) => {
                console.log(err)
            })
    }, [ref])

    useEffect(() => {
        getCourse(),
            getId()
    }, [])

    return (
        <div className='flex gap-y-6 flex-col justify-center items-center'>
            <div className="container" ref={ref}>
                <Image alt='Certificate Image' className='border border-black' src={certificateImage} />
                <div className="content">
                    <h1 className='font-bold text-4xl font-sans flex items-center justify-center'>
                        {name}
                    </h1>
                    <p className='font-semibold text-xl flex justify-center items-center'>
                        {course}
                    </p>
                </div>
            </div>
            <button className='bg-yellow-600 px-6 py-2 rounded-md text-white' onClick={onButtonClick}>
                Generate Certificate
            </button>
            
        </div>
    )
};

export default PdfCertificate;