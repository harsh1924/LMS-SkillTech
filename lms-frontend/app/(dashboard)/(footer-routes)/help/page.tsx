import { Separator } from "@/components/ui/separator";
import { Footer } from "../../_components/(mainPageComponents)/footer";
import { HomeNavbar } from "../../_components/(mainPageComponents)/navbar";

const HelpPage = () => {
    return (
        <div>
            <div className="w-full">
                <HomeNavbar />
            </div>
            <div className="px-3 lg:px-16 py-10 flex flex-col gap-y-8">
                <div className="flex flex-col gap-y-3 lg:gap-y-6">
                    <h1 className="oxygen-bold text-2xl lg:text-4xl">
                        SkillTech Help Page
                    </h1>
                    <p className="lg:text-2xl source-sans-3-regular">
                        Welcome to SkillTech Help! Here you will find answers to common questions and issues related to using our website effectively.
                    </p>
                </div>
                <div className="flex flex-col gap-y-4 lg:gap-y-4">
                    <h2 className="oxygen-bold text-lg lg:text-2xl">
                        1. Getting Started
                    </h2>
                    <div className="flex flex-col gap-y-3">
                        <h3 className="oxygen-bold text-lg lg:text-2xl">
                            Creating an Account
                        </h3>
                        <p className="lg:text-xl source-sans-3-regular">
                            To create an account on SkillTech:
                        </p>
                        <div className="flex flex-col gap-y-2">
                            <div className="lg:text-xl source-sans-3-regular">
                                <ol className="list-decimal px-6">
                                    <li>
                                        Navigate to the homepage.
                                    </li>
                                    <li>
                                        Click on the "Login/Register" button.
                                    </li>
                                    <li>
                                        On Login Page, click on Create New Accout button
                                    </li>
                                    <li>
                                        Fill in the required information.
                                    </li>
                                    <li>
                                        Click "Create Account" or "Sign Up".
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-3">
                        <h3 className="oxygen-bold text-lg lg:text-2xl">
                            Logging In
                        </h3>
                        <p className="lg:text-xl source-sans-3-regular">
                            To log into your SkillTech account:
                        </p>
                        <div className="flex flex-col gap-y-2">
                            <div className="lg:text-xl source-sans-3-regular">
                                <ol className="list-decimal px-6">
                                    <li>
                                        Go to the homepage.
                                    </li>
                                    <li>
                                        Click on the "Login/Register" button.
                                    </li>
                                    <li>
                                        Enter your email and password.
                                    </li>
                                    <li>
                                        Click "Log In" or "Sign In".
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-3">
                        <h3 className="oxygen-bold text-lg lg:text-2xl">
                            Resetting Password
                        </h3>
                        <p className="lg:text-xl source-sans-3-regular">
                            If you forget your password:
                        </p>
                        <div className="flex flex-col gap-y-2">
                            <div className="lg:text-xl source-sans-3-regular">
                                <ol className="list-decimal px-6">
                                    <li>
                                        Go to the login page.
                                    </li>
                                    <li>
                                        Click on "Forgot Password?".
                                    </li>
                                    <li>
                                        Enter your email address.
                                    </li>
                                    <li>
                                        Check your email for instructions on resetting your password.
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <Separator />

                <div className="flex flex-col gap-y-4 lg:gap-y-4">
                    <h2 className="oxygen-bold text-lg lg:text-2xl">
                        2. Using SkillTech
                    </h2>
                    <div className="flex flex-col gap-y-3">
                        <h3 className="oxygen-bold text-lg lg:text-2xl">
                            Browsing Courses
                        </h3>
                        <p className="lg:text-xl source-sans-3-regular">
                            To find courses on SkillTech:
                        </p>
                        <div className="flex flex-col gap-y-2">
                            <div className="lg:text-xl source-sans-3-regular">
                                <ol className="list-decimal px-6">
                                    <li>
                                        Browse the homepage for featured courses.
                                    </li>
                                    <li>
                                        Use the search bar to find specific courses.
                                    </li>
                                    <li>
                                        Filter courses by category or skill level using the sidebar.
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-3">
                        <h3 className="oxygen-bold text-lg lg:text-2xl">
                            Enrolling in Courses
                        </h3>
                        <p className="lg:text-xl source-sans-3-regular">
                            To enroll in a course:
                        </p>
                        <div className="flex flex-col gap-y-2">
                            <div className="lg:text-xl source-sans-3-regular">
                                <ol className="list-decimal px-6">
                                    <li>
                                        Go to the course page.
                                    </li>
                                    <li>
                                        Click on the "Enroll" or "Join Course" button.
                                    </li>
                                    <li>
                                        Follow any additional prompts to complete the enrollment process.
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-3">
                        <h3 className="oxygen-bold text-lg lg:text-2xl">
                            Managing Your Profile
                        </h3>
                        <p className="lg:text-xl source-sans-3-regular">
                            To manage your profile:
                        </p>
                        <div className="flex flex-col gap-y-2">
                            <div className="lg:text-xl source-sans-3-regular">
                                <ol className="list-decimal px-6">
                                    <li>
                                        Click on your profile icon.
                                    </li>
                                    <li>
                                        Select "Profile".
                                    </li>
                                    <li>
                                        Update your information, such as name, email, or phone number.
                                    </li>
                                    <li>
                                        Save changes if applicable.
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <Separator />


                <p className="text-lg source-sans-3-regular">
                    This help page should provide you with the necessary information to navigate and use SkillTech effectively. If you have any specific questions or concerns not covered here, please don't hesitate to contact our support team. Happy learning!
                </p>
            </div>
            <div className="w-full">
                <Footer />
            </div>
        </div>
    );
}

export default HelpPage;