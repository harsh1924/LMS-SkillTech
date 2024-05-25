import Link from "next/link";
import { ArrowRight, SquarePlay } from "lucide-react";

import { Logo } from "../logo";
import { SearchPage } from "./SeacrhInput";
import { HomeMobileSidebar } from "./homemobilesiebar";
import courseModel from "@/app/server/models/courseModel";
import connectToDB from "@/app/server/dbconfig/dbconfig";
import { Separator } from "@/components/ui/separator";
import { LoginButtons } from "../(buttons)/login-signup-button";
import { AllCoursesHoverList } from "./all-course-hover-courses";
import { HoverAllCourses } from "./all-course-hover";



export const HomeNavbar = () => {

    // const course = await courseModel.find({});

    return (
        <div className="flex py-4 px-2 items-center justify-between shadow-md">
            <div className="lg:hidden">
                <HomeMobileSidebar />
            </div>

            {/* logo */}
            <Link href={'/'} className="hidden md:flex">
                <Logo />
            </Link>

            {/* all courses */}
            <HoverAllCourses />

            {/* SearchBar */}
            <SearchPage />

            {/* Buisnesses */}
            <Link href={'/buisness'} className="hidden lg:flex">
                Buisness
            </Link>

            <Link className="hidden lg:flex" href={'/become-instructor'}>
                Become a trainer
            </Link>

            <Link href={`/contact-us`} className="hidden lg:flex">
                Contact us
            </Link>

            {/* Login Signup Button */}
            <LoginButtons />
        </div>
    )
}