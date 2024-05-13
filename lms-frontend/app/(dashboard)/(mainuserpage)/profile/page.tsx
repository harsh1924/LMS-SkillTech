"use client";

import connectToDB from "@/app/server/dbconfig/dbconfig";
import axios from "axios";
import { GetServerSideProps } from "next";
import { NextRequest } from "next/server";
import User from "./[userId]/page";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

// connectToDB();

const userIdPage = async () => {

    const router = useRouter();
    
    const logout = async () => {
        try {
            await axios.get('/api/user/logout')
            router.push('/login');
            toast.success('Logout Successfull');
        } catch (error: any) {
            console.log(error.message);
            toast.error(error.message)
        }
    }

    return (
        <div className="flex items-center justify-center h-[200px]">
            {/* <User params={params.userId} /> */}
            {/* {params.userId} */}
            <button className="bg-sky-500 text-white px-7 py-3 rounded-md hover:bg-sky-600 transition-all ease-in-out duration-300" onClick={logout}>
                Logout
            </button>
        </div>
    );
}

export default userIdPage;