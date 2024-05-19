'use client'

import { Button } from "@/components/ui/button"
import axios from "axios"
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

    const getId = async () => {
        const res = await axios.get('/api/user/user-details')
        const userId = res.data.user._id;
        console.log(userId);
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
        <div className="flex">
            <div className="flex w-full">
                <Button onClick={onClick} disabled={isLoading} className="w-full">
                    Enroll for {price}
                </Button>
            </div>
        </div>
    )
}