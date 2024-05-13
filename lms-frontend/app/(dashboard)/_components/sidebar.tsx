import Link from "next/link";
import { Logo } from "./logo";
import { SidebarRoutes } from "./sidebarroutes";

export const Sidebar = () => {
    return (
        <div className="h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm mt-[100px]">
            {/* Logo Div */}
            
            <div className="flex flex-col w-full">
                <SidebarRoutes />
            </div>
        </div>
    );
}

export default Sidebar;