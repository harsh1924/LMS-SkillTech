'use client';

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

import { Logo } from "@/app/(dashboard)/_components/logo";

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
            const response = await axios.post('/api/user/login/admin', user);
            if (response) {
                toast.success('Login Successfull');
                setIsLoading(true);
                router.push(`/admin/courses/create_free_and_paid_courses_edit_courses`);
            }
        } catch (error: any) {
            if (!user.email || !user.password) {
                toast.error('All fields are required')
            }
            setIsLoading(true)
            toast.error(error.response.data.error);
            console.log('Login Failed', error.message);
        }
    }

    return (
        <form onSubmit={onLogin} className="flex justify-center items-center h-full flex-col gap-10">
            <Link href={'/'}>
                <Logo />
            </Link>
            <div className="w-[400px] border shadow-lg lg:shadow-[0_0_10px_#347dfb] px-6 py-4 flex flex-col gap-y-4">
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
                        {isLoading ? (
                            <button className="rounded-md px-4 py-2 bg-primaryblue text-white oxygen-regular hover:bg-categoryborder transition-all ease-in-out duration-300" type="submit">
                                Admin Log In
                            </button>
                        ) : (
                            <div className="rounded-md px-16 py-3  text-white oxygen-regular bg-categoryborder transition-all ease-in-out duration-300 text-center">
                                Processing....
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </form>
    );
}

export default LoginPage;