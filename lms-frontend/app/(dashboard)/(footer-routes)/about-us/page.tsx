import { Footer } from "../../_components/(mainPageComponents)/footer";
import { HomeNavbar } from "../../_components/(mainPageComponents)/navbar";

const AboutUsPage = () => {
    return (
        <div>
            <HomeNavbar />
            <div className="flex items-center w-full justify-center">
                <div className="px-6 py-10 w-[80%]">
                    <div className="flex flex-col items-center justify-center text-center gap-y-10 pb-6 border-b">
                        <h1 className="font-bold font-sans text-4xl">
                            Skills are the key to unlocking potential
                        </h1>
                        <p className="font-semibold text-xl w-[70%]">
                            Whether you want to learn a new skill, train your teams, or share what you know with the world, you’re in the right place. As a leader in online learning, we’re here to help you achieve your goals and transform your life.
                        </p>
                        <p className="text-xl w-[70%]">
                            We help organizations of all types and sizes prepare for the path ahead — wherever it leads. Our curated collection of business and technical courses help companies, governments, and nonprofits go further by placing learning at the center of their strategies.
                        </p>
                    </div>
                    <section className="bg-[#f7f9fa] py-10 px-4">
                        <h1 className="font-bold text-2xl mb-5">How learners like you are achieving their goals</h1>
                        <div className="sm:flex sm:justify-around ">
                            <div className="border bg-white p-6 w-[100%] sm:w-[31%]">
                                <i className="fa-solid fa-quote-left"></i>
                                <p>
                                    I am proud to say that after a few months of taking this course...<span className="font-bold">I passed
                                        my exam and am now an AWS Certified Cloud Practitioner!</span> This content was exactly what the
                                    CCP exam covered.
                                </p>
                                <div className="pt-2 flex gap-2 pb-8 border-b-2">
                                    <div className="w-10 h-10 flex justify-center items-center rounded-full text-white bg-black">WA</div>
                                    <span className="font-bold">Will A</span>
                                </div>
                                <div className="py-4 flex items-center justify-between gap-2">
                                    <i className="fa-sharp fa-solid fa-circle-play text-4xl" ></i>
                                    <p className="text-[#5624d0] font-bold">[NEW] Ultimate AWS Certified Cloud Practitioner - 2022</p>
                                </div>
                            </div>
                            <div className="border bg-white p-6 w-[100%] sm:w-[31%]">
                                <i className="fa-solid fa-quote-left"></i>
                                <p>
                                    This course helped me
                                    <span className="font-bold">freshen up on my product manager skills and land a job at Facebook!</span>
                                    Even people with no prior knowledge of any visualization tools can become a master after completing
                                    this course.
                                </p>
                                <div className="pt-2 flex gap-2 pb-8 border-b-2">
                                    <div className="w-10 h-10 flex justify-center items-center rounded-full text-white bg-black">RF</div>
                                    <span className="font-bold">Ron F</span>
                                </div>
                                <div className="py-4 flex items-center justify-between gap-2">
                                    <i className="fa-sharp fa-solid fa-circle-play text-4xl" ></i>
                                    <p className="text-[#5624d0] font-bold">Become a Product Manager | Learn the Skills & Get the Job</p>
                                </div>
                            </div>
                            <div className="border bg-white p-6 w-[100%] sm:w-[31%]">
                                <i className="fa-solid fa-quote-left"></i>
                                <p>
                                    One of the best courses on management and leadership I have come across so far. The advice is
                                    practical, and examples highly relatable. <span className="font-bold">Would help anyone become a better
                                        manager.
                                    </span>
                                </p>
                                <div className="pt-2 flex gap-2 pb-8 border-b-2">
                                    <div className="w-10 h-10 flex justify-center items-center rounded-full text-white bg-black">PW</div>
                                    <span className="font-bold">Phillip W</span>
                                </div>
                                <div className="py-4 flex items-center justify-between gap-2">
                                    <i className="fa-sharp fa-solid fa-circle-play text-4xl" ></i>
                                    <p className="text-[#5624d0] font-bold">Leadership: Practical Leadership Skills</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="flex flex-col justify-center gap-y-6 py-6">
                        <h2 className="text-2xl font-bold">
                            See our research
                        </h2>
                        <p className="text-lg">
                            We’re committed to improving lives through learning. Dig into our original research to learn about the forces that are shaping the modern workplace.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default AboutUsPage;