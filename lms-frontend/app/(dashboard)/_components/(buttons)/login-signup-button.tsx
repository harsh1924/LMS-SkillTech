'use client'

import axios from "axios"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { UserCircle2Icon } from "lucide-react"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export const LoginButtons = () => {
    const router = useRouter();
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [userIdData, setUserIdData] = useState('');
    const [userRole, setUserRole] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);

    const getToken = async () => {
        try {
            const res = await axios.get('/api/getToken')
            const token = res.data.token;

            if (token !== '\"\"') {
                setIsLoggedIn(false);
                getId()
            }

        } catch (error: any) {
            return;
        }
    }

    const logout = async () => {
        try {
            await axios.get('/api/user/logout')
            router.push('/');
            toast.success('Logout Successfull');
            setIsLoggedIn(true);
        } catch (error: any) {
            console.log(error.message);
            toast.error(error.message)
        }
    }

    const getId = async () => {
        const res = await axios.get('/api/user/user-details')
        const userId = res.data.user._id;
        setUserIdData(userId);
        setUserRole(res.data.user.role);
        if (userRole === 'ADMIN') {
            setIsAdmin(true)
        }
    }

    useEffect(() => {
        getToken()
    }, []);

    return (
        <div>
            <div className="flex gap-x-5">
                {isLoggedIn && (
                    <div className="hidden lg:flex gap-x-3 text-[0.8rem]">
                        <Link href={'/login'}>
                            <span className="rounded-sm px-5 py-[10px] bg-[#0056d2] text-white oxygen-bold hover:bg-[#00419e] transition-all ease-in-out duration-300">
                                Login/Register
                            </span>
                        </Link>
                    </div>
                )}
                <div className="flex lg:hidden">
                    {isLoggedIn && (
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <UserCircle2Icon size={30} />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuLabel>
                                    <span>
                                        Login to your account
                                    </span>
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                    <Link href={'/login'}>
                                        Login
                                    </Link>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    )}
                </div>
                <div className="flex pr-7">
                    {!isLoggedIn && (
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
                                    <Link href={`/learn/${userIdData}/user-courses`}>
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
                    )}
                </div>
            </div >
        </div>
    )
}