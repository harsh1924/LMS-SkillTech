import { Separator } from "@radix-ui/react-dropdown-menu";

import { Footer } from "../../_components/(mainPageComponents)/footer";
import { HomeNavbar } from "../../_components/(mainPageComponents)/navbar";

const RefundpolicyPage = () => {
    return (
        <div>
            <HomeNavbar />
            <div className="text-justify py-3">
                <h1 className="source-sans-3-bold text-xl px-4 lg:px-10 py-2">
                    Refund Policy
                </h1>
                <h1 className="source-sans-3-bold text-lg px-4 lg:px-10">
                    Term and Conditions:
                </h1>
                <div className="px-4 lg:px-10 pb-3 source-sans-3-regular">
                    <p>
                        Thank you for purchasing our courses. We hope you will learn a lot from our course material which will help you to achieve the required skill for your career.
                    </p>
                    <p>
                        We understand that due to some unavoidable circumstances you require to cancel your course and you may require refund. We are governed by terms and conditions , when you purchase a training course from us, you agree to our privacy policy, terms & conditions, refund & cancellation policy.
                    </p>
                    <p>
                        Send refund request to <span className="font-bold">info@skilltechindia.net.</span>
                    </p>
                </div>
                <div className="px-4 lg:px-10 py-3 source-sans-3-regular flex flex-col gap-y-3">
                    <h1 className="source-sans-3-bold text-xl">
                        Refund Term and Conditions:
                    </h1>
                    <h1 className="source-sans-3-bold text-xl">
                        Term and Condition for Self Paced Learning and Instructor Led Training:
                    </h1>
                    <div className="flex flex-col gap-y-2">
                        {/* To qualify for a refund, you must: */}
                        <ol className="px-4 list-decimal list-outside">
                            <li>
                                Refund of enrolled course are allowed & refund will be paid within 10 working days.
                            </li>
                            <li>
                                Submit your refund request within 7 days of purchasing a course via mail to
                                <span className="font-bold pl-1">info@skilltechindia.net</span>
                            </li>
                            <li>
                                You purchase the course just before the scheduled and started to attend regular class. No refund request will be taken care
                            </li>
                            <li>
                                Submit payment receipt, details of the course when you apply for cancelation and refund.
                            </li>
                            <li>
                                Provide the details of course, purchase date, amount and mode of payment.
                            </li>
                            <li>
                                Refund will be processed in 10 working days.
                            </li>
                            <li>
                                Refund will paid to same mode of payment.
                            </li>
                        </ol>
                    </div>
                    <p>
                        Any refund request failing to meet any of the requirements will not be accepted and no refund will be provided.
                    </p>
                </div>
                <div className="px-4 lg:px-10 py-3 source-sans-3-regular flex flex-col gap-y-3">
                    <h1 className="source-sans-3-bold text-xl">
                        Term and condition for University Partnered Programs / Bootcamps:
                    </h1>
                    <div className="flex flex-col gap-y-2">
                        {/* To qualify for a refund, you must submit your refund request within 7 days from the start date of the regular class (Live or Recorded as the case maybe) whether attended or not. Any refund request failing to meet this requirement will not be accepted and no refund will be provided. */}
                        Cancelation & refund request must be submitted for regular class (On campus, Live or Recorded Session as the case maybe) whether attended or not as per below terms and condition.
                        <ol className="px-4 list-decimal list-outside">
                            <li>
                                Refund of enrolled course are allowed & refund will paid within 10 working days.
                            </li>
                            <li>
                                Submit your refund request before 24 hrs of commencement of the course via mail to <span className="font-bold">info@skilltechindia.net</span>
                            </li>
                            <li>
                                Submit payment receipt, details of the course when you apply for cancelation and refund.
                            </li>
                            {/* <li>
                                Submit payment receipt.
                            </li> */}
                            <li>
                                Provide the details of course, purchase date and amount.
                            </li>
                            <li>
                                Refund will be processed in 10 working days.
                            </li>
                            <li>
                                Refund will paid to same mode of payment.
                            </li>
                        </ol>
                    </div>
                    <p>
                        For instructor led training & University Partnered programs, Skilltech reserves the right to reschedule/cancel a class/session due to any unavoidable circumstances.
                    </p>
                </div>
                <div className="px-4 lg:px-10 py-3 source-sans-3-regular flex flex-col gap-y-3">
                    <h1 className="source-sans-3-bold text-xl">
                        Term and condition for Cancellation & Refunds for CSM, CSPO, PSM, PSPO programs
                    </h1>
                    <div className="flex flex-col gap-y-2">
                        We reserve the right to reschedule/cancel a class/session due to any unavoidable circumstances, or change the location of a class [if applicable]. To qualify for a refund, you must:
                        <ol className="px-4 list-decimal list-outside">
                            <li>
                                Refund of enrolled course are allowed & refund will be paid within 10 working days.
                            </li>
                            <li>
                                Submit your refund request before 24 hrs of commencement of the course via mail to <span className="font-bold">info@skilltechindia.net</span>
                            </li>
                            <li>
                                You purchase the course just before the scheduled and started to attend regular class. No refund request will be taken care.
                            </li>
                            <li>
                                Submit payment receipt, details of the course when you apply for cancelation and refund.
                            </li>
                            <li>
                                Provide the details of course, mode of payment, purchase date and amount.
                            </li>
                            <li>
                                Refund will be processed in 10 working days.
                            </li>
                            <li>
                                Refund will paid to same mode of payment.
                            </li>
                        </ol>
                    </div>
                </div>
                <p className="px-4 lg:px-10 py-3 source-sans-3-regular">
                    Any refund request failing to meet any of the requirements will not be accepted and no refund will be provided.
                </p>
            </div>
            <Footer />
        </div>
    );
}

export default RefundpolicyPage;