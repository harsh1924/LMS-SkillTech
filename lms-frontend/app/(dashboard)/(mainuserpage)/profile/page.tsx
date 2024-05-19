"use client";

import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

const userIdPage = () => {

    const router = useRouter();
    const [userNameData, setUserNameData] = useState('');
    const [userEmailData, setUserEmailData] = useState('');
    const [userRoleData, setUserRoleData] = useState('');
    const [userIdData, setUserIdData] = useState('');

    const getId = async () => {
        const res = await axios.get('/api/user/user-details')

        const userName = res.data.user.name;
        const userEmail = res.data.user.email;
        const userRole = res.data.user.role;
        const userId = res.data.user._id;
        console.log(userId);

        setUserNameData(userName);
        setUserEmailData(userEmail);
        setUserRoleData(userRole);
        setUserIdData(userId);
    }

    const logout = async () => {
        try {
            await axios.get('/api/user/logout')
            router.push('/');
            toast.success('Logout Successfull');
        } catch (error: any) {
            console.log(error.message);
            toast.error(error.message)
        }
    }

    useEffect(() => {
        getId()
    }, []);

    return (
        <div className="flex gap-y-5 items-center justify-center h-full flex-col">
            <div className="py-10 w-[500px] px-14 grid border-black shadow-[0_0_10px_black] border mt-20 flex-col h-full justify-center">
                <p className="flex items-center justify-center gap-x-14">
                    <span className="text-3xl font-bold font-sans pb-8">{userNameData}</span>
                </p>
                <p className="grid grid-cols-2 gap-x-14">
                    <span className="font-semibold text-[19px]">Email:</span>
                    <span className="font-semibold text-gray-500">{userEmailData}</span>
                </p>
                <p className="grid grid-cols-2 gap-x-14">
                    <span className="font-semibold text-[19px]">Role:</span>
                    <span className="font-semibold text-gray-500">
                        {userRoleData}
                    </span>
                    {/* {data} */}
                </p>
            </div>
            <button className="bg-sky-500 text-white px-7 py-3 rounded-md hover:bg-sky-600 transition-all ease-in-out duration-300" onClick={logout}>
                Logout
            </button>
            <Link className="bg-sky-500 text-white px-7 py-3 rounded-md hover:bg-sky-600 transition-all ease-in-out duration-300" href={`/profile/${userIdData}/user-courses`}>
                Your Courses
            </Link>
        </div>
    );
}

export default userIdPage;