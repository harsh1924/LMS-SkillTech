'use client'

import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
} from "chart.js";
import { Pie, Bar } from "react-chartjs-2";
import { User2Icon } from "lucide-react";
ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement,
    Title
);

interface AnalyticsData {
    allUsers: number,
    subscribedusers: number
}

export const AdminAnalytics = ({
    allUsers,
    subscribedusers
}: AnalyticsData) => {

    const userData = {
        labels: ["Registered User", "Enrolled User"],
        datasets: [
            {
                label: "User Details",
                data: [allUsers, subscribedusers],
                backgroundColor: ["#EA5F89", "#F7B7A3"],
                borderWidth: 2,
            },
        ],
    };


    return (
        <div className="flex flex-col lg:flex-row lg:justify-between lg:px-10 lg:py-6">
            <div className="flex items-center justify-center lg:w-1/2
            ">
                <div className="w-80 h-80">
                    <Pie data={userData} />
                </div>
            </div>
            <div className="flex flex-col px-8 lg:w-1/2 lg:gap-y-6 lg:justify-center">

                {/* card for enrolled users */}
                <div className="flex items-center justify-between py-5 px-5 gap-5 rounded-md shadow-md">
                    <div className="flex flex-col items-center">
                        <p className="font-semibold">Enrolled Users</p>
                        <h3 className="text-4xl font-bold ">{subscribedusers}</h3>
                    </div>
                    <User2Icon className="text-[#F7B7A3] text-5xl" />
                </div>

                {/* card for registered users */}
                <div className="flex items-center justify-between py-5 px-5 gap-5 rounded-md shadow-md">
                    <div className="flex flex-col items-center">
                        <p className="font-semibold">Registered Users</p>
                        <h3 className="text-4xl font-bold">{allUsers}</h3>
                    </div>
                    <User2Icon className="text-[#EA5F89] text-5xl" />
                </div>
            </div>
        </div>
    )
}
