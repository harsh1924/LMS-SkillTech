import { HomeNavbar } from "../../_components/(mainPageComponents)/navbar";

const ContactUsPage = () => {
    return (
        <div>
            <HomeNavbar />
            <div className="py-10 flex justify-center items-center">
                <div className="py-6 px-5 rounded-md shadow-[0_0_20px_skyblue] flex justify-center items-center flex-col border">
                    <h3 className="text-2xl pb-2">
                        CONTACT US
                    </h3>
                    <p>
                        Please submit this form and a representative will reach you out
                    </p>
                    <form action="https://api.web3forms.com/submit" method="POST" className="py-4 flex gap-y-3 justify-start w-full flex-col">
                    <input type="hidden" name="access_key" value="c5335490-fd96-4271-910a-4d89cf799824" />
                        <div>
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
                            <span>
                                +91 &nbsp;| &nbsp;
                            </span>
                            <input required name="phone-number" type="number" placeholder="Phone Number*" className="border w-[300px] py-2 outline-none border-none " />
                            <div className="h-[1px] bg-gray-500 w-full "></div>
                        </div>
                        <div>
                            <textarea name="url" placeholder="Write a message" className="border py-2 outline-none border-none h-[150px] w-full resize-none" />
                            <div className="h-[1px] bg-gray-500 w-full "></div>
                        </div>
                        <div className="flex items-center justify-center">
                            <button type="submit" className="bg-sky-500 text-white py-2 px-16 rounded-md hover:bg-sky-600 transition-all ease-in-out duration-300">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactUsPage;