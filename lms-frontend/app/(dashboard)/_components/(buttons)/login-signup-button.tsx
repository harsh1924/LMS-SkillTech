'use client'

import axios from "axios"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import jwt from 'jsonwebtoken'

export const LoginButtons = () => {
    const router = useRouter();
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    const getToken = async () => {
        const res = await axios.get('/api/getToken')
        console.log('at user:', res.data.token);
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
                    <div className="flex gap-x-5">
                        <Link href={'/login/admin'}>
                            <button className="border rounded-md px-4 py-2 md:text-[19px] bg-sky-500 text-white font-serif hover:bg-sky-600 transition-all ease-in-out duration-300">
                                Admin Login
                            </button>
                        </Link>
                        <Link href={'/login'}>
                            <button className="border border-sky-500 rounded-md px-4 py-2 md:text-[19px] text-sky-500 font-serif hover:bg-sky-500 hover:text-white transition-all ease-in-out duration-300">
                                Student Login
                            </button>
                        </Link>
                    </div>
                )}
                {!isLoggedIn && (
                    <div className="flex gap-x-5">
                        <Link href={'/profile'}>
                            <button className="bg-sky-500 text-white px-7 py-3 rounded-md hover:bg-sky-600 transition-all ease-in-out duration-300">
                                Profile
                            </button>
                        </Link>
                        <button className="bg-sky-500 text-white px-7 py-3 rounded-md hover:bg-sky-600 transition-all ease-in-out duration-300" onClick={logout}>
                            Logout
                        </button>
                    </div>
                )}
            </div >
        </div>
    )
}