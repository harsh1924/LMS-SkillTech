import Link from "next/link";

import { Logo } from "../logo";
import { SearchPage } from "./SeacrhInput";
import { HomeMobileSidebar } from "./homemobilesiebar";
import { LoginButtons } from "../(buttons)/login-signup-button";
import { HoverAllCourses } from "./all-course-hover";

import '@/app/(dashboard)/dashboard.css'

export const HomeNavbar = () => {

    return (
        <div className="flex py-4 px-2 items-center justify-between shadow-md text-[0.8rem] oxygen-regular">
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
            <Link href={'/buisness'} className="hidden lg:flex hover:text-[#688F4E] ease-in-out transition-all duration-300">
                Buisness
            </Link>

            <Link href={`/resources`} className="hidden lg:flex hover:text-[#688F4E] ease-in-out transition-all duration-300">
                Resources
            </Link>

            <Link className="hidden lg:flex hover:text-[#688F4E] ease-in-out transition-all duration-300" href={'/become-instructor'}>
                Become a trainer
            </Link>

            <Link href={`/contact-us`} className="hidden lg:flex hover:text-[#688F4E] ease-in-out transition-all duration-300">
                Contact us
            </Link>

            {/* Login Signup Button */}
            <LoginButtons />
        </div>
    )
}