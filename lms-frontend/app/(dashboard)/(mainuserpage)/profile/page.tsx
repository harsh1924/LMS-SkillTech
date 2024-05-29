"use client";

import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { UserIcon } from "lucide-react";
import { NameForm } from "../admin/courses/[courseId]/_components/(edit-user-details)/name-form";
import { LastNameForm } from "../admin/courses/[courseId]/_components/(edit-user-details)/last-name-form";
import { EmailForm } from "../admin/courses/[courseId]/_components/(edit-user-details)/email-form";
import '@/app/(dashboard)/dashboard.css'
import { PhoneNumberForm } from "../admin/courses/[courseId]/_components/(edit-user-details)/phone-number";

const userIdPage = () => {

    const router = useRouter();
    const [User, setUser] = useState({
        name: '',
        lastname: '',
        email: '',
        phoneNumber: ''
    });
    const [userNameData, setUserNameData] = useState('');
    const [userEmailData, setUserEmailData] = useState('');
    const [userRoleData, setUserRoleData] = useState('');
    const [userIdData, setUserIdData] = useState('');

    const getId = async () => {
        const res = await axios.get('/api/user/user-details')
        const user = res.data.user;
        setUser(user);
        const userName = res.data.user.name;
        const userEmail = res.data.user.email;
        const userRole = res.data.user.role;
        const userId = res.data.user._id;

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
        <div className="flex gap-y-5 h-full flex-col px-10">
            <div className="py-10 w-full px-14 grid border mt-10 flex-col h-full gap-y-4 shadow-md">
                <p className="flex items-center gap-x-6">
                    {/* <UserIcon size={30} /> */}
                    <span className="text-2xl oxygen-bold">
                        My Profile
                    </span>
                </p>
                <div className="grid grid-cols-2 gap-x-10 w-full source-sans-3-regular">
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
                </div>
            </div>
            <div className="flex justify-between w-full px-10">
                <Link className="bg-[#2B463C] text-white px-7 py-3 rounded-md hover:bg-[#3f6457] transition-all ease-in-out duration-300" href={`/profile/${userIdData}/user-courses`}>
                    Your Courses
                </Link>
            </div>
        </div>
    );
}

export default userIdPage;