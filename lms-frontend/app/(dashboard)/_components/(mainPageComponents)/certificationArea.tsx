import { Separator } from "@/components/ui/separator";
import { Book, Clock, Notebook, PersonStanding } from "lucide-react";

const CertificationArea = () => {
    return (
        <div>
            {/* <div className="py-10 px-14 flex flex-col gap-y-4">
                <h2 className="text-3xl font-semibold ">
                    Get Certified, get Ahead with Our Programs
                </h2>
                <p className="text-lg">
                    Learn from global experts and get certified by the world's leading university
                </p>
            </div> */}
            <div className="px-8 py-14">
                <div>
                    <p className="text-[17px] pb-4">
                        Our Online Bootcamp
                    </p>
                    <h2 className="text-3xl pb-14 font-light">
                        An immersive learning experience
                    </h2>
                    <div className="flex flex-col md:justify-between md:flex-row flex-wrap gap-y-12">
                        <div className="flex gap-x-7 items-start">
                            <div>
                                <Book className="text-[#688F4E]" size={32} />
                            </div>
                            <div className="w-[300px] md:w-[500px] flex flex-col gap-y-3">
                                <p className="oxygen-bold">
                                    Develop Skills for real career growth
                                </p>
                                <p className="source-sans-3-regular">
                                    Cutting-edge curriculum designed in guidance with industry and academia to develop job-ready skills
                                </p>
                            </div>

                        </div>
                        <div className="flex gap-x-7 items-start">
                            <div>
                                <PersonStanding className="text-[#688F4E]" size={32} />
                            </div>
                            <div className="w-[300px] md:w-[500px] flex flex-col gap-y-3">
                                <p className="oxygen-bold">
                                    Learn from experts active in their field, not out-of-touch trainers
                                </p>
                                <p className="source-sans-3-regular">
                                    Leading practitioners who bring current best practices and case studies to sessions that fit into your work schedule.
                                </p>
                            </div>

                        </div>
                        <div className="flex gap-x-7 items-start">
                            <div>
                                <Notebook className="text-[#688F4E]" size={32} />
                            </div>
                            <div className="w-[300px] md:w-[500px] flex flex-col gap-y-3">
                                <p className="oxygen-bold">
                                    Learn by working on real-world problems
                                </p>
                                <p className="source-sans-3-regular">
                                    Capstone projects involving real world data sets with virtual labs for hands-on learning
                                </p>
                            </div>

                        </div>
                        <div className="flex gap-x-7 items-start">
                            <div>
                                <Clock className="text-[#688F4E]" size={32} />
                            </div>
                            <div className="w-[300px] md:w-[500px] flex flex-col gap-y-3">
                                <p className="oxygen-bold">
                                    Structured guidance ensuring learning never stops
                                </p>
                                <p className="source-sans-3-regular">
                                    24x7 Learning support from mentors and a community of like-minded peers to resolve any conceptual doubts
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CertificationArea;