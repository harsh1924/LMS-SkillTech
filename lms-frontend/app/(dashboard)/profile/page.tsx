"use client";

import axios from "axios";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import toast from "react-hot-toast";
import { useEffect, useState } from "react";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import '@/app/(dashboard)/dashboard.css'
import { NameForm } from "../(mainuserpage)/admin/courses/[courseId]/_components/(edit-user-details)/name-form";
import { LastNameForm } from "../(mainuserpage)/admin/courses/[courseId]/_components/(edit-user-details)/last-name-form";
import { EmailForm } from "../(mainuserpage)/admin/courses/[courseId]/_components/(edit-user-details)/email-form";
import { PhoneNumberForm } from "../(mainuserpage)/admin/courses/[courseId]/_components/(edit-user-details)/phone-number";
import { AddressForm } from "../(mainuserpage)/admin/courses/[courseId]/_components/(edit-user-details)/address-form";
import { SearchPage } from "../_components/(mainPageComponents)/SeacrhInput";
import { Logo } from "../_components/logo";
import { LogOut, UserCircle2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HoverAllCourses } from "../_components/(mainPageComponents)/all-course-hover";

const userIdPage = () => {

    const router = useRouter();
    const pathname = usePathname();

    const [isLoading, setIsLoading] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [isTrainer, setIsTrainer] = useState(false);
    const [userIdData, setUserIdData] = useState('');

    const isAdminPage = pathname?.startsWith('/admin');
    const isTrainerPage = pathname?.startsWith('/trainer');

    const [User, setUser] = useState({
        name: '',
        email: '',
        lastname: '',
        phoneNumber: NaN,
        Address: ''
    });

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
                <div className="flex h-full flex-col">
                    <div className="py-5 px-6 shadow-md flex justify-between items-center oxygen-bold">
                        <Link href={'/'}>
                            <Logo />
                        </Link>
                        {!isTrainer && !isAdmin && (
                            <HoverAllCourses />
                        )}
                        <div className="hidden md:flex">
                            <SearchPage />
                        </div>
                        <div className="flex gap-x-3 items-center">
                            {!isAdmin && (
                                <div>
                                    <Link href={`/learn/${userIdData}/user-courses`}>
                                        My Courses
                                    </Link>
                                </div>
                            )}
                            {isTrainerPage ? (
                                <Link href={`/profile/`}>
                                    <Button size='sm' variant='ghost'>
                                        <LogOut className="h-4 w-4 mr-2" />
                                        Exit
                                    </Button>
                                </Link>
                            ) : (
                                <div className="px-5">
                                    {isTrainer && (
                                        <div className="flex items-center">
                                            <Link href={'/trainer/courses/all-courses'}>
                                                <span className="oxygen-bold rounded-sm px-5 py-[10px] bg-[#0056d2] text-white oxygen-bold hover:bg-[#00419e] transition-all ease-in-out duration-300">
                                                    Trainer Mode
                                                </span>
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            )}

                            {isAdminPage ? (
                                <Link href={`/profile/`}>
                                    <Button size='sm' variant='ghost'>
                                        <LogOut className="h-4 w-4 mr-2" />
                                        Exit
                                    </Button>
                                </Link>
                            ) : (
                                <div className="px-5">
                                    {isAdmin ? (
                                        <div className="flex items-center gap-x-6">
                                            <Link href={'/admin/courses/create_free_and_paid_courses_edit_courses'}>
                                                <span className="oxygen-bold rounded-sm px-5 py-[10px] bg-[#0056d2] text-white oxygen-bold hover:bg-[#00419e] transition-all ease-in-out duration-300">
                                                    Admin Mode
                                                </span>
                                            </Link>
                                            <DropdownMenu>
                                                <DropdownMenuTrigger>
                                                    <UserCircle2Icon size={33} />
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent>
                                                    <DropdownMenuLabel>
                                                        <span>
                                                            My Account
                                                        </span>
                                                    </DropdownMenuLabel>
                                                    <DropdownMenuSeparator />
                                                    <DropdownMenuItem>
                                                        <Link href={'/profile'}>
                                                            Profile
                                                        </Link>
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem>
                                                        <Link href={`/learn/${userIdData}/user-courses`}>
                                                            My Courses
                                                        </Link>
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem>
                                                        <button onClick={logout}>
                                                            Logout
                                                        </button>
                                                    </DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </div>
                                    ) : (
                                        <DropdownMenu>
                                            <DropdownMenuTrigger>
                                                <UserCircle2Icon size={30} />
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent>
                                                <DropdownMenuLabel>
                                                    <span>
                                                        My Account
                                                    </span>
                                                </DropdownMenuLabel>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuItem>
                                                    <Link href={'/profile'}>
                                                        Profile
                                                    </Link>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <Link href={`/learn/${userIdData}/user-courses`}>
                                                        My Courses
                                                    </Link>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <button onClick={logout}>
                                                        Logout
                                                    </button>
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    )}
                                </div>
                            )}
                        </div>
                        {/* <div>
                            <DropdownMenu>
                                <DropdownMenuTrigger>
                                    <UserCircle2Icon size={30} />
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuLabel>
                                        <span>
                                            My Account
                                        </span>
                                    </DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>
                                        <Link href={'/profile'}>
                                            Profile
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <Link href={`/learn/${userIdData}/user-courses`}>
                                            My Courses
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <button onClick={logout}>
                                            Logout
                                        </button>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div> */}
                    </div>
                    <div className="w-full px-14 py-6  gap-y-4">
                        <p className="flex items-center">
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
                    <div className="flex justify-start items-start flex-wrap px-4">
                        {isAdmin ? (
                            <div className="flex justify-between px-10 mb-6">
                                <Link className="bg-[#0056d2] text-white px-7 py-3 rounded-md hover:bg-[#00419e] transition-all ease-in-out duration-300" href={'/admin/courses/create_free_and_paid_courses_edit_courses'}>
                                    Edit / Create Courses
                                </Link>
                            </div>
                        ) : (
                            <div className="flex justify-between  px-10 mb-6">
                                <Link className="bg-[#0056d2] text-white px-7 py-3 rounded-md hover:bg-[#00419e] transition-all ease-in-out duration-300" href={`/learn/${userIdData}/user-courses`}>
                                    My Courses
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