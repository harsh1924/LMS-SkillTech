'use client'
import '@/app/helpers/Certificate.css'
import certificateImage from '@/app/helpers/Blue and Yellow Vector Modern Completion Certificate.png'
import {
    EmailShareButton,
    FacebookShareButton,
    GabShareButton,
    HatenaShareButton,
    InstapaperShareButton,
    LineShareButton,
    LinkedinShareButton,
    LivejournalShareButton,
    MailruShareButton,
    OKShareButton,
    PinterestShareButton,
    PocketShareButton,
    RedditShareButton,
    TelegramShareButton,
    TumblrShareButton,
    TwitterIcon,
    TwitterShareButton,
    ViberShareButton,
    VKShareButton,
    WhatsappShareButton,
    WorkplaceShareButton,
} from "react-share";

import React, { useEffect, useState, useCallback, useRef } from 'react';
import { toPng } from 'html-to-image';
import Image from 'next/image';
import axios from 'axios';

import {

    FacebookIcon,
} from 'next-share'
import Head from 'next/head';
import { Linkedin, LinkedinIcon } from 'lucide-react';

const PdfCertificate = ({
    params
}: {
    params: { courseId: string }
}) => {
    const ref = useRef(null)
    const [url, setUrl] = useState('');
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
                // setUrl(dataUrl)

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
                setUrl(dataUrl)

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
        <>
            <Head>
                <meta property='og:image' content={certificateImage.toString()} />
            </Head>
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
                    Download Certificate
                </button>
                {url}
                <div className='flex gap-x-3'>
                    <TwitterShareButton url='http://localhost:3000/' title='Certificate' onClick={shareButton}>
                        <div className='bg-sky-100 rounded-[50%] p-2'>
                            <TwitterIcon round={true} size={25} />
                        </div>
                    </TwitterShareButton>
                    <FacebookShareButton url='http://localhost:3000/' title='Certificate'>
                        <div className='bg-violet-200 rounded-[50%] p-2'>
                            <FacebookIcon size={25} round={true} />
                        </div>
                    </FacebookShareButton>
                    <LinkedinShareButton url='http://localhost:3000/' title='Certificate'>
                        <div className='bg-sky-100 rounded-[50%] p-2'>
                            <Linkedin size={25} />
                        </div>
                    </LinkedinShareButton>
                </div>

            </div>
        </>
    )
};

export default PdfCertificate;