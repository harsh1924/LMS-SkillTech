// 'use client'

import courseModel from "@/app/server/models/courseModel";
import { HomeNavbar } from "../../../_components/(mainPageComponents)/navbar";
import { useState } from "react";

const SurveyPage = async ({
    params
}: {
    params: { courseId: string }
}) => {
    // const [selectedOption, setSelectedOption] = useState({
    //     content: ''
    // });
    const course = await courseModel.findById(params.courseId);
    const isCourseFree = course.isFree;
    const handleOptionChange = (event: any) => {
        console.log('hello');

    };

    return (
        <div>
            <div>
                <HomeNavbar />
            </div>
            <div className="px-20 pt-6 flex flex-col gap-y-2">
                <h1 className="oxygen-bold py-6 bg-[#52a6ff] text-2xl flex items-center text-white justify-center">
                    Course Evaluation Survey
                </h1>
                <p className="source-sans-3-regular text-lg">
                    With the aim of improving our course modules. We would like to know your perceptions about the course & suggest area of improvement, please share your thoughts by filling small survey.
                </p>
            </div>
            <form className="px-20 py-4"
                action="https://api.web3forms.com/submit" method="POST"
            >
                <input type="hidden" name="access_key" value="c5335490-fd96-4271-910a-4d89cf799824" />
                {isCourseFree ? (
                    <div>
                        <input type="hidden" name="redirect" value={`http://localhost:3000/course/${params.courseId}/purchase`} />
                    </div>
                ) : (
                    <input type="hidden" name="redirect" value={`http://localhost:3000/courses/${params.courseId}/certificate`} />
                )}
                <p className="py-2 source-sans-3-regular text-xl">
                    Rate the website based on the following aspects:
                </p>
                <div className="flex flex-col pb-6 source-sans-3-regular">
                    <span className="oxygen-semibold text-lg py-2">
                        Course Content
                    </span>
                    <span className="flex items-center gap-x-2">
                        <input type="radio" name="Course Content" value='Not Satisfied' />
                        <label>
                            Not Satisfied
                        </label>
                    </span>
                    <span className="flex items-center gap-x-2">
                        <input type="radio" name="Course Content" value='Slightly' />
                        <label>Slightly</label>
                    </span>
                    <span className="flex items-center gap-x-2">
                        <input type="radio" name="Course Content" value='Moderately' />
                        <label>Moderately</label>
                    </span>
                    <span className="flex items-center gap-x-2">
                        <input type="radio" name="Course Content" value='Very' />
                        <label>Very</label>
                    </span>
                    <span className="flex items-center gap-x-2">
                        <input type="radio" name="Course Content" value='Highly Satisfied' />
                        <label>
                            Highly Satisfied
                        </label>
                    </span>
                </div>
                <div className="flex flex-col pb-6 source-sans-3-regular">
                    <span className="oxygen-semibold text-lg py-2">
                        Course Delivery
                    </span>
                    <span className="flex items-center gap-x-2">
                        <input type="radio" name="Course Delivery" value='Not Satisfied' />
                        <label>
                            Not Satisfied
                        </label>
                    </span>
                    <span className="flex items-center gap-x-2">
                        <input type="radio" name="Course Delivery" value='Slightly' />
                        <label>Slightly</label>
                    </span>
                    <span className="flex items-center gap-x-2">
                        <input type="radio" name="Course Delivery" value='Moderately' />
                        <label>Moderately</label>
                    </span>
                    <span className="flex items-center gap-x-2">
                        <input type="radio" name="Course Delivery" value='Very' />
                        <label>Very</label>
                    </span>
                    <span className="flex items-center gap-x-2">
                        <input type="radio" name="Course Delivery" value='Highly Satisfied' />
                        <label>
                            Highly Satisfied
                        </label>
                    </span>
                </div>
                <div className="flex flex-col pb-6 source-sans-3-regular">
                    <span className="oxygen-semibold text-lg py-2">
                        Course Support Material
                    </span>
                    <span className="flex items-center gap-x-2">
                        <input type="radio" name="Course Support Material" value='Not Satisfied' />
                        <label>
                            Not Satisfied
                        </label>
                    </span>
                    <span className="flex items-center gap-x-2">
                        <input type="radio" name="Course Support Material" value='Slightly' />
                        <label>Slightly</label>
                    </span>
                    <span className="flex items-center gap-x-2">
                        <input type="radio" name="Course Support Material" value='Moderately' />
                        <label>Moderately</label>
                    </span>
                    <span className="flex items-center gap-x-2">
                        <input type="radio" name="Course Support Material" value='Very' />
                        <label>Very</label>
                    </span>
                    <span className="flex items-center gap-x-2">
                        <input type="radio" name="Course Support Material" value='Highly Satisfied' />
                        <label>
                            Highly Satisfied
                        </label>
                    </span>
                </div>
                <div className="flex flex-col pb-6 source-sans-3-regular">
                    <span className="oxygen-semibold text-lg py-2">
                        Instructors
                    </span>
                    <span className="flex items-center gap-x-2">
                        <input type="radio" name="Instructors" value='Not Satisfied' />
                        <label>
                            Not Satisfied
                        </label>
                    </span>
                    <span className="flex items-center gap-x-2">
                        <input type="radio" name="Instructors" value='Slightly' />
                        <label>Slightly</label>
                    </span>
                    <span className="flex items-center gap-x-2">
                        <input type="radio" name="Instructors" value='Moderately' />
                        <label>Moderately</label>
                    </span>
                    <span className="flex items-center gap-x-2">
                        <input type="radio" name="Instructors" value='Very' />
                        <label>Very</label>
                    </span>
                    <span className="flex items-center gap-x-2">
                        <input type="radio" name="Instructors" value='Highly Satisfied' />
                        <label>
                            Highly Satisfied
                        </label>
                    </span>
                </div>
                <div className="flex flex-col pb-6 source-sans-3-regular">
                    <span className="oxygen-semibold text-lg py-2">
                        Course Satisfied Your Expectations
                    </span>
                    <span className="flex items-center gap-x-2">
                        <input type="radio" name="Course Expectations" value='Not Satisfied' />
                        <label>
                            Not Satisfied
                        </label>
                    </span>
                    <span className="flex items-center gap-x-2">
                        <input type="radio" name="Course Expectations" value='Slightly' />
                        <label>Slightly</label>
                    </span>
                    <span className="flex items-center gap-x-2">
                        <input type="radio" name="Course Expectations" value='Moderately' />
                        <label>Moderately</label>
                    </span>
                    <span className="flex items-center gap-x-2">
                        <input type="radio" name="Course Expectations" value='Very' />
                        <label>Very</label>
                    </span>
                    <span className="flex items-center gap-x-2">
                        <input type="radio" name="Course Expectations" value='Highly Satisfied' />
                        <label>
                            Highly Satisfied
                        </label>
                    </span>
                </div>
                <span className="flex flex-col py-6">
                    <span className="oxygen-semibold text-lg py-2">
                        Any Comments
                    </span>
                    <textarea name="text" id="comments" className="outline-none border h-[150px] resize-none text-sm p-3 source-sans-3-regular rounded-md" placeholder="In your opinion, how can the website be improved?"></textarea>
                </span>
                <button type="submit" className="rounded-md px-5 py-2 bg-[#0056d2] text-white oxygen-bold hover:bg-[#00419e] transition-all ease-in-out duration-300 ">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default SurveyPage;