'use client'

import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";

import '@/app/(dashboard)/dashboard.css'

const ForgotPassword = () => {

    const [isLoading, setIsLoading] = useState(true);

    const [user, setUser] = useState({
        email: '',
    });

    const handleUserInput = (event: { target: { name: string; value: string; }; }) => {
        const { name, value } = event.target;
        setUser({
            ...user,
            [name]: value,
        });
    };

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        try {
            setIsLoading(false);
            const res = await axios.post('/api/forgot-password', user);
            if (res) {
                setIsLoading(true)
                toast.success('Reset Link Sent');
            } else toast.error('Something went wrong')
        } catch (error: any) {
            toast.error(error.response.data.error);
            setIsLoading(true) 
        }
    }

    return (
        <div className="h-screen w-screen flex items-center justify-center">
            <div className="flex gap-y-6 flex-col items-start shadow-lg rounded-lg p-5 w-[350px] lg:w-[500px]">
                <div className="flex flex-col gap-y-2">
                    <h1 className="oxygen-bold text-2xl">
                        Forgot Password?
                    </h1>
                    <p className="text-lg source-sans-3-regular">
                        Don&apos;t worry it happens! Just type your registered email and we will send you the reset password link.
                    </p>
                </div>
                <form className="flex flex-col w-full gap-y-4" onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-y-1">
                        <label htmlFor="email" className="font-semibold">
                            Email
                        </label>
                        <input onChange={handleUserInput} value={user.email} type="email" name="email" id="email" placeholder="youremail@gmail.com" className="border outline-none px-5 py-1 w-full rounded-lg" />
                    </div>
                    {isLoading ? (
                        <button className="rounded-md px-16 py-3 bg-primaryblue text-white oxygen-regular hover:bg-categoryborder transition-all ease-in-out duration-300" type="submit">
                            Submit
                        </button>
                    ) : (
                        <div className="rounded-md px-16 py-3  text-white oxygen-regular bg-categoryborder transition-all ease-in-out duration-300 text-center">
                            Sending Reset Link....
                        </div>
                    )}
                </form>
                <div className="flex items-center justify-center w-full ">
                    <Link href={'/login'} className="text-primaryhoverblue">
                        Back to Login
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;