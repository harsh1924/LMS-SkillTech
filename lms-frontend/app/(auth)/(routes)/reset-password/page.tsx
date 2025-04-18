'use client'

import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import toast from "react-hot-toast";

const ResetPasswordPage = () => {

    function ResetFunction() {
        const searchParams = useSearchParams();
        const router = useRouter();
        
        const search = searchParams ? searchParams.get('resetToken') : null

        const [user, setUser] = useState({
            password: '',
            confirmPassword: '',
            resetToken: search
        });

        const handleUserInput = (event: { target: { name: any; value: any; }; }) => {
            const { name, value } = event.target;
            setUser({
                ...user,
                [name]: value,
            });
        };

        const handleSubmit = async (e: { preventDefault: () => void; }) => {
            e.preventDefault();
            if (user.password != user.confirmPassword) {
                toast.error('Password does not match');
                return;
            }
            if ((user.password && user.confirmPassword) == '') {
                toast.error('Please Provide Password');
                return;
            }

            try {
                const res = await axios.post('/api/reset-user-password', user);
                if (res) {
                    toast.success('Password Changed');
                    router.push('/')
                }
                else toast.error('Token expired')
            } catch (error: any) {
                toast.error(error.response.data.error);
                toast.error('Something went wrong');
                console.log(error.message);
            }
        }

        return (
            <div>
                <div className="h-screen w-screen flex items-center justify-center">
                    <div className="flex gap-y-6 flex-col items-start shadow-lg rounded-lg p-5 w-[350px] lg:w-[500px]">
                        <h1 className="oxygen-bold text-2xl">
                            Change Your Password
                        </h1>
                        <form className="flex flex-col w-full gap-y-4" onSubmit={handleSubmit}>
                            <div className="flex flex-col gap-y-1">
                                <label htmlFor="password" className="font-semibold">
                                    Password
                                </label>
                                <input onChange={handleUserInput} value={user.password} type="password" name="password" id="password" placeholder="Enter Your Password" className="border outline-none px-5 py-1 w-full rounded-lg" />
                            </div>
                            <div className="flex flex-col gap-y-1">
                                <label htmlFor="confirmPassword" className="font-semibold">
                                    Confirm Password
                                </label>
                                <input onChange={handleUserInput} value={user.confirmPassword} type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm Your Password" className="border outline-none px-5 py-1 w-full rounded-lg" />
                            </div>
                            <button className="rounded-md px-16 py-3 bg-[#0056d2] text-white oxygen-regular hover:bg-[#00419e] transition-all ease-in-out duration-300" type="submit">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }


    return (
        <Suspense>
            <ResetFunction />
        </Suspense>
    );
}

export default ResetPasswordPage;