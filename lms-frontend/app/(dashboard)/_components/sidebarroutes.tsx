"use client"

import { BarChart, GraduationCapIcon, Laptop, Layout, List, NotebookPenIcon } from "lucide-react";
import { SidebarItem } from "./sidebaritem";
import { usePathname } from "next/navigation";

const guestRoutes = [
    {
        icon: Layout,
        label: 'Profile',
        href: '/profile'
    }
]

const adminRoutes = [
    {
        icon: List,
        label: 'All Courses',
        href: '/admin/courses/all-courses/edit_details_of_all_courses'
    },
    {
        icon: List,
        label: 'New Course',
        href: '/admin/create/create_new_paid_courses'
    },
    {
        icon: List,
        label: 'Free Course',
        href: '/admin/create/free-course/create_new_free_courses'
    },
    {
        icon: BarChart,
        label: 'Analytics',
        href: '/admin/analytics/reports_of_enrolledUsers_payment_and_all_users'
    }
]

const trainerRoutes = [
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