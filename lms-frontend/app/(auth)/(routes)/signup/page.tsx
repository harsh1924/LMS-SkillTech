"use client"

import { Logo } from "@/app/(dashboard)/_components/logo";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { NextResponse } from "next/server";
import { useState } from "react";
import toast from "react-hot-toast";

export default function SignInPage() {

    const router = useRouter();
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
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
            // API REQUEST
            const response = await axios.post('/api/user/signup', user);
            router.push('/login');

        } catch (error: any) {
            console.log('Signup failed', error.message);
            if (!user.name || !user.email || !user.password) {
                toast.error('All fields are required')
            }
            return NextResponse.json({ error: error.message },
                { status: 400 })
        }
    }


    return (
        <form onSubmit={onSignup} className="flex justify-center items-center h-full flex-col gap-10">
            <Link href={'/'}>
                <Logo />
            </Link>
            <div className="w-[400px] border shadow-[0_0_10px_skyblue] px-6 py-4 flex flex-col gap-y-4">
                <h2 className="font-semibold text-xl">
                    Create Your Account
                </h2>
                <span className="text-md text-gray-600">
                    Unlock exclusive perks - Sign up now for early access and special offers!
                </span>
                <div className="gap-2 flex flex-col">
                    <label htmlFor="name" className="font-semibold">
                        Name
                    </label>
                    <input onChange={handleUserInput} value={user.name} name="name" type="text" id="name" className="p-2 border rounded-md text-[12px] outline-none" placeholder="Enter Your Name" />
                    <span>
                    </span>
                </div>
                <div className="gap-2 flex flex-col">
                    <label htmlFor="email" className="font-semibold">
                        Email
                    </label>
                    <input onChange={handleUserInput} value={user.email} name="email" type="email" id="email" className="p-2 border rounded-md text-[12px] outline-none" placeholder="Enter Your Email" />
                </div>
                <div className="gap-2 flex flex-col">
                    <label htmlFor="password" className="font-semibold">
                        Password
                    </label>
                    <input onChange={handleUserInput} value={user.password} name="password" type="password" id="password" className="p-2 border rounded-md text-[12px] outline-none" placeholder="Enter Your Password" />
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-center">
                        <button type="submit" className="border px-4 py-2 bg-sky-500 text-white font-serif rounded-md">Create Account</button>
                    </div>
                    <div className="text-[13px] text-gray-500">
                        Already have an account? {" "}
                        <Link href={'/login'} className="text-sky-500 font-serif">Log In</Link>
                    </div>
                </div>
            </div>
        </form>
    );
}