"use client"

import { BarChart, Layout, List } from "lucide-react";
import { SidebarItem } from "./sidebaritem";
import { usePathname } from "next/navigation";

const guestRoutes = [
    {
        icon: Layout,
        label: 'Dashboard',
        href: '/profile'
    },
]

const adminRoutes = [
    {
        icon: List,
        label: 'Course',
        href: '/admin/courses'
    },
    {
        icon: BarChart,
        label: 'Analytics',
        href: '/admin/analytics'
    }
]

export const SidebarRoutes = () => {

    const pathname = usePathname();
    const isAdminPage = pathname?.includes('/admin');
    
    const routes = isAdminPage ? adminRoutes : guestRoutes;

    return (
        <div className="flex flex-col w-full">
            {routes.map((route) => (
                <SidebarItem 
                key={route.href} icon={route.icon} label={route.label} href={route.href} />    
            ))}
        </div>
    );
}