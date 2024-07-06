export const Testimony = () => {
    return (
        <section className="bg-[#f7f9fa] py-10 px-8">
            <h1 className="oxygen-bold text-2xl mb-5">How learners like you are achieving their goals</h1>
            <div className="flex justify-around flex-wrap source-sans-3-regular">
                <div className="border flex flex-col justify-between bg-white p-6 w-[100%] sm:w-[31%]">
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
                        <p className="text-[#347dfb] font-bold">[NEW] Ultimate AWS Certified Cloud Practitioner - 2022</p>
                    </div>
                </div>
                <div className="border flex flex-col justify-between bg-white p-6 w-[100%] sm:w-[31%]">
                    <i className="fa-solid fa-quote-left"></i>
                    <p>
                        This course helped me
                        <span className="font-bold"> freshen up on my product manager skills and land a job at Facebook! </span>
                        Even people with no prior knowledge of any visualization tools can become a master after completing
                        this course.
                    </p>
                    <div className="pt-2 flex gap-2 pb-8 border-b-2">
                        <div className="w-10 h-10 flex justify-center items-center rounded-full text-white bg-black">RF</div>
                        <span className="font-bold">Ron F</span>
                    </div>
                    <div className="py-4 flex items-center justify-between gap-2">
                        <p className="text-[#347dfb] font-bold">Become a Product Manager | Learn the Skills & Get the Job</p>
                    </div>
                </div>
                <div className="border flex flex-col justify-between bg-white p-6 w-[100%] sm:w-[31%]">
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
                        <p className="text-[#347dfb] font-bold">Leadership: Practical Leadership Skills. Become better at management</p>
                    </div>
                </div>
            </div>
        </section>
    )
}