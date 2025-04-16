"use client"

import { BriefcaseBusiness, Info, PersonStanding, Smartphone } from "lucide-react";
import Link from "next/link";

import { HomeSidebarItem } from "./home-sidebar-items";
import { Logo } from "../logo";

const HomeRoutes = [
    {
        icon: PersonStanding,
        label: 'Become a trainer',
        href: '/become-instructor'
    },
    {
        icon: BriefcaseBusiness,
        label: 'Buisness',
        href: '/buisness'
    },
    {
        icon: Smartphone,
        label: 'Contact us',
        href: '/contact-us'
    },
    {
        icon: Info,
        label: 'About us',
        href: '/about-us'
    },
]

export const HomeSidebarRoutes = () => {

    const routes = HomeRoutes;

    return (
        <div className="flex flex-col w-full gap-y-6">
            <Link className="px-8" href={`/`}>
                <Logo />
            </Link>
            <div>
                {routes.map((route) => (
                    <HomeSidebarItem
                        key={route.href} icon={route.icon} label={route.label} href={route.href} />
                ))}
            </div>
        </div>
    );
}