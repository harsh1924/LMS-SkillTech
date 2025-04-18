import ContactUsImage from '@/app/helpers/images/ContactUs.jpg'

import { Footer } from "../../_components/(mainPageComponents)/footer";
import { HomeNavbar } from "../../_components/(mainPageComponents)/navbar";

const ContactUsPage = () => {
    return (
        <div>
            <HomeNavbar />
            <div className="py-10 px-10 flex justify-center lg:justify-around items-center source-sans-3-regular">
                <div className="">
                    <img src={ContactUsImage.src} alt="Contact us page image" height={500} width={500} className="hidden lg:flex" />
                </div>
                <div className="flex flex-col gap-y-6">
                    <div className="py-6 px-5 shadow-lg rounded-md md:shadow-[0_0_20px_#347dfb] flex justify-center items-center flex-col border">
                        <h3 className="text-xl pb-2">
                            CONTACT US
                        </h3>
                        <p className="text-[15px]">
                            Please submit this form and a representative will reach you out
                        </p>
                        <form action="https://api.web3forms.com/submit" method="POST" className="py-4 flex gap-y-3 justify-start w-full flex-col">
                            <input type="hidden" name="access_key" value="9399a6fe-b4a0-448f-b7be-26f8007eb712" />
                            <input type="hidden" name="subject" value="New Contact Us Form Submitted"></input>
                            <input type="hidden" name="from_name" value="Contact Us Form"></input>
                            <div className="text-[15px]">
                                <input required name="name" type="text" placeholder="Name*" className=" py-2 outline-none border-none w-full" />
                                <div className="h-[1px] bg-gray-500 w-full "></div>
                            </div>
                            <div>
                                <input required name="email" type="email" placeholder="Email*" className="w-full py-2 outline-none border-none " />
                                <div className="h-[1px] bg-gray-500 w-full "></div>
                            </div>
                            <div>
                                <input required name="course" type="text" placeholder="Select Course*" className="border w-full py-2 outline-none border-none " />
                                <div className="h-[1px] bg-gray-500 w-full "></div>
                            </div>
                            <div>
                                <span className="hidden lg:inline">
                                    +91 &nbsp;| &nbsp;
                                </span>
                                <input required name="phone-number" type="number" placeholder="Phone Number*" className="border w-[300px] py-2 outline-none border-none " />
                                <div className="h-[1px] bg-gray-500 w-full "></div>
                            </div>
                            <div>
                                <textarea name="url" placeholder="Write a message" className="border py-2 outline-none border-none h-[100px] w-full" />
                                <div className="h-[1px] bg-gray-500 w-full "></div>
                            </div>
                            <div className="flex items-center justify-center">
                                <button type="submit" className="bg-[#0056d2] text-white oxygen-regular rounded-md hover:bg-[#00419e] transition-all ease-in-out duration-300 py-2 px-16">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="px-10 py-6 border shadow-lg">
                        <p className="text-lg source-sans-3-regular">
                            Registered Address
                        </p>
                        <div className="py-2 flex flex-col md:text-sm source-sans-3-regular w-[250px] gap-2 ">
                            <div>
                                <p className="font-semibold text-[16px]">
                                    Address:
                                </p>
                                <p>
                                    C-26, 2nd Floor, Pocket-C , Sector-3, Dwarka, New Delhi-110078
                                </p>
                            </div>
                            <div>
                                <p className="font-semibold text-[16px]">
                                    Email Address:
                                </p>
                                <p>
                                    For Information : info@skilltechindia.net
                                </p>
                            </div>
                            <div>
                                <p className="font-semibold text-[16px]">
                                    Contact No:
                                </p>
                                <p>
                                    +91 7701885882
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ContactUsPage;