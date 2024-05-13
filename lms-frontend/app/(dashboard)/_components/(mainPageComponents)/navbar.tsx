import Link from "next/link";
import { Logo } from "../logo";
import { HomeMobileSidebar } from "./homemobilesiebar";
import { MenuIcon, SquarePlay } from "lucide-react";
import { SearchPage } from "./SeacrhInput";


import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import courseModel from "@/app/server/models/courseModel";
import NavbarAllCourses from "./navbar-all-course";
import connectToDB from "@/app/server/dbconfig/dbconfig";


connectToDB();
export const HomeNavbar = async () => {

    const course = await courseModel.find({});
    console.log(course);


    return (
        <div className="flex py-4 px-8 items-center justify-between shadow-md">
            <div className="">
                <MenuIcon className="flex md:hidden" />
                <div className="md:hidden">
                    <HomeMobileSidebar />
                </div>
            </div>

            {/* logo */}
            <Link href={'/'}>
                <Logo />
            </Link>

            {/* all courses */}
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <div className="outline-none border px-5 py-2 rounded-sm bg-sky-500 text-white font-serif flex items-center gap-x-2">
                        <SquarePlay /> All Courses
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>Courses</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <div className="flex flex-col ">
                            <NavbarAllCourses data={course} />
                        </div>
                    </DropdownMenuItem>
                    {/* <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuItem>Subscription</DropdownMenuItem> */}
                </DropdownMenuContent>
            </DropdownMenu>


            {/* SearchBar */}
            <SearchPage />

            {/* Buisnesses */}
            <Link href={'/buisness'} className="hidden lg:flex">
                Buisness
            </Link>

            <Link className="hidden lg:flex" href={'/become-instructor'}>
                Become an instructor
            </Link>


            {/* Login Signup Button */}
            <div className="flex gap-x-5">
                <Link href={'/signup'} className="hidden lg:flex">
                    <button className="border rounded-md px-4 py-2 md:text-[19px] bg-sky-500 text-white font-serif hover:bg-sky-600 transition-all ease-in-out duration-300">
                        Sign up
                    </button>
                </Link>
                <Link href={'/login'}>
                    <button className="border border-sky-500 rounded-md px-4 py-2 md:text-[19px] text-sky-500 font-serif hover:bg-sky-500 hover:text-white transition-all ease-in-out duration-300">
                        Log in
                    </button>
                </Link>
            </div>
        </div>
    )
}