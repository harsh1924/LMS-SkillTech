import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import HomeSidebar from "./home-sidebar";


export const HomeMobileSidebar = () => {
    return (
        <Sheet>
            <SheetTrigger className="md:hidden pr-4 hover:opacity-75 transition">
                <Menu size={30} />
            </SheetTrigger>
            <SheetContent side={'left'} className="p-0 bg-white">
                <HomeSidebar />
            </SheetContent>
        </Sheet>

    )
}