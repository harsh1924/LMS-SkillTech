import Link from "next/link"

import { NavbarRoutes } from "@/app/(dashboard)/(mainuserpage)/profilee/[userId]/_components/navbar-routes"

import { MobileSidebar } from "./mobileSidebar"
import { Logo } from "./logo"

export const Navbar = () => {
    return (
        <div>
            {/* <HomeNavbar /> */}
            <div className="p-4 border-y h-full flex items-center bg-white shadow-sm">
                <Link href={'/'} className="hidden md:flex ml-[50%] z-50">
                    <Logo />
                </Link>
                <MobileSidebar />
                <NavbarRoutes />
            </div>
        </div>
    )
}