'use client'

import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";

const ForgotPassword = () => {

    const [email, setEmail] = useState('');

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/forgot-password', email);
            if (res) {
                toast.success('Done')
            }
        } catch (error: any) {
            toast.error(error.message)
        }
    }

    return (
        <div className="h-screen w-screen flex items-center justify-center">
            <div className="flex gap-y-6 flex-col items-start shadow-lg rounded-lg p-5 w-[500px]">
                <h1 className="oxygen-bold text-2xl">
                    Forgot Password?
                </h1>
                <p className="text-lg">
                    Don't worry it happens! Just type your registered email and we will send you the reset password link.
                </p>
                <form className="flex flex-col w-full gap-y-4" onSubmit={handleSubmit}>
                    <label htmlFor="email" className="font-semibold">
                        Email
                    </label>
                    <input onChange={(e) => setEmail(e.target.value)} value={email} type="text" name="email" id="email" placeholder="youremail@gmail.com" className="border outline-none px-5 py-1 w-full rounded-lg" />
                    <button className="border py-3 rounded-lg" type="submit">
                        Submit
                    </button>
                </form>
                <Link href={'/login'}>
                    Back to Login
                </Link>
                {email}
            </div>
        </div>
    );
}

export default ForgotPassword;