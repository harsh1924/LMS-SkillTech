import Link from "next/link";
import { ArrowRight, MenuIcon, SquarePlay } from "lucide-react";

const courses = [
    'Web Develpoment',
    'Software Development'
]

import { Separator } from "@/components/ui/separator";
import { Logo } from "./logo";
import { SearchPage } from "./(mainPageComponents)/SeacrhInput";


export const DashboardComponent = () => {

    return (
        <div className="flex py-4 px-8 items-center justify-between shadow-md">
            <div className="">
                <MenuIcon className="flex md:hidden" />
            </div>

            {/* logo */}
            <Link href={'/'}>
                <Logo />
            </Link>

            {/* SearchBar */}
            <SearchPage />

            {/* Buisnesses */}
            {/* <Link href={'/admin/courses'} className="hidden lg:flex">
                Teacher Mode
            </Link> */}

            {/* Login Signup Button */}
            <div className="flex gap-x-5">
                <Link href={'/profile'}>
                    <button className="border rounded-md px-4 py-2 md:text-[19px] bg-sky-500 text-white font-serif hover:bg-sky-600 transition-all ease-in-out duration-300">
                        Profile
                    </button>
                </Link>
            </div>
        </div>
    )
}