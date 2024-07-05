import { Separator } from "@/components/ui/separator";
import { HomeNavbar } from "../../_components/(mainPageComponents)/navbar";

import '@/app/(dashboard)/dashboard.css'
import { Footer } from "../../_components/(mainPageComponents)/footer";
import Link from "next/link";
import ImageOne from '@/app/helpers/images/images-1.jpeg'

const courses = [
    {
        "title": "Data Science",
        "imageUrl":  ImageOne.src
    },
    {
        "title": "Project Management (PMP)",
        "imageUrl":  ImageOne.src
    },
    {
        "title": "IT Security/ Cyber Security /ISMS",
        "imageUrl":  ImageOne.src
    },
    {
        "title": "Cloud Computing",
        "imageUrl":  ImageOne.src
    },
    {
        "title": "Devops",
        "imageUrl":  ImageOne.src
    },
    {
        "title": "Business Analysis",
        "imageUrl":  ImageOne.src
    },
    {
        "title": "Software Development/Coding",
        "imageUrl":  ImageOne.src
    },
    {
        "title": "Agile & Scrum",
        "imageUrl":  ImageOne.src
    },
    {
        "title": "IT Infrastructure",
        "imageUrl":  ImageOne.src
    },
    {
        "title": "Digital Marketing",
        "imageUrl":  ImageOne.src
    },
]

const ResourcePages = async () => {

    return (
        <div>
            <div>
                <HomeNavbar />
            </div>
            <div className="px-16 py-10 flex flex-col items-center justify-center gap-y-6">
                <h1 className="text-4xl oxygen-bold">
                    Welcome to Our Resources Page!
                </h1>
                <p className="text-[22px] w-[80%] text-center source-sans-3-semibold text-[#2B463C]">
                    Explore a wealth of knowledge and tools curated to empower you on your journey. Whether you're seeking insightful articles, helpful guides, or practical tools, you'll find a diverse array of resources here to support your endeavors.
                </p>
            </div>
            <div className="px-6">
                <Separator />
            </div>
            <div className="px-16 bg-slate-50">
                <div className="flex flex-wrap py-6 justify-between h-[1000px] overflow-scroll no-scrollbar gap-y-6">
                    {courses.map((course) =>
                        <Link href={`/resources/${course.title}`} className="border h-[350px] bg-white shadow-md w-[300px] rounded-md overflow-hidden pb-4 flex flex-col justify-between">
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
                        </Link>
                    )}
                </div>
            </div>
            <div className="flex text-center py-10">
                <div className="px-16 flex flex-col gap-y-6">
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
                <div className="w-[1px] bg-[#688F4E] py-2"></div>
                <div className="px-16 flex flex-col items-center justify-center gap-y-6">
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

// 9399a6fe-b4a0-448f-b7be-26f8007eb712

export default ResourcePages;