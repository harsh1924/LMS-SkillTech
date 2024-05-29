'use client';

import { usePathname, useRouter } from "next/navigation";
import { Button } from "../../../../../../components/ui/button";
import { LogOut, UserCircle2Icon } from "lucide-react";
import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import toast from "react-hot-toast";

export const NavbarRoutes = () => {

    const router = useRouter();
    const logout = async () => {
        try {
            await axios.get('/api/user/logout')
            router.push('/');
            toast.success('Logout Successfull');
            // setIsLoggedIn(true);
        } catch (error: any) {
            console.log(error.message);
            toast.error(error.message)
        }
    }

    const [isAdmin, setIsAdmin] = useState(false);
    const [UserId, setUserId] = useState('');

    const pathname = usePathname();

    const getId = async () => {
        const res = await axios.get('/api/user/user-details')
        const userRole = res.data.user.role;
        const userId = res.data.user._id;
        setUserId(userId);
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
                        <div className="flex items-center">
                            <Link href={'/admin/courses'}>
                                <Button size='sm' variant='ghost'>
                                    Teacher Mode
                                </Button>
                            </Link>
                            <DropdownMenu>
                                <DropdownMenuTrigger>
                                    <UserCircle2Icon size={30} />
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuLabel>
                                        <span>
                                            My Account
                                        </span>
                                    </DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>
                                        <Link href={'/profile'}>
                                            Profile
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <Link href={`/profile/${UserId}/user-courses`}>
                                            My Courses
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <button onClick={logout}>
                                            Logout
                                        </button>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
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