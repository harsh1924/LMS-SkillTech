'use client';

import { Logo } from "@/app/(dashboard)/_components/logo";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

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
            if (response) {
                toast.success('Login Successfull');
            }
            const userId = response.data.user._id;
            router.push(`/profile/${userId}`);
        } catch (error: any) {
            toast.error('User does not exist or details are wrong')
            console.log('Login Failed', error.message);
        }
    } 

    return (
        <form onSubmit={onLogin} className="flex justify-center items-center h-full flex-col gap-10">
            <Link href={'/'}>
                <Logo />
            </Link>
            <div className="w-[400px] border shadow-[0_0_10px_skyblue] px-6 py-4 flex flex-col gap-y-4">
                <div className="flex gap-y-2 flex-col">
                    <h2 className="font-bold text-2xl">
                        Welcome to Skill Tech
                    </h2>
                    <span className="font-semibold text-xl">
                        Login to Your Account
                    </span>
                </div>
                <div className="gap-2 flex flex-col">
                    <label htmlFor="email" className="font-semibold">
                        Email
                    </label>
                    <input onChange={handleUserInput} value={user.email} name="email" type="text" id="email" className="p-2 border rounded-md text-[12px] outline-none" placeholder="Enter Your Email" />
                </div>

                <div className="gap-2 flex flex-col">
                    <label htmlFor="password" className="font-semibold">
                        Password
                    </label>
                    <input onChange={handleUserInput} name="password" value={user.password} type="password" id="password" className="p-2 border rounded-md text-[12px] outline-none" placeholder="Enter Your Password" />
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-center">
                        <button type="submit" className="border px-4 py-2 bg-sky-500 text-white font-serif rounded-md">Log In</button>
                    </div>
                    <div className="text-[13px] text-gray-500">
                        Dont have an account? {" "}
                        <Link href={'/signup'} className="text-sky-500 font-serif">Create New Account</Link>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default LoginPage;