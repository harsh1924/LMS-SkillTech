import { Book, Cloud, Computer, ComputerIcon, Laptop, WashingMachine } from "lucide-react";
import { Footer } from "../../_components/(mainPageComponents)/footer";
import { HomeNavbar } from "../../_components/(mainPageComponents)/navbar";

import Bharti from '@/app/helpers/images/Team/Bharti.jpg'
import Akhil from '@/app/helpers/images/Team/Akhil.png'
import Rakesh from '@/app/helpers/images/Team/Rakesh.jpg'


const AboutUsPage = () => {
    return (
        <div>
            <HomeNavbar />
            <div className="flex flex-col items-center w-full justify-center text-justify">
                <div className="flex flex-col gap-y-4">
                    <div className="py-5 px-4 lg:px-12">
                        <h1 className="text-center source-sans-3-bold lg:text-2xl text-xl pb-2">
                            About Us
                        </h1>
                        <p className="text-lg source-sans-3-regular">
                            SkillTech is one of the India's leading skills development provider,
                            our training “mostly on-job trainings” enable candidate to get job faster as per their skillset.Our education programs and certifications helps learners to achieve their career goals. Founded in 2015, based in New Delhi, India. SkillTech trainings is specially designed and developed to skill, reskill and upskill Indian individuals through an online and offline training platform.
                        </p>
                    </div>
                    {/* <div className="py-10 px-4 lg:px-12 flex justify-center gap-x-8 flex-wrap gap-y-3 items-center">
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
                    </div> */}
                    <div className="py-5 px-4 lg:px-12">
                        <h1 className="text-center source-sans-3-bold lg:text-2xl text-xl pb-2">
                            Who Are We?
                        </h1>
                        <p className="text-lg source-sans-3-regular">
                            We are providing trainings in many fields like Software, Automation, Artificial Intelligence, Data Science Full Stack, DevOps, Cloud Computing, Big Data, Deep Learning, AI & NLP, Engineering, Manufacturing Technology, Mechanical & Automobiles technology, Business & Business Application Business, Accounts & Finance, Business & Management, Process Engineering, Industrial Engineering, Electronic &Electrical Technology, Communication Technology, vocational trainings,we are preparing students for jobs, we helping millions of undergraduate, graduated and post graduate students to prepare for jobs.
                        </p>
                    </div>
                    <div className="bg-slate-100 py-5 px-4 lg:px-12">
                        <h1 className="text-center source-sans-3-bold lg:text-2xl text-xl pb-2">
                            Our Mission
                        </h1>
                        <p className="text-lg source-sans-3-regular">
                            Through strategic partnerships and innovative models, we are building a robust skill ecosystem that will meets current and future industry demands, also we are analysing and developing training programs for future based on our future skill requirement research, we are helping India's youth to contribute significantly to the nation’s growth and development. Ours mission statement is “Learn Earn Grow”.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col">
                    <h1 className="text-center source-sans-3-bold lg:text-2xl text-xl my-10">
                        Meet the Leadership Team
                    </h1>
                    <div className="flex gap-10 flex-wrap px-4 lg:px-10">
                        <div className="rounded-sm w-[300px] group transition-all duration-300 ease-in-out h-[420px]">
                            <div className="group-hover:hidden">
                                <img src={Bharti.src} alt="Bharti Biswas" className="h-[300px] w-[300px] mb-3" />
                                <h2 className="oxygen-bold">
                                    Bharti Biswas
                                </h2>
                                <p className="source-sans-3-semibold">
                                    Co-Founder and Managing Director
                                </p>
                            </div>
                            <p className="hidden group-hover:flex transition-all source-sans-3-regular duration-300 ease-in-out border h-full p-5 rounded-sm">
                                A serial entrepreneur and business woman, with over 15 year experience with corporates, she has developed and matured many growth team across India, her strategic vision and guidance is instrumental in the growth of SkillTech, touching new height every quarter. Alumnus of NIT and IIM Raipur, she began her career with Meta in Corporate Strategy.
                            </p>
                        </div>
                        <div className="rounded-sm w-[300px] group transition-all duration-300 ease-in-out h-[420px]">
                            <div className="group-hover:hidden">
                                <img src={Rakesh.src} alt="Bharti Biswas" className="h-[300px] w-[300px] mb-3" />
                                <h2 className="oxygen-bold">
                                    Dr. Rakesh Kumar
                                </h2>
                                <p className="source-sans-3-semibold">
                                    Financial Advisor and Strategic Partner.
                                </p>
                            </div>
                            <p className="hidden group-hover:flex transition-all source-sans-3-regular duration-300 ease-in-out border h-full p-5 rounded-sm">
                                A teacher by profession in a prestigious university in India, he is guiding and helping SkillTech to achieve positive revenue growth and achieving revenue targets. He is guiding SkillTech commercial team for B2B business. He is holding PHD from Himachal University and Alumnus of IIT Delhi.
                            </p>
                        </div>
                        <div className="rounded-sm w-[300px] group transition-all duration-300 ease-in-out h-[420px]">
                            <div className="group-hover:hidden">
                                <img src={Akhil.src} alt="Bharti Biswas" className="h-[300px] w-[300px] mb-3" />
                                <h2 className="oxygen-bold">
                                    Akhil Biswas
                                </h2>
                                <p className="source-sans-3-semibold">
                                    Technology Officer
                                </p>
                            </div>
                            <p className="hidden group-hover:flex transition-all source-sans-3-regular duration-300 ease-in-out border h-full p-5 rounded-sm">
                                Alumnus of IIT Delhi, he has started his career with leading global NMC. He worked many global companies in Europe, USA, UK and many other countries around the world. SkillTech is achieving positive growth under his guidance. He is continuously bringing innovation in SkillTech technology requirement.
                            </p>
                        </div>
                        {/* <div className="border p-5 rounded-sm w-[360px] group transition-all duration-300 ease-in-out h-[300px]">
                            <div className="group-hover:hidden">
                                <h2 className="oxygen-bold">
                                    S. Kumar
                                </h2>
                                <p className="source-sans-3-semibold">
                                    Head of Sales, Marketing and Branding.
                                </p>
                            </div>
                            <p className="hidden group-hover:flex transition-all source-sans-3-regular duration-300 ease-in-out">
                            A marketer by profession, he hold MBA in sales and marketing from prestigious institute in Delhi. He has a rich experience of 18 years in sales and marketing. He is helping Skilltech to acquire new Business and Clients. Under his guidance Skilltech is achieving new height.
                            </p>
                        </div> */}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default AboutUsPage;