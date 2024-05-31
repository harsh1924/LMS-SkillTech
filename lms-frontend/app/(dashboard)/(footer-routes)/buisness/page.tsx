import Link from "next/link";
import { HomeNavbar } from "../../_components/(mainPageComponents)/navbar";
import '@/app/(dashboard)/dashboard.css'

const BusinessPage = () => {
    return (
        <div className="flex flex-col items-center w-full">
            <div className="w-full">
                <HomeNavbar />
            </div>
            <div className="w-full flex flex-col">
                <section className="py-10 px-5">
                    <div className="md:flex md:flex-row-reverse md:justify-around">
                        <div className="flex justify-center">
                            <img className="h-[600px] md:h-[400px]"
                                src="https://s.udemycdn.com/home/non-student-cta/UB_Promo_1200x1200.jpg" alt="" />
                        </div>
                        <div className="flex flex-col justify-center p-10 items-center">
                            <div className="flex flex-col items-center w-[100%] pb-6 text-center md:text-left md:items-start">
                                <span className="text-5xl pb-3 oxygen-bold">
                                    Buisness Page
                                </span>
                                <h1 className="oxygen-semibold text-4xl w-[70%]">
                                    Upskill Your Team with  Buisness
                                </h1>
                            </div>
                            <div className="text-[22px] source-sans-3-regular">
                                <div>
                                    Unlimited access to 22,000+ top courses, anytime, anywhere
                                </div>
                                <div>
                                    International course collection in 14 languages
                                </div>
                                <div>
                                    Top certifications in tech and business
                                </div>
                            </div>
                            <div
                                className="flex flex-col md:flex-row w-[100%] gap-2 justify-center items-center mt-4 md:justify-start md:items-start source-sans-3-regular text-[17px]">
                                <div
                                    className="border px-10 py-3 w-[100%] text-center bg-[#2B463C] text-white md:w-[200px] md:px-4 cursor-pointer">
                                    Get Buisness
                                </div>
                                <div
                                    className="border px-10 py-3 w-[100%] text-center border-[#2B463C] text-[#2B463C] md:px-4 md:w-[150px] hover:bg-gray-100 cursor-pointer">
                                    Learn More
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="flex justify-center items-center flex-col sm:mx-20 py-20 lg:flex-row lg:justify-around lg:text-start text-center">
                        <div>
                            <img className="h-[200px] sm:h-[300px] md:h-[400px]"
                                src="https://s.udemycdn.com/home/non-student-cta/instructor-2x-v3.jpg" alt="" />
                        </div>
                        <div className="lg:w-[40%]">
                            <div className="flex flex-col ">
                                <h1 className="oxygen-bold text-2xl md:text-4xl py-4 md:py-8">
                                    Become a trainer
                                </h1>
                                <div className="text-lg md:text-xl mb-6 source-sans-3-regular">
                                    Instructors from around the world teach millions of students. We provide the tools and
                                    skills to teach what you love.
                                </div>
                                <Link href={'/become-instructor'} className="bg-[#2B463C] text-white py-3 px-8 text-lg cursor-pointer w-[250px] text-center rounded-md">
                                    Start teaching today
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="px-5 py-10">
                        <div className="flex flex-col justify-center items-center text-center">
                            <h1 className="oxygen-bold text-xl md:text-3xl">
                                Trusted by over 13,400 great teams
                            </h1>
                            <p className="text-xl pt-2 source-sans-3-regular">
                                Leading companies use the same courses to employees keep their skills fresh.
                            </p>
                        </div>
                        <div className="grid grid-cols-3 md:items-center md:flex md:justify-around mt-6">
                            <div className="flex justify-center md:block"><img
                                src="https://s.udemycdn.com/partner-logos/v4/nasdaq-dark.svg" alt="" /></div>
                            <div className="flex justify-center md:block">
                                <img
                                    src="https://s.udemycdn.com/partner-logos/v4/volkswagen-dark.svg" alt="" />
                            </div>
                            <div className="flex justify-center md:block"><img
                                src="https://s.udemycdn.com/partner-logos/v4/box-dark.svg" alt="" /></div>
                            <div className="flex justify-center md:block"><img
                                src="https://s.udemycdn.com/partner-logos/v4/netapp-dark.svg" alt="" /></div>
                            <div className="flex justify-center md:block"><img
                                src="https://s.udemycdn.com/partner-logos/v4/eventbrite-dark.svg" alt="" /></div>
                            <div className="flex justify-center md:block"><img
                                src="https://s.udemycdn.com/partner-logos/v4/tcs-dark.svg" alt="" /></div>
                        </div>
                    </div>
                </section>
                <section className="mx-6 md:mx-0 bg-[#f7f9fa] py-10 flex flex-col items-center">
                    <div className="border bg-white mx-6 p-6 md:w-[90vw] w-[60%] flex flex-col gap-y-10 md:flex-row md:justify-between">
                        <div className="md:w-[50%]">
                            <p className="source-sans-3-regular text-lg">
                                Thanks to Business, Booz Allen has armed our workforce, specifically its <span
                                    className="font-bold">data scientists, with highly relevant and in-demand tech skills</span> that
                                are enabling consultants to stay ahead of big data trends and raise the bar on proficiency, skills,
                                and competencies to meet client demand.
                            </p>
                            <span
                                className="text-[#688F4E] border-[#688F4E] font-bold border-b-2 pb-1 px-0 md:inline-block md:mt-20 hidden">
                                Read Full Story
                            </span>
                        </div>
                        <div className="flex gap-4 md:items-center md:flex-col md:text-center md:pt-9">
                            <img className="rounded-full h-16 md:h-28"
                                src="https://s.udemycdn.com/home/ub-case-studies/James_Hemgen.jpeg" alt="" />
                            <div>
                                <p className="oxygen-bold md:text-2xl md:pt-3">
                                    Jim Hemgen
                                </p>
                                <p className="text-gray-400 text-sm md:text-lg source-sans-3-regular">
                                    Principal
                                </p>
                                <p className="text-gray-500 text-sm md:text-xl md:pt-4 source-sans-3-regular">
                                    Booz Allen Hamilton
                                </p>
                            </div>
                        </div>
                        <div>
                            <span className="text-[#5624d0] border-[#5624d0] font-bold border-b-2 pb-[1px] px-0 md:hidden">Read Full
                                Story</span>
                        </div>
                    </div>
                    <div className="text-[#688F4E] py-8 px-4 font-bold">
                        <p>
                            View more customer stories
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default BusinessPage;