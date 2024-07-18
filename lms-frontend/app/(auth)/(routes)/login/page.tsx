'use client';

import { Logo } from "@/app/(dashboard)/_components/logo";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

import '@/app/(dashboard)/dashboard.css'

const LoginPage = () => {

    const [isLoading, setIsLoading] = useState(true);

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
        if (user.email === '' || user.password === '') {
            toast.error('Please fill all the details');
            return;
        }
        try {
            setIsLoading(false);
            const response = await axios.post('/api/user/login', user);

            if (response) {
                toast.success('Login Successfull');
                router.push('/profile')
                setIsLoading(true)
            } else toast.error('User does not exist or details are wrong')
        } catch (error: any) {
            setIsLoading(true)
            console.log('Login Failed', error.message);
        }
    }

    return (
        <div className="flex h-screen items-center justify-center lg:justify-start">
            <div className="hidden lg:flex w-[70%] h-[100vh] bg-gray-50">
                <img src="https://accounts.pwskills.com/images/signin-banner.svg" className="w-[100%] h-[100%]" />
            </div>
            <form onSubmit={onLogin} className="flex w-[350px] lg:w-1/2 justify-center items-center h-full flex-col gap-10">
                <div className="w-[400px] border shadow-lg lg:shadow-[0_0_10px_#347dfb] px-6 py-4 flex flex-col gap-y-4">
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
                        {isLoading ? (
                        <button className="rounded-md px-4 py-2 bg-[#0056d2] text-white oxygen-regular hover:bg-[#00419e] transition-all ease-in-out duration-300" type="submit">
                            Log In
                        </button>
                    ) : (
                        <div className="rounded-md px-16 py-3  text-white oxygen-regular bg-[#00419e] transition-all ease-in-out duration-300 text-center">
                            Processing....
                        </div>
                    )}
                        </div>
                        <div className="text-[13px] text-center text-gray-500">
                            Dont have an account? {" "}
                            <Link href={'/signup'} className="text-[#347dfb] oxygen-regular">Create New Account</Link>
                        </div>
                        <Link href={`/forgot-password`} className="text-[13px] oxygen-regular text-[#347dfb] text-center">
                            Forgot Password?
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default LoginPage;