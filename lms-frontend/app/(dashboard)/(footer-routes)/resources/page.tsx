import { Separator } from "@/components/ui/separator";
import { HomeNavbar } from "../../_components/(mainPageComponents)/navbar";

import '@/app/(dashboard)/dashboard.css'
import { Footer } from "../../_components/(mainPageComponents)/footer";

const ResourcePages = () => {
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

export default ResourcePages;