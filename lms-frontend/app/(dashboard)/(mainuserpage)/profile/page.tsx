"use client";

import axios from "axios";

import Link from "next/link";
import { useRouter } from "next/navigation";

import toast from "react-hot-toast";
import { useEffect, useState } from "react";

import { NameForm } from "../admin/courses/[courseId]/_components/(edit-user-details)/name-form";
import { LastNameForm } from "../admin/courses/[courseId]/_components/(edit-user-details)/last-name-form";
import { EmailForm } from "../admin/courses/[courseId]/_components/(edit-user-details)/email-form";
import { PhoneNumberForm } from "../admin/courses/[courseId]/_components/(edit-user-details)/phone-number";

import '@/app/(dashboard)/dashboard.css'
import { AddressForm } from "../admin/courses/[courseId]/_components/(edit-user-details)/address-form";

const userIdPage = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [isTrainer, setIsTrainer] = useState(false);

    const router = useRouter();
    const [User, setUser] = useState({
        name: '',
        email: '',
        lastname: '',
        phoneNumber: NaN,
        Address: ''
    });
    const [userIdData, setUserIdData] = useState('');

    const getId = async () => {
        const res = await axios.get('/api/user/user-details')
        const userData = res.data.user;
        setUser({
            ...User,
            name: userData.name,
            email: userData.email,
            lastname: userData.lastname,
            phoneNumber: userData.phoneNumber,
            Address: userData.Address
        });
        const userId = res.data.user._id;
        setUserIdData(userId);
        setIsLoading(true);
        if (res.data.user.role === 'ADMIN') {
            setIsAdmin(true);
        }
        if (res.data.user.role === 'TRAINER') {
            setIsTrainer(true)
        }
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
        <>
            {isLoading ? (
                <div className="flex gap-y-5 h-full flex-col px-10">
                    <div className="py-10 w-full px-14 grid border mt-10 flex-col h-full gap-y-4 shadow-md">
                        <p className="flex items-center gap-x-6">
                            {/* <UserIcon size={30} /> */}
                            <span className="text-2xl oxygen-bold">
                                My Profile
                            </span>
                        </p>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 w-full source-sans-3-regular">
                            <NameForm
                                initialData={User}
                                userId={userIdData} />
                            <LastNameForm
                                initialData={User}
                                userId={userIdData} />
                            <EmailForm
                                initialData={User}
                                userId={userIdData} />
                            <PhoneNumberForm
                                initialData={User}
                                userId={userIdData} />
                            <AddressForm
                                initialData={User}
                                userId={userIdData} />
                        </div>
                    </div>
                    <div className="flex justify-start items-start flex-wrap">
                        {isAdmin ? (
                            <div className="flex justify-between px-10 mb-6">
                                <Link className="bg-[#0056d2] text-white px-7 py-3 rounded-md hover:bg-[#00419e] transition-all ease-in-out duration-300" href={'/admin/courses/create_free_and_paid_courses_edit_courses'}>
                                    Edit / Create Courses
                                </Link>
                            </div>
                        ) : (
                            <div className="flex justify-between  px-10 mb-6">
                                <Link className="bg-[#0056d2] text-white px-7 py-3 rounded-md hover:bg-[#00419e] transition-all ease-in-out duration-300" href={`/learn/${userIdData}/user-courses`}>
                                    Your Courses
                                </Link>
                            </div>
                        )}
                        {isTrainer && (
                            <div className="flex justify-between px-10 mb-6">
                                <Link className="bg-[#0056d2] text-white px-7 py-3 rounded-md hover:bg-[#00419e] transition-all ease-in-out duration-300" href={`/trainer/courses`}>
                                    Edit / Create Courses
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            ) : (
                <div className="flex h-screen w-screen items-center justify-center">
                    <div className="animate-spin rounded-full border-4 border-gray-300 border-t-gray-900 h-12 w-12 dark:border-gray-600 dark:border-t-gray-50" />
                </div>
            )}
        </>
    );
}

export default userIdPage;