'use client'

import '@/app/helpers/Certificate.css'
import certificateImage from '@/app/helpers/Blue and Yellow Vector Modern Completion Certificate.png'

import {
    FacebookShareButton,
    LinkedinShareButton,
    TwitterIcon,
    TwitterShareButton,
} from "react-share";

import React, { useEffect, useState, useCallback, useRef } from 'react';
import { toPng } from 'html-to-image';
import Image from 'next/image';
import axios from 'axios';

import {
    FacebookIcon,
} from 'next-share'
import Head from 'next/head';
import { Linkedin } from 'lucide-react';
import { Logo } from '@/app/(dashboard)/_components/logo';
import { usePathname } from 'next/navigation';
import CertificateGenerator from '@/app/(dashboard)/courses/_components/pdf-certificate';

const PDFCertificate = ({
    params
}: {
    params: { courseId: string }
}) => {
    const ref = useRef(null)
    // const [url, setUrl] = useState('');
    const [name, setName] = useState('');
    const [course, setCourse] = useState('');
    const url = usePathname();
    const pageUrl = `https://skilltechindia.net/learn/certificate/generate-certificate/${params.courseId}`

    //https://skilltechindia.net/learn/certificate/generate-certificate/6646e947a394721ac5820ec0

    const getId = async () => {
        const res = await axios.get('/api/user/user-details')

        const userName = res.data.user.name;
        setName(userName)
    }

    const getCourse = async () => {
        const response = await axios.get(`/api/course/course-details/${params.courseId}`);
        const course = response.data.course;
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


    const shareButton = useCallback(() => {
        if (ref.current === null) {
            return
        }

        toPng(ref.current, { cacheBust: true, })
            .then((dataUrl) => {
                const link = document.createElement('a')
                // link.download = 'Blue and Yellow Vector Modern Completion Certificate.png'
                link.href = dataUrl
                link.click()

            })
            .catch((err) => {
                console.log(err)
            })
    }, [ref])

    useEffect(() => {
        getCourse(),
            getId(),
            shareButton()
    }, [])

    return (
        <>
            <Head>
                <meta property="og:image" content="<generated>" />
                <meta property="og:image:type" content="<generated>" />
                <meta property="og:image:width" content="<generated>" />
                <meta property="og:image:height" content="<generated>" />
                <meta name="twitter:image" content="<generated>" />
                <meta name="twitter:image:type" content="<generated>" />
                <meta name="twitter:image:width" content="<generated>" />
                <meta name="twitter:image:height" content="<generated>" />

            </Head>
            <div className='px-20 py-6'>
                <Logo />
            </div>
            <div className='bg-slate-100'>
                <div className='flex flex-col gap-y-6 items-center lg:items-start justify-around lg:flex-row py-10 px-16'>
                    <div className="w-[300px] md:w-[500px] lg:w-[800px] relative" ref={ref}>
                        <Image alt='Certificate Image' className='border border-black' src={certificateImage} />
                        <div className="absolute top-[120px] md:top-[195px] lg:top-[320px] left-0 w-full">
                            <h1 className='oxygen-bold md:text-2xl lg:text-4xl font-sans flex text-[13px] text-orange-600 items-center justify-center mb-[15px] md:mb-[30px] lg:mb-[60px]'>
                                {name}
                            </h1>
                            <p className='oxygen-semibold text-orange-600 text-[13px] md:text-lg lg:text-xl flex justify-center items-center'>
                                {course}
                            </p>
                        </div>
                        <p className='pt-3 source-sans-3-regular'>
                            *This certificate verifies the authenticity and completion of whatsoever program from Skill Tech by any particular student.
                        </p>
                    </div>
                    <div className='flex gap-y-6 flex-col bg-white py-10 px-8 rounded-md w-[250px]'>
                        <div className="">
                            <div className='flex flex-col gap-y-3 pb-4'>
                                <span className='oxygen-bold text-xl'>
                                    Recipient:
                                </span>
                                <span className='source-sans-3-regular'>
                                    {name}
                                </span>
                            </div>
                            <div className="">
                                <span>
                                    Issue Date:
                                </span>
                            </div>
                        </div>
                        <div className='flex gap-x-3'>
                            <TwitterShareButton url={pageUrl} title='Certificate' onClick={shareButton}>
                                <div className='bg-sky-100 rounded-[50%] p-2'>
                                    <TwitterIcon round={true} size={25} />
                                </div>
                            </TwitterShareButton>
                            <FacebookShareButton url={pageUrl} >
                                <div className='bg-violet-200 rounded-[50%] p-2'>
                                    <FacebookIcon size={25} round={true} />
                                </div>
                            </FacebookShareButton>
                            <LinkedinShareButton url={pageUrl} title='Certificate Page' summary='kjqwndnkqwjhd' source={pageUrl}>
                                <div className='bg-sky-100 rounded-[50%] p-2'>
                                    <Linkedin size={25} />
                                </div>
                            </LinkedinShareButton>
                        </div>
                        <div className='flex flex-col gap-y-6 items-center'>
                            <button className='bg-yellow-600 px-6 py-2 rounded-md border border-yellow-600 text-white text-sm' onClick={onButtonClick}>
                                Download as Image
                            </button>
                            <CertificateGenerator name={name} course={course} />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
};

export default PDFCertificate;