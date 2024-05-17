'use client';

import { usePathname, useRouter } from "next/navigation";
import { Button } from "../../../../../../components/ui/button";
import { LogOut } from "lucide-react";
import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";

export const NavbarRoutes = () => {
    const [isAdmin, setIsAdmin] = useState(false);

    const pathname = usePathname();

    const getId = async () => {
        const res = await axios.get('/api/user/user-details')
        const userRole = res.data.user.role;
        if (userRole === 'ADMIN') {
            setIsAdmin(true)
        }
    }
    useEffect(() => {
        getId()
    }, []);

    const isAdminPage = pathname?.startsWith('/admin');

    return (
        <div className="flex gap-x-2 ml-auto">
            {isAdminPage ? (
                <Link href={`/profile/`}>
                    <Button size='sm' variant='ghost'>
                        <LogOut className="h-4 w-4 mr-2" />
                        Exit
                    </Button>
                </Link>
            ) : (
                <div>
                    {isAdmin ? (
                        <div>
                            <Link href={'/admin/courses'}>
                                <Button size='sm' variant='ghost'>
                                    Teacher Mode
                                </Button>
                            </Link>
                            <Link href={`/`}>
                                <Button size='sm' variant='ghost'>
                                    Home
                                </Button>
                            </Link>
                        </div>
                    ) : (
                        <Link href={`/`}>
                            Home
                        </Link>
                    )}
                </div>
            )}
        </div>
    )
}