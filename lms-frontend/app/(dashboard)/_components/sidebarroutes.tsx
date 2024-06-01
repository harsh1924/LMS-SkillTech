"use client"

import { BarChart, GraduationCapIcon, Laptop, Layout, List, NotebookPenIcon } from "lucide-react";
import { SidebarItem } from "./sidebaritem";
import { usePathname } from "next/navigation";

const guestRoutes = [
    {
        icon: Layout,
        label: 'Dashboard',
        href: '/profile'
    }
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

const trainerRoutes = [
    // {
    //     icon: List,
    //     label: 'Course',
    //     href: '/trainer/courses'
    // },
    {
        icon: Laptop,
        label: 'All Courses',
        href: '/trainer/courses/all-courses'
    },
    {
        icon: NotebookPenIcon,
        label: 'Create New Course',
        href: '/trainer/create'
    },
    {
        icon: GraduationCapIcon,
        label: 'Create Free Course',
        href: '/trainer/free-course'
    },
]

export const SidebarRoutes = () => {

    const pathname = usePathname();
    const isAdminPage = pathname?.includes('/admin');
    const isTrainerPage = pathname?.includes('/trainer');
    
    const routes = isAdminPage ? adminRoutes : (isTrainerPage ? trainerRoutes : guestRoutes);
    

    return (
        <div className="flex flex-col w-full">
            {routes.map((route) => (
                <SidebarItem 
                key={route.href} icon={route.icon} label={route.label} href={route.href} />    
            ))}
        </div>
    );
}