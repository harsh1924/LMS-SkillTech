import React from "react";

import { Navbar } from "../_components/navbar";
import Sidebar from "../_components/sidebar";

const DashboardLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <div className="h-full">
            <div className="h-[80px] fixed inset-y-0 w-full">
                <Navbar />
            </div>
            <div className="h-full md:flex hidden w-56 flex-col z-40 fixed inset-y-0 ">
                <Sidebar />
            </div>
            <main className="md:pl-56 pt-[81px]">
            {children}
            </main>
        </div>
    );
}

export default DashboardLayout;