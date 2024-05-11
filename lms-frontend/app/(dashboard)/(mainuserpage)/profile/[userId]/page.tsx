'use client';

import userModel from "@/app/server/models/userModel";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const User = ({
    params
}: {
    params: { userId: string }
}) => {

    const [userNameData, setUserNameData] = useState([]);
    const [userEmailData, setUserEmailData] = useState([]);
    const [userRoleData, setUserRoleData] = useState([]);


    const userDetails = async () => {
        try {
            const userId = params.userId;
            const response = await axios.get(`/api/user/${userId}/profile`);
            const user = response.data.user;
            console.log(user);

            //setting name data
            const newUserNameData = user.name;
            setUserNameData(newUserNameData);
            // setting email data
            const newUserEmailData = user.email;
            setUserEmailData(newUserEmailData)
            // setting role data
            const newUserRoleData = user.role;
            setUserRoleData(newUserRoleData)
        } catch (error: any) {
            toast.error('Something went wrong')
        }
    }

    useEffect(() => {
        userDetails()
    }, []);

    return (
        <div className="flex h-100vh items-center justify-center py-10">
            <div className="py-10 w-[500px] px-14 grid border-black shadow-[0_0_10px_black] border  flex-col h-full justify-center">
                <p className="flex items-center justify-center gap-x-14">
                    <h1 className="text-3xl font-bold font-sans pb-8">{userNameData}</h1>
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
                </p>
            </div>
        </div>
    );
}

export default User;