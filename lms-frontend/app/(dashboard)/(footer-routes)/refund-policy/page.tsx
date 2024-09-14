import { Separator } from "@radix-ui/react-dropdown-menu";
import { Footer } from "../../_components/(mainPageComponents)/footer";
import { HomeNavbar } from "../../_components/(mainPageComponents)/navbar";

const RefundpolicyPage = () => {
    return (
        <div>
            <HomeNavbar />
            <div className="text-justify">
                <h1 className="oxygen-bold text-xl lg:text-3xl px-4 lg:px-10 py-6">
                    Refund Policy
                </h1>
                <div className="px-4 lg:px-10 pb-3 source-sans-3-regular text-lg">
                    <p>
                        Thank you for purchasing our courses. We hope you will learn a lot from our course material which will help you to achieve the required skill for your career.
                    </p>
                    <p>
                        We understand that due to some unavoidable circumstances you require to reschedule or re-plan your course and you may require refund. We governed by terms and conditions , when you buy a training course from us, you agree to our Privacy Policy, Terms of Use&our Refund Policy.
                    </p>
                </div>
                <div className="px-4 lg:px-10 py-3 source-sans-3-regular text-lg flex flex-col gap-y-3">
                    <h1 className="oxygen-bold text-xl lg:text-2xl">
                        Term and Condition for Self Paced Learning and Instructor Led Training:
                    </h1>
                    <div className="flex flex-col gap-y-2">
                        To qualify for a refund, you must:
                        <ol className="px-4 list-decimal list-outside">
                            <li>
                                Submit your refund request within 7 days of purchasing a course via mail to
                                <span className="font-bold">info@skilltechindia.net</span>
                            </li>
                            <li>
                                You purchase the course just before the scheduled and started to attend regular class. No refund request will be taken care
                            </li>
                            <li>
                                Submit payment receipt.
                            </li>
                            <li>
                                Provide the details of course, purchase date and amount.
                            </li>
                            <li>
                                Refund will be processed in 7 working days.
                            </li>
                        </ol>
                    </div>
                    <p>
                        Any refund request failing to meet any of the requirements will not be accepted and no refund will be provided.
                    </p>
                </div>
                <div className="px-4 lg:px-10 py-3 source-sans-3-regular text-lg flex flex-col gap-y-3">
                    <h1 className="oxygen-bold text-xl lg:text-2xl">
                        Term and condition for University Partnered Programs / Bootcamps:
                    </h1>
                    <div className="flex flex-col gap-y-2">
                        To qualify for a refund, you must submit your refund request within 7 days from the start date of the regular class (Live or Recorded as the case maybe) whether attended or not. Any refund request failing to meet this requirement will not be accepted and no refund will be provided.
                        <ol className="px-4 list-decimal list-outside">
                            <li>
                                Submit your refund request within 7 days of purchasing a course via mail to <span className="font-bold">info@skilltechindia.net</span>
                            </li>
                            <li>
                                You purchase the course just before the scheduled and started to attend regular class. No refund request will be taken care.
                            </li>
                            <li>
                                Submit payment receipt.
                            </li>
                            <li>
                                Provide the details of course, purchase date and amount.
                            </li>
                            <li>
                            Refund will be processed in 7 working days.
                            </li>
                        </ol>
                    </div>
                    <p>
                        For instructor led training & University Partnered programs, Skilltech reserves the right to reschedule/cancel a class/session due to any unavoidable circumstances.
                    </p>
                </div>
                <div className="px-4 lg:px-10 py-3 source-sans-3-regular text-lg flex flex-col gap-y-3">
                    <h1 className="oxygen-bold text-xl lg:text-2xl">
                        Term and condition for Cancellation & Refunds
                    </h1>
                    <div className="flex flex-col gap-y-2">
                        We reserve the right to reschedule/cancel a class/session due to any unavoidable circumstances, or change the location of a class [if applicable]. To qualify for a refund, you must:
                        <ol className="px-4 list-decimal list-outside">
                            <li>
                                Submit your refund request within 7 days of purchasing a course via mail to <span className="font-bold">info@skilltechindia.net</span>
                            </li>
                            <li>
                                You purchase the course just before the scheduled and started to attend regular class. No refund request will be taken care.
                            </li>
                            <li>
                                Submit payment receipt.
                            </li>
                            <li>
                                Provide the details of course, purchase date and amount.
                            </li>
                            <li>
                            Refund will be processed in 7 working days.
                            </li>
                        </ol>
                    </div>
                </div>
                <p className="px-4 lg:px-10 py-3 source-sans-3-regular text-lg">
                    Any refund request failing to meet any of the requirements will not be accepted and no refund will be provided.
                </p>
            </div>
            <Footer />
        </div>
    );
}

export default RefundpolicyPage;