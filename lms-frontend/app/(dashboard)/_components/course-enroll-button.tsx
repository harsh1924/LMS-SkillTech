'use client'

import axios from "axios"
import { IndianRupeeIcon } from "lucide-react"
import { useRouter } from "next/navigation"
import { NextResponse } from "next/server"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"

interface CourseEnrollButtonProps {
    price: number,
    courseId: string,
    courseName: string,
    courseDescription: string,
    isCourseFree: string
}

export const CourseEnrollButton = ({
    price,
    courseId,
    courseName,
    courseDescription,
    isCourseFree
}: CourseEnrollButtonProps) => {

    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [userId, setuserId] = useState('');
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userRole, setUserRole] = useState('');
    const GST = Math.floor((price * 18) / 100);
    const finalPrice = price + GST;
    const [user, setUser] = useState([]);

    const getId = async () => {
        const res = await axios.get('/api/user/user-details')
        setUser(res.data.user.userProgress)
        setuserId(res.data.user._id)
        setUserName(res.data.user.name)
        setUserEmail(res.data.user.email)
        setUserRole(res.data.user.role)
    }

    const createOrderId = async () => {
        try {
            if (userRole === 'ADMIN') {
                toast.error('Admin cannot purchase courses')
                return;
            }

            const response = await fetch(`/api/${userId}/order/${courseId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    amount: parseFloat(finalPrice.toString()) * 100,
                })
            });

            if (!response.ok) {
                toast.error('Course Already Purchased')
            }

            const data = await response.json();
            return data.orderId;
        } catch (error) {
            console.error('There was a problem with your fetch operation:', error);
        }
    };

    const processPayment = async () => {
        try {
            const orderId: string = await createOrderId();
            const options = {
                key: process.env.RAZORPAY_KEY_ID,
                amount: parseFloat(finalPrice.toString()),
                currency: 'INR',
                name: userName,
                description: userEmail,
                order_id: orderId,
                handler: async function (response: any) {
                    const data = {
                        orderCreationId: orderId,
                        razorpayPaymentId: response.razorpay_payment_id,
                        razorpayOrderId: response.razorpay_order_id,
                        razorpaySignature: response.razorpay_signature,
                    };

                    setIsLoading(true)

                    const result = await fetch(`/api/${userId}/verify/${courseId}`, {
                        method: 'POST',
                        body: JSON.stringify(data),
                        headers: { 'Content-Type': 'application/json' },
                    });
                    const res = await result.json();
                    if (res.isOk) {
                        toast.success("Payment Successfull");
                        router.push(`/learn/${userId}/user-courses`)
                    }
                    else {
                        toast.error("Payment Failed");
                        router.push(`/`)
                    }

                    if (res.isOk && isCourseFree) {
                        router.push(`https://skilltechindia.net/learn/certificate/generate-certificate/${courseId}`)
                    }
                },
                prefill: {
                    name: userName,
                    email: userEmail,
                },
                theme: {
                    color: '#0056d2',
                },
            };

            const paymentObject = new (window as any).Razorpay(options);
            paymentObject.on('payment.failed', function (response: any) {
                alert(response.error.description);
            });
            paymentObject.open();
        } catch (error: any) {
            console.log(error.message);
            return NextResponse.json({
                error: error.message
            })
        }
    };

    useEffect(() => {
        getId()
    }, []);

    return (
        <div>
            {!isLoading ? (
                <div className="flex flex-col">
                    <div>
                        <p className="flex justify-between text-lg w-full p-1 text-gray-500 source-sans-3-regular">
                            <span>
                                Subtotal
                            </span>
                            <span className="flex items-center">
                                <IndianRupeeIcon size={17} />
                                {price}.00
                            </span>
                        </p>
                        <p className="flex justify-between text-lg w-full p-1 text-gray-500 source-sans-3-regular">
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
                    <div className="flex w-full mt-5 justify-center">
                        {isCourseFree ? (
                            <button onClick={processPayment} disabled={isLoading} className=" rounded-md px-16 py-2 bg-[#0056d2] text-white oxygen-regular hover:bg-[#00419e] transition-all ease-in-out duration-300">
                                Pay {finalPrice}
                            </button>
                        ) : (
                            <button onClick={processPayment} disabled={isLoading} className=" rounded-md px-16 py-2 bg-[#0056d2] text-white oxygen-regular hover:bg-[#00419e] transition-all ease-in-out duration-300">
                                Enroll for {finalPrice}
                            </button>
                        )}
                    </div>
                </div>
            ) : (
                <div className="flex justify-center items-center py-10 border-t border-black">
                    <h1 className="oxygen-bold text-xl text-primarycolor">
                        Processing Your Payment...
                    </h1>
                </div>
            )}
        </div>
    )
}