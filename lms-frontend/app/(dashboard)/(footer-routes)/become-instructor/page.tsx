import InstructorImage from '@/app/helpers/images/Instructor-images/Instructor1.jpg'

import { Footer } from "../../_components/(mainPageComponents)/footer";
import { HomeNavbar } from "../../_components/(mainPageComponents)/navbar";

const InstructorForm = () => {
    return (
        <div>
            <HomeNavbar />
            <div className="px-10 py-3 bg-[#347dfb] text-white">
                <h1 className="text-2xl source-sans-3-regular md:text-4xl">
                    Learn Earn Grow
                </h1>
            </div>
            <div className="py-10 px-10 flex justify-center lg:justify-around items-start gap-x-20 text-justify">
                <div className="hidden lg:flex flex-col gap-y-8 source-sans-3-regular">
                    <div className="flex flex-col gap-y-4">
                        <h1 className="oxygen-bold text-2xl">
                            Change the Lives of other. Learn, Earn and Grow.
                        </h1>
                        <p>
                            Do you want to change the life of others, earn respect & recognition.if you are a subject matter expert (SEM), share your knowledge with others in your free time and on weekends, skill & help others to get a job, connect with professionals, and enrich careers, at the same time earn respectable income for yourself. If you are looking for a platform where you can share your knowledge and earn handsome income for yourself, you are at right place.
                        </p>
                        <img src={InstructorImage.src} alt="Instructor Page Image" className="h-[350px] rounded-sm" />
                        <p>
                            At SkillTech, our constant endeavour is to create a network of world-class trainers and subject matter expert who, in turn, create high-quality courseware& training materialacross cutting edge domains , especially Software, Automation, Artificial Intelligence, Data Science Full Stack, DevOps, Cloud Computing, Big Data, Deep Learning, AI & NLP, Engineering, Manufacturing Technology, Mechanical & Automobiles technology, Business & Business Application Business, Accounts & Finance, Business & Management, Process Engineering, Industrial Engineering, Electronic & Electrical Technology, Communication Technology, vocational trainings.
                        </p>
                    </div>

                    <div className="flex flex-col gap-y-4">
                        <h1 className="oxygen-bold text-2xl">
                            How will I benefited?
                        </h1>
                        <p>
                            The material you produce will be used to train professionals worldwide, meaning increased visibility, a larger audience for your content, and the chance to become a part of an elite worldwide training community!
                        </p>
                    </div>
                    <div className="flex flex-col gap-y-4">
                        <h1 className="oxygen-bold text-2xl">
                            Compensation
                        </h1>
                        <p>
                            At SkillTech, we know the value of your time and effort, and understand that offering fair and flexible compensation is a part of your business ethos. With our revenue-sharing model, you have the opportunity to earn tens of thousands of every month, we will share the value of your time which will make you happy.
                        </p>
                        <p>
                            If you are excited about the opportunity please fill the form our executive will contact you and explain you all benefits and answer your query.
                        </p>
                    </div>
                </div>
                <div className="py-6 px-5 rounded-md shadow-lg md:shadow-[0_0_10px_#347dfb] flex justify-center items-center flex-col border source-sans-3-regular">
                    <h3 className="text-2xl pb-2 oxygen-bold">
                        INTERESTED IN WORKING WITH US
                    </h3>
                    <p>
                        Please submit this form and a representative will reach you out
                    </p>
                    <form action="https://api.web3forms.com/submit" method="POST" className="py-4 flex gap-y-3 justify-start w-full flex-col">
                        <input type="hidden" name="access_key" value="9399a6fe-b4a0-448f-b7be-26f8007eb712" />
                        <input type="hidden" name="subject" value="New Instructor Form Submitted"></input>
                        <input type="hidden" name="from_name" value="Instructor Form"></input>
                        <div>
                            <input required name="name" type="text" placeholder="Name*" className="border w-[300px] py-2 outline-none border-none " />
                            <div className="h-[1px] bg-gray-500 w-full "></div>
                        </div>
                        <div>
                            <input required name="email" type="email" placeholder="Email*" className="border w-[300px] py-2 outline-none border-none " />
                            <div className="h-[1px] bg-gray-500 w-full "></div>
                        </div>
                        <div>
                            <input required name="course" type="text" placeholder="Subject*" className="border w-[300px] py-2 outline-none border-none " />
                            <div className="h-[1px] bg-gray-500 w-full "></div>
                        </div>
                        <div>
                            <input required name="education" type="text" placeholder="Highest Education*" className="border w-[300px] py-2 outline-none border-none " />
                            <div className="h-[1px] bg-gray-500 w-full "></div>
                        </div>
                        <div>
                            <span className="inline lg:hidden">
                                +91 &nbsp;| &nbsp;
                            </span>
                            <input required name="phone-number" type="number" placeholder="Phone Number*" className="border w-[300px] py-2 outline-none border-none " />
                            <div className="h-[1px] bg-gray-500 w-full "></div>
                        </div>
                        <div>
                            <input name="url" type="url" placeholder="Linkedn URL" className="border w-[300px] py-2 outline-none border-none " />
                            <div className="h-[1px] bg-gray-500 w-full "></div>
                        </div>
                        <div className="flex items-center justify-center">
                            <button type="submit" className="bg-[#0056d2] text-white oxygen-regular rounded-md hover:bg-[#00419e] transition-all ease-in-out duration-300 py-2 px-16">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default InstructorForm;