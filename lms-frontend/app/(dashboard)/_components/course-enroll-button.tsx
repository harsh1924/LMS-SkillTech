'use client'

import { Button } from "@/components/ui/button"
import axios from "axios"
import { IndianRupeeIcon } from "lucide-react"
import { NextResponse } from "next/server"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"

interface CourseEnrollButtonProps {
    price: number,
    courseId: string
}

export const CourseEnrollButton = ({
    price,
    courseId
}: CourseEnrollButtonProps) => {

    const [isLoading, setIsLoading] = useState(false);
    const [userId, setuserId] = useState('');
    const GST = Math.floor((price * 18)/100);
    const finalPrice = price + GST;

    const getId = async () => {
        const res = await axios.get('/api/user/user-details')
        const userId = res.data.user._id;
        setuserId(res.data.user._id)
    }

    const onClick = async () => {
        try {
            setIsLoading(true);
            const res = await axios.post(`/api/course/${courseId}/user/${userId}/checkout`);
            window.location.assign(res.data.url);

        } catch (error: any) {
            toast.error('Something went wrong')
            return NextResponse.json({
                message: 'Error'
            }, { status: 400 });

        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getId()
    }, []);

    return (
        <div className="flex flex-col">
            <div className="">
                <p className="flex justify-between text-lg w-full p-1 text-gray-500">
                    <span>
                        Subtotal
                    </span>
                    <span className="flex items-center">
                        <IndianRupeeIcon size={17} />
                        {price}.00
                    </span>
                </p>
                <p className="flex justify-between text-lg w-full p-1 text-gray-500">
                    <span>
                        GST (18%)
                    </span>
                    <span className="flex items-center">
                        <IndianRupeeIcon size={17} />
                        {GST}.00
                    </span>
                </p>
                <div className="h-[1px] my-5 bg-gray-800 "></div>
                <p className="flex justify-between text-lg w-full p-1 font-semibold">
                    <span>
                        Total
                    </span>
                    <span className="flex items-center">
                        <IndianRupeeIcon size={17} />
                        {finalPrice}.00
                    </span>
                </p>
            </div>
            <div className="flex w-full mt-5">
                <Button onClick={onClick} disabled={isLoading} className="w-full">
                    Enroll for {finalPrice}
                </Button>
            </div>
        </div>
    )
}