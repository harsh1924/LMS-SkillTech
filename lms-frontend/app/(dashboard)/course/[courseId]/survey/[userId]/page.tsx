'use client'

import { HomeNavbar } from "@/app/(dashboard)/_components/(mainPageComponents)/navbar";
import courseModel from "@/app/server/models/courseModel";
import userModel from "@/app/server/models/userModel";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const SurveyPage = ({
    params
}: {
    params: { courseId: string, userId: string }
}) => {

    const [isCourseFree, setIsCourseFree] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [userName, setUserName] = useState('');

    const findCourse = async () => {
        const response = await axios.get(`/api/course/course-details/${params.courseId}`);
        const res = await axios.get('/api/user/user-details');
        setUserName(res.data.user.name)
        const isCourseFree = response.data.course.isFree;
        setIsCourseFree(isCourseFree);
        setIsLoading(true);
    }

    const setSurvyed = async () => {
        const res = await axios.put(`/api/course/${params.courseId}/user/${params.userId}/setIsSurvyed`);
        if (res) {
            toast.success('Survey Completed')
        }
    }

    useEffect(() => {
        findCourse()
    }, []);

    return (
        <div>
            {!isLoading ? (
                <div className="flex h-screen w-screen items-center justify-center">
                    <div className="animate-spin rounded-full border-4 border-gray-300 border-t-gray-900 h-12 w-12 dark:border-gray-600 dark:border-t-gray-50" />
                </div>
            ) : (
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
                    <form className="px-16 py-4"
                        action="https://api.web3forms.com/submit" method="POST"
                    >
                        <input type="hidden" name="access_key" value="c5335490-fd96-4271-910a-4d89cf799824" />
                        <input type="hidden" name="subject" value="Survey Form Submission"></input>
                        <input type="hidden" name="from_name" value={`Survey Form - ${userName}`}></input>

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
                        <div className="border px-3 py-4 rounded-md">
                            <div className="flex pb-6 justify-between source-sans-3-regular">
                                <span className="w-[300px]"></span>
                                <span>Not Satisfied</span>
                                <span>Slightly</span>
                                <span>Moderately</span>
                                <span>Very</span>
                                <span>Highly</span>
                            </div>
                            <div className="flex pb-6 justify-between source-sans-3-regular ">
                                <span className="oxygen-semibold text-lg py-2 w-[300px]">
                                    Course Content
                                </span>
                                <input type="radio" name="Course Content" value='Not Satisfied' required />
                                <input type="radio" name="Course Content" value='Slightly' required />
                                <input type="radio" name="Course Content" value='Moderately' required />
                                <input type="radio" name="Course Content" value='Very' required />
                                <input type="radio" name="Course Content" value='Highly Satisfied' required />
                            </div>
                            <div className="flex justify-between pb-6 source-sans-3-regular">
                                <span className="oxygen-semibold text-lg py-2 w-[300px]">
                                    Course Delivery
                                </span>
                                <input type="radio" name="Course Delivery" value='Not Satisfied' required />
                                <input type="radio" name="Course Delivery" value='Slightly' required />
                                <input type="radio" name="Course Delivery" value='Moderately' required />
                                <input type="radio" name="Course Delivery" value='Very' required />
                                <input type="radio" name="Course Delivery" value='Highly Satisfied' required />
                            </div>
                            <div className="flex justify-between pb-6 source-sans-3-regular">
                                <span className="oxygen-semibold text-lg py-2 w-[300px]">
                                    Course Support Material
                                </span>
                                <input type="radio" name="Course Support Material" value='Not Satisfied' required />
                                <input type="radio" name="Course Support Material" value='Slightly' required />
                                <input type="radio" name="Course Support Material" value='Moderately' required />
                                <input type="radio" name="Course Support Material" value='Very' required />
                                <input type="radio" name="Course Support Material" value='Highly Satisfied' required />
                            </div>
                            <div className="flex justify-between pb-6 source-sans-3-regular">
                                <span className="oxygen-semibold text-lg py-2 w-[300px]">
                                    Instructors
                                </span>
                                <input type="radio" name="Instructors" value='Not Satisfied' required />
                                <input type="radio" name="Instructors" value='Slightly' required />
                                <input type="radio" name="Instructors" value='Moderately' required />
                                <input type="radio" name="Instructors" value='Very' required />
                                <input type="radio" name="Instructors" value='Highly Satisfied' required />
                            </div>
                            <div className="flex justify-between pb-6 source-sans-3-regular">
                                <span className="oxygen-semibold text-lg py-2 w-[300px]">
                                    Course Satisfied Your Expectations
                                </span>
                                <input type="radio" name="Course Expectations" value='Not Satisfied' required />
                                <input type="radio" name="Course Expectations" value='Slightly' required />
                                <input type="radio" name="Course Expectations" value='Moderately' required />
                                <input type="radio" name="Course Expectations" value='Very' required />
                                <input type="radio" name="Course Expectations" value='Highly Satisfied' required />
                            </div>
                        </div>
                        <span className="flex flex-col py-6">
                            <span className="oxygen-semibold text-lg py-2">
                                Any Comments
                            </span>
                            <textarea name="Comments" id="comments" className="outline-none border h-[150px] resize-none text-sm p-3 source-sans-3-regular rounded-md" placeholder="In your opinion, how can the website be improved?"></textarea>
                        </span>
                        <button type="submit" className="rounded-md px-5 py-2 bg-[#0056d2] text-white oxygen-bold hover:bg-[#00419e] transition-all ease-in-out duration-300" onClick={setSurvyed}>
                            Submit
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
}

export default SurveyPage;