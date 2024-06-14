'use client'

import axios from "axios"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { UserCircle2Icon } from "lucide-react"


export const LoginButtons = () => {
    const router = useRouter();
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    const getToken = async () => {
        const res = await axios.get('/api/getToken')
        const token = res.data.token;
        if (token !== '') {
            setIsLoggedIn(false)
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

    useEffect(() => {
        getToken()
    }, []);

    return (
        <div>
            <div className="flex gap-x-5">
                {isLoggedIn && (
                    <div className="hidden lg:flex gap-x-3 text-[0.8rem]">
                        {/* <Link href={'/login/admin'} className="hidden">
                            <span className="border border-[#2B463C] rounded-md px-4 py-2 bg-[#2B463C] text-white font-serif hover:bg-[#3f6457] transition-all ease-in-out duration-300">
                                Admin Login
                            </span>
                        </Link> */}
                        {/* <Link href={'/login/trainer'} className="hidden">
                            <span className="border border-[#2B463C] rounded-md px-4 py-2 bg-[#2B463C] text-white font-serif hover:bg-[#3f6457] transition-all ease-in-out duration-300">
                                Trainer Login
                            </span>
                        </Link> */}
                        <Link href={'/login'}>
                            <span className="rounded-md px-5 py-2 bg-[#0056d2] text-white font-serif hover:bg-[#00419e] transition-all ease-in-out duration-300">
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
                                    <Link href={'/login/admin'} className="hidden">
                                        Admin Login
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Link href={'/login'}>
                                        Login
                                    </Link>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    )}
                </div>
                {/* {!isLoggedIn && (
                    <div className="lg:flex items-center gap-x-5 hidden">
                        <Link href={'/profile'}>
                            <span className="bg-[#2B463C] text-white px-7 py-3 rounded-md hover:bg-[#3f6457] transition-all ease-in-out duration-300">
                                Profile
                            </span>
                        </Link>
                        <div>
                            <span className="bg-[#2B463C] cursor-pointer text-white px-7 py-3 rounded-md hover:bg-[#3f6457] transition-all ease-in-out duration-300" onClick={logout}>
                                Logout
                            </span>
                        </div>
                    </div>
                )} */}
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