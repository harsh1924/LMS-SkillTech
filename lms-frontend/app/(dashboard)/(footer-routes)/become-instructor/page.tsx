import { HomeNavbar } from "../../_components/(mainPageComponents)/navbar";

const InstructorForm = () => {
    return (
        <div>
            <HomeNavbar />
            <div className="px-20 py-10 bg-[#688F4E] text-white">
                <h1 className="text-2xl font-sans md:text-4xl">
                    Teach. Create. Earn.
                </h1>
            </div>
            <div className="py-10 flex justify-center items-center">
                <div className="py-6 px-5 rounded-md shadow-[0_0_10px_#688F4E] flex justify-center items-center flex-col border source-sans-3-regular">
                    <h3 className="text-2xl pb-2">
                        INTERESTED IN WORKING WITH US
                    </h3>
                    <p>
                        Please submit this form and a representative will reach you out
                    </p>
                    <form action="https://api.web3forms.com/submit" method="POST" className="py-4 flex gap-y-3 justify-start w-full flex-col">
                    <input type="hidden" name="access_key" value="c5335490-fd96-4271-910a-4d89cf799824" />
                        <div>
                            <input required name="name" type="text" placeholder="Name*" className="border w-[300px] py-2 outline-none border-none " />
                            <div className="h-[1px] bg-gray-500 w-full "></div>
                        </div>
                        <div>
                            <input required name="email" type="email" placeholder="Email*" className="border w-[300px] py-2 outline-none border-none " />
                            <div className="h-[1px] bg-gray-500 w-full "></div>
                        </div>
                        <div>
                            <input required name="course" type="text" placeholder="Select Course*" className="border w-[300px] py-2 outline-none border-none " />
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
                            <input name="url" type="url" placeholder="Linkedn URL" className="border w-[300px] py-2 outline-none border-none " />
                            <div className="h-[1px] bg-gray-500 w-full "></div>
                        </div>
                        <div className="flex items-center justify-center">
                            <button type="submit" className="bg-[#2B463C] text-white py-2 px-16 rounded-md hover:bg-[#3f6658] transition-all ease-in-out duration-300">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default InstructorForm;