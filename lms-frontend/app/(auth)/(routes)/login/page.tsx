'use client';

import { Logo } from "@/app/(dashboard)/_components/logo";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

import '@/app/(dashboard)/dashboard.css'

const LoginPage = () => {

    const router = useRouter();
    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const handleUserInput = (event: { target: { name: any; value: any; }; }) => {
        const { name, value } = event.target;
        setUser({
            ...user,
            [name]: value,
        });
    };

    const onLogin = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/user/login', user);
            console.log(response);
            
            if (response) {
                toast.success('Login Successfull');
            }
            router.push(`/`);
        } catch (error: any) {
            toast.error('User does not exist or details are wrong')
            console.log('Login Failed', error.message);
        }
    }

    return (
        <div className="flex items-center">
            <div className="w-[70%] h-[100vh] bg-gray-50">
                <img src="https://accounts.pwskills.com/images/signin-banner.svg" className="w-[100%] h-[100%]" />
            </div>
            <form onSubmit={onLogin} className="flex w-1/2 justify-center items-center h-full flex-col gap-10">
                <div className="w-[400px] border shadow-[0_0_10px_#347dfb] px-6 py-4 flex flex-col gap-y-4">
                    <div className="flex justify-center">
                        <Link href={'/'}>
                            <Logo />
                        </Link>
                    </div>
                    <div className="flex gap-y-2 flex-col text-center">
                        <h2 className="text-xl oxygen-bold">
                            Welcome to Skill Tech
                        </h2>
                        <span className="font-semibold text-lg oxygen-semibold">
                            Login to Your Account
                        </span>
                    </div>
                    <div className="gap-2 flex flex-col text-sm">
                        <label htmlFor="email" className="font-semibold">
                            Email
                        </label>
                        <input onChange={handleUserInput} value={user.email} name="email" type="text" id="email" className="p-2 border rounded-md text-[12px] outline-none" placeholder="Enter Your Email" />
                    </div>

                    <div className="gap-2 flex flex-col text-sm">
                        <label htmlFor="password" className="font-semibold">
                            Password
                        </label>
                        <input onChange={handleUserInput} name="password" value={user.password} type="password" id="password" className="p-2 border rounded-md text-[12px] outline-none" placeholder="Enter Your Password" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center justify-center">
                            <button type="submit" className="border px-4 py-2 bg-[#0056d2] hover:bg-[#00419e] transition-all ease-in-out duration-300 text-white font-serif rounded-md text-sm">Log In</button>
                        </div>
                        <div className="text-[13px] text-center text-gray-500">
                            Dont have an account? {" "}
                            <Link href={'/signup'} className="text-[#347dfb] font-serif">Create New Account</Link>
                        </div>
                        <div className="text-[13px] font-serif text-[#347dfb] text-center">
                            Forgot Password?
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default LoginPage;