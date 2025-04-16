"use client"

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { NextResponse } from "next/server";
import { useState } from "react";
import toast from "react-hot-toast";

import { Logo } from "@/app/(dashboard)/_components/logo";

import '@/app/(dashboard)/dashboard.css'

export default function SignInPage() {

    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        phoneNumber: NaN
    });

    const handleUserInput = (event: { target: { name: any; value: any; }; }) => {
        const { name, value } = event.target;
        setUser({
            ...user,
            [name]: value,
        });
    };

    const onSignup = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        try {
            setIsLoading(false)
            const response = await axios.post('/api/user/signup', user);

            if (response) {
                toast.success('Account Created Successfully')
                setIsLoading(true)
                router.push('/login');
            }
        } catch (error: any) {
            setIsLoading(true)
            toast.error(error.response.data.error);
            return NextResponse.json({ error: error.message },
                { status: 400 })
        }
    }

    return (
        <form onSubmit={onSignup} className="flex mb-10 items-center h-full flex-col gap-10">
            <Link href={'/'} className="py-6 shadow-md w-full flex items-center justify-center">
                <Logo />
            </Link>
            <div className="w-[400px] border shadow-lg lg:shadow-[0_0_10px_#347dfb] px-6 py-4 flex flex-col gap-y-4">
                <h2 className="oxygen-semibold text-xl">
                    Create Your Account
                </h2>
                <div className="gap-2 flex flex-col">
                    <label htmlFor="name" className="oxygen-semibold">
                        Name
                    </label>
                    <input onChange={handleUserInput} value={user.name} name="name" type="text" id="name" className="p-2 source-sans-3-regular border rounded-md text-[12px] outline-none" placeholder="Enter Your Name" />
                    <span>
                    </span>
                </div>
                <div className="gap-2 flex flex-col">
                    <label htmlFor="email" className="oxygen-semibold">
                        Email
                    </label>
                    <input onChange={handleUserInput} value={user.email} name="email" type="email" id="email" className="p-2 source-sans-3-regular border rounded-md text-[12px] outline-none" placeholder="Enter Your Email" />
                </div>
                <div className="gap-2 flex flex-col">
                    <label htmlFor="phoneNumber" className="oxygen-semibold">
                        Phone Number
                    </label>
                    <div className="flex items-center border gap-x-3 rounded-md p-2">
                        <span className="text-sm oxygen-regular">
                            +91 |
                        </span>
                        <input onChange={handleUserInput} value={user.phoneNumber} name="phoneNumber" type="number" id="phoneNumber" className="rounded-md source-sans-3-regular text-[12px] outline-none" placeholder="Enter Your Phone Number" />
                    </div>
                </div>
                <div className="gap-2 flex flex-col">
                    <label htmlFor="password" className="oxygen-semibold">
                        Password
                    </label>
                    <input onChange={handleUserInput} value={user.password} name="password" type="password" id="password" className="p-2 source-sans-3-regular border rounded-md text-[12px] outline-none" placeholder="Enter Your Password" />
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-center">
                        {isLoading ? (
                            <button className="rounded-md px-4 py-2 bg-primaryblue text-white oxygen-regular hover:bg-categoryborder transition-all ease-in-out duration-300" type="submit">
                                Create Account
                            </button>
                        ) : (
                            <div className="rounded-md px-16 py-3  text-white oxygen-regular bg-categoryborder transition-all ease-in-out duration-300 text-center">
                                Processing....
                            </div>
                        )}
                    </div>
                    <div className="source-sans-3-regular text-[15px] text-gray-500">
                        Already have an account? {" "}
                        <Link href={'/login'} className="text-cardcheckblue">
                            Log In
                        </Link>
                    </div>
                </div>
            </div>
        </form>
    );
}