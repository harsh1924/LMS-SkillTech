'use client'

import { Separator } from "@/components/ui/separator";
import { HomeNavbar } from "../../_components/(mainPageComponents)/navbar";

import '@/app/(dashboard)/dashboard.css'
import { Footer } from "../../_components/(mainPageComponents)/footer";
import Link from "next/link";
import ImageOne from '@/app/helpers/images/images-1.jpeg'
import { useState } from "react";
import { cn } from "@/lib/utils";

const courses = [
    {
        "title": "Data Science",
        "imageUrl": ImageOne.src,
        'category': 'Data Science'
    },
    {
        "title": "Project Management (PMP)",
        "imageUrl": ImageOne.src,
        'category': 'Project Management'
    },
    {
        "title": "IT Security/ Cyber Security /ISMS",
        "imageUrl": ImageOne.src,
        'category': 'Software Development'
    },
    {
        "title": "Cloud Computing",
        "imageUrl": ImageOne.src,
        'category': 'Cloud Computing'
    },
    {
        "title": "Devops",
        "imageUrl": ImageOne.src,
        'category': 'DevOps'
    },
    {
        "title": "Business Analysis",
        "imageUrl": ImageOne.src,
        'category': 'Business Analysis'
    },
    {
        "title": "Software Development/Coding",
        "imageUrl": ImageOne.src,
        'category': 'Software Development'
    },
    {
        "title": "Agile & Scrum",
        "imageUrl": ImageOne.src,
        'category': 'Agile & Scrum'
    },
    {
        "title": "IT Infrastructure",
        "imageUrl": ImageOne.src,
        'category': 'IT Service'
    },
    {
        "title": "Digital Marketing",
        "imageUrl": ImageOne.src,
        'category': 'Digital Marketing'
    },
]

const categories = [
    'Software Development',
    'Data Science',
    'Cyber Security',
    'Cloud Computing',
    'AI and ML',
    'Digital Marketing',
    'IT Service',
    'Project Management'
]

const ResourcePages = () => {

    const [courseName, setCourseName] = useState('Software Development');
    const [isActive, setIsActive] = useState('Software Development');

    return (
        <div>
            <div>
                <HomeNavbar />
            </div>
            <div className="lg:px-16 w-full px-3 py-10 flex flex-col items-center justify-center gap-y-6">
                <h1 className="text-2xl lg:text-4xl oxygen-bold w-full text-center">
                    Welcome to Our Resources Page!
                </h1>
                <p className="text-lg lg:text-[22px] w-[80%] text-center source-sans-3-semibold text-[#2B463C]">
                    Explore a wealth of knowledge and tools curated to empower you on your journey. Whether you're seeking insightful articles, helpful guides, or practical tools, you'll find a diverse array of resources here to support your endeavors.
                </p>
            </div>
            <div className="px-6">
                <Separator />
            </div>
            <div className="px-8 flex-col md:flex-row bg-slate-50 flex gap-x-6">
                <div className="flex py-6 flex-col md:flex-row justify-start gap-x-8 ">
                    <div className="flex flex-col gap-y-2 md:w-[300px] border py-4 rounded-md shadow-lg md:h-[1000px]">
                        <span className="text-lg oxygen-bold px-3">
                            Categories
                        </span>
                        <Separator />
                        <div className="flex md:flex-col flex-wrap gap-y-2 text-[15px]">
                            {categories.map((e) =>
                                <button className={cn(
                                    'hover:text-[#347bdc] py-2 px-3 text-start source-sans-3-regular'
                                    , isActive === e && 'bg-[#ecf2fc] hover:text-black border-r-4 border-[#00419e]')} onClick={() => { setCourseName(e), setIsActive(e) }}>
                                    {e}
                                </button>)}
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap gap-x-4 py-6 h-[1000px] overflow-scroll no-scrollbar gap-y-6">
                    {courses.map((course) => course.category === courseName &&
                        (<Link href={`/resources/${course.title}`} className="border h-[350px] bg-white shadow-md w-[250px] rounded-md overflow-hidden pb-4 flex flex-col justify-between">
                            <div className="flex flex-col gap-y-10">
                                <img alt="Course Thumbnail" src={course.imageUrl} className="w-[300px] h-[150px]" />
                                <span className="oxygeb-bold text-lg px-6">
                                    {course.title}
                                </span>
                            </div>
                            <div className="px-6 py-[2px]">
                                <span className="w-[100px] border border-black text-center px-6 py-[2px] rounded-xl">
                                    Article
                                </span>
                            </div>
                        </Link>)
                    )
                    }
                </div>
            </div>
            <div className="flex text-center flex-col md:flex-row py-10 gap-y-6">
                <div className="px-16 flex flex-col gap-y-2 md:gap-y-6">
                    <h2 className="text-2xl oxygen-bold">
                        Stay Connected
                    </h2>
                    <h3 className="source-sans-3-semibold text-lg text-[#2B463C]">
                        Subscribe to Our Newsletter
                    </h3>
                    <p className="source-sans-3-regular">
                        Receive updates on the latest articles, guides, and tools delivered straight to your inbox. Stay informed and inspired on your journey.
                    </p>
                </div>
                <div className="w-[1px] hidden md:inline bg-[#688F4E] py-2"></div>
                <div className="px-16 flex flex-col items-center justify-center gap-y-2 md:gap-y-6">
                    <h1 className="text-2xl oxygen-bold">
                        How to Get Involved
                    </h1>
                    <div className="">
                        <h3 className="source-sans-3-semibold text-lg text-[#2B463C]">
                            Share Your Expertise
                        </h3>
                        <p className="source-sans-3-regular">
                            Interested in contributing to our resources? Contact us to share your expertise and insights with our community.
                        </p>
                    </div>
                    <div className="">
                        <h3 className="source-sans-3-semibold text-lg text-[#2B463C]">
                            Feedback and Suggestions
                        </h3>
                        <p className="source-sans-3-regular">
                            Have ideas for new resources or improvements? We value your feedback and welcome suggestions to enhance our offerings.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ResourcePages;