import Link from "next/link";
import { ArrowRight, SquarePlay } from "lucide-react";

import { Logo } from "../logo";
import { SearchPage } from "./SeacrhInput";
import { HomeMobileSidebar } from "./homemobilesiebar";
import courseModel from "@/app/server/models/courseModel";
import connectToDB from "@/app/server/dbconfig/dbconfig";
import { Separator } from "@/components/ui/separator";
import { LoginButtons } from "../(buttons)/login-signup-button";


connectToDB();
export const HomeNavbar = async () => {



    const course = await courseModel.find({});

    return (
        <div className="flex py-4 px-8 items-center justify-between shadow-md">
            <div className="md:hidden">
                <HomeMobileSidebar />
            </div>

            {/* logo */}
            <Link href={'/'} className="hidden md:flex">
                <Logo />
            </Link>

            {/* all courses */}
            <div className="outline-none border px-5 py-2 rounded-sm bg-sky-500 text-white font-serif lg:flex items-center gap-x-2 hidden group relative cursor-pointer">
                <SquarePlay />
                All Courses
                <div className="hidden flex-col gap-y-4 group-hover:flex hover:flex bg-white absolute text-black top-[41px] left-0 text-lg px-5 py-2 w-[300px] transition-all ease-in-out duration-300">
                    Categories
                    <Separator />
                    <div className="flex flex-col gap-y-5 ">
                        <p className="flex justify-between">
                            Web Development
                            <ArrowRight />
                        </p>
                        <p className="flex justify-between">
                            Software Development
                            <ArrowRight />
                        </p>
                        <p className="flex justify-between">
                            Data Science
                            <ArrowRight />
                        </p>
                        <p className="flex justify-between">
                            Cloud
                            <ArrowRight />
                        </p>
                        <p className="flex justify-between">
                            IT & Network
                            <ArrowRight />
                        </p>
                    </div>
                </div>
            </div>


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