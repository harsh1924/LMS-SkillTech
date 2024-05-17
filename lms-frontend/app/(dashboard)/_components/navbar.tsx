import { NavbarRoutes } from "@/app/(dashboard)/(mainuserpage)/profile/[userId]/_components/navbar-routes"
import { MobileSidebar } from "./mobileSidebar"
import { HomeNavbar } from "./(mainPageComponents)/navbar"
import { Logo } from "./logo"
import { Link } from "lucide-react"

export const Navbar = () => {
    return (
        <div>
            {/* <HomeNavbar /> */}
            <div className="p-4 border-y h-full flex items-center bg-white shadow-sm">
                <Logo />
                <MobileSidebar />
                <NavbarRoutes />
            </div>
        </div>
    )
}