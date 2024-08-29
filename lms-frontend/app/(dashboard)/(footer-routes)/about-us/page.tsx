import { Book, Cloud, Computer, ComputerIcon, Laptop, WashingMachine } from "lucide-react";
import { Footer } from "../../_components/(mainPageComponents)/footer";
import { HomeNavbar } from "../../_components/(mainPageComponents)/navbar";

const AboutUsPage = () => {
    return (
        <div>
            <HomeNavbar />
            <div className="flex flex-col items-center w-full justify-center">
                <div className="flex flex-col gap-y-4">
                    <div className="py-10 px-4 lg:px-12">
                        <h1 className="text-center oxygen-bold lg:text-3xl text-2xl pb-6">
                            About Us
                        </h1>
                        <p className="lg:text-xl text-lg">
                            <span className="font-bold">
                                SkillTech is one of the India's leading skills development provider,
                            </span>
                            our training “mostly on-job trainings” enable candidate to get job faster as per their skillset.Our education programs and certifications helps learners to achieve their career goals. Founded in 2015, based in New Delhi, India. SkillTech trainings is specially designed and developed to skill, reskill and upskill Indian individuals through an online and offline training platform.
                        </p>
                    </div>
                    <div className="py-10 px-4 lg:px-12 flex justify-center gap-x-8 flex-wrap gap-y-3 items-center">
                        <div className="border rounded-sm w-[310px]">
                            <span className="flex items-center border border-[#76C3EF] bg-[#DBEEFF] oxygen-bold px-6 py-8 gap-x-2 text-xl">
                                <Computer size={20} />
                                Software Development
                            </span>
                        </div>
                        <div className="border rounded-sm w-[310px]">
                            <span className="flex items-center border border-[#F2BB84] bg-[#FDE5D0] oxygen-bold justify-center px-6 py-8 gap-x-2 text-xl">
                                <Cloud size={20} />
                                DevOps
                            </span>
                        </div>
                        <div className="border rounded-sm w-[310px]">
                            <span className="flex items-center border border-[#BCB7F0] bg-[#E9EAFF] oxygen-bold px-6 py-8 gap-x-2 text-xl">
                                <WashingMachine size={20} />
                                Artificial Intelligence
                            </span>
                        </div>
                        <div className="border rounded-sm w-[310px]">
                            <span className="flex items-center border border-[#AAD9B4] bg-[#D9FAF2] oxygen-bold px-6 py-8 gap-x-2 text-xl">
                                <Book size={20} />
                                Application Business
                            </span>
                        </div>
                        <div className="border rounded-sm w-[310px]">
                            <span className="flex items-center border border-[#EED197] bg-[#FEF4D4] oxygen-bold px-6 justify-center py-8 gap-x-2 text-xl">
                                <Laptop size={20} />
                                AI & NLP
                            </span>
                        </div>
                    </div>
                    <div className="py-10 px-4 lg:px-12">
                        <h1 className="text-center oxygen-bold lg:text-3xl text-2xl pb-6">
                            Who Are We?
                        </h1>
                        <p className="lg:text-xl text-lg">
                            We are providing trainings in many fields like Software, Automation, Artificial Intelligence, Data Science Full Stack, DevOps, Cloud Computing, Big Data, Deep Learning, AI & NLP, Engineering, Manufacturing Technology, Mechanical & Automobiles technology, Business & Business Application Business, Accounts & Finance, Business & Management, Process Engineering, Industrial Engineering, Electronic &Electrical Technology, Communication Technology, vocational trainings,we are preparing students for jobs, we helping millions of undergraduate, graduated and post graduate students to prepare for jobs.
                        </p>
                    </div>
                    <div className="bg-slate-100 py-10 px-4 lg:px-12">
                        <h1 className="text-center oxygen-bold lg:text-3xl text-2xl pb-6">
                            Our Mission
                        </h1>
                        <p className="lg:text-xl text-lg">
                            Through strategic partnerships and innovative models, we are building a robust skill ecosystem that will meets current and future industry demands, also we are analysing and developing training programs for future based on our future skill requirement research, we are helping India's youth to contribute significantly to the nation’s growth and development. Ours mission statement is “Learn Earn Grow”.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col">
                    <h1 className="text-center oxygen-bold lg:text-3xl text-2xl my-6">
                        Meet the Leadership Team
                    </h1>
                    <div className="flex gap-10 flex-wrap px-4 lg:px-10">
                        <div className="border p-5 rounded-sm w-[360px] group transition-all duration-300 ease-in-out h-[300px]">
                            <div className="group-hover:hidden">
                                <h2 className="font-bold">
                                    Bharti Biswas
                                </h2>
                                <p>
                                    Co-Founder and Managing Director
                                </p>
                            </div>
                            <p className="hidden group-hover:flex transition-all duration-300 ease-in-out">
                                A serial entrepreneur and business woman, with over 15 year experience with corporates, she has developed and matured many growth team across India, her strategic vision and guidance is instrumental in the growth of SkillTech, touching new height every quarter. Alumnus of NIT and IIM Raipur, she began her career with Meta in Corporate Strategy.
                            </p>
                        </div>
                        <div className="border p-5 rounded-sm w-[360px] group transition-all duration-300 ease-in-out h-[300px]">
                            <div className="group-hover:hidden">
                                <h2 className="font-bold">
                                    Dr. Rakesh Kumar
                                </h2>
                                <p>
                                    Financial Advisor and Strategic Partner.
                                </p>
                            </div>
                            <p className="hidden group-hover:flex transition-all duration-300 ease-in-out">
                                A teacher by profession in a prestigious university in India, he is guiding and helping SkillTech to achieve positive revenue growth and achieving revenue targets. He is guiding SkillTech commercial team for B2B business. He is holding PHD from Himachal University and Alumnus of IIT Delhi.
                            </p>
                        </div>
                        <div className="border p-5 rounded-sm w-[360px] group transition-all duration-300 ease-in-out h-[300px]">
                            <div className="group-hover:hidden">
                                <h2 className="font-bold">
                                    Akhil Biswas
                                </h2>
                                <p>
                                    Technology Officer
                                </p>
                            </div>
                            <p className="hidden group-hover:flex transition-all duration-300 ease-in-out">
                                {/* A teacher by profession in a prestigious university in India, he is guiding and helping SkillTech to achieve positive revenue growth and achieving revenue targets. He is guiding SkillTech commercial team for B2B business. He is holding PHD from Himachal University and Alumnus of IIT Delhi.  */}
                            </p>
                        </div>
                        <div className="border p-5 rounded-sm w-[360px] group transition-all duration-300 ease-in-out h-[300px]">
                            <div className="group-hover:hidden">
                                <h2 className="font-bold">
                                    S. Biswas
                                </h2>
                                <p>
                                    Head Sales and Marketing
                                </p>
                            </div>
                            <p className="hidden group-hover:flex transition-all duration-300 ease-in-out">
                                A dynamic marketing leader with two decades of experience, he is helping SkillTech to achieve sales target. He is guiding sales and marketing team, also helping SkillTech to increase market capitalization of “SkillTech” brand. Alumnus of IIT Delhi, he has started his career with leading global NMC. SkillTech is achieving positive growth under his guidance.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default AboutUsPage;