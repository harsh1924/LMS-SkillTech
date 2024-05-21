import Link from "next/link";
import { SidebarRoutes } from "../sidebarroutes";
import { HomeSidebarRoutes } from "./home-sidebar-routes";

export const HomeSidebar = () => {
    return (
        <div className="h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm pt-14">
            
            <div className="flex flex-col w-full">
                <HomeSidebarRoutes />
            </div>
        </div>
    );
}

export default HomeSidebar;