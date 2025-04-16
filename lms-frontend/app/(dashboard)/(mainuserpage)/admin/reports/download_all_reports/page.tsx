'use client'

import { Download } from "lucide-react";
import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { downloadExcel } from '@/app/helpers/downloadReport/reportFunction';

const DownloadReportsPage = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [paymentReportdata, setPaymentReportData] = useState([]);
    const [enrolledUsersReportData, setEnrolledUsersReportData] = useState([]);
    const [allUsersReportData, setAllUsersReportData] = useState([]);
    const [allTrainersData, setAllTrainersData] = useState([]);

    const getPayments = async () => {
        const res = await axios.get('/api/get-all-payment-details');
        const data = res.data.payments;
        setPaymentReportData(data);
        getEnrolledusers();
        setIsLoading(false);
    }
    const getEnrolledusers = async () => {
        const res = await axios.get('/api/get-enrolled-users');
        const data = res.data.enrolledUsers;
        setEnrolledUsersReportData(data);
        getAllUsers();
    }
    const getAllUsers = async () => {
        const res = await axios.get('/api/get-all-users');
        const data = res.data.allUsers;
        setAllUsersReportData(data);
        getAllTrainers();
    }
    const getAllTrainers = async () => {
        const res = await axios.get('/api/get-trainer-details');
        const data = res.data.allUsers;
        setAllTrainersData(data);
    }


    const handleDownload = () => {
        downloadExcel(paymentReportdata, 'Payment-Report.xlsx');
    };
    const handleDownloadOne = () => {
        downloadExcel(enrolledUsersReportData, 'Enrolled-Users-Report.xlsx');
    };
    const handleDownloadTwo = () => {
        downloadExcel(allUsersReportData, 'All-Users-Report.xlsx');
    };
    const handleDownloadThree = () => {
        downloadExcel(allTrainersData, 'All-Trainer-Report.xlsx');
    }

    useEffect(() => {
        getPayments()
    }, []);


    return (
        <div>
            {isLoading ? (
                <div className="flex h-[900px] items-center justify-center">
                    <div className="animate-spin rounded-full border-4 border-gray-300 border-t-gray-900 h-12 w-12 dark:border-gray-600 dark:border-t-gray-50" />
                </div>
            ) : (
                <div className="px-3 py-2 lg:px-10 lg:py-8 text-center">
                    <div className="flex flex-col gap-y-3">
                        <h1 className="oxygen-bold lg:text-3xl">
                            Admin Reports Dashboard
                        </h1>
                        <p className="source-sans-regular text-xl ">
                            This page allows you to access and manage all available reports, including user activity, payment reports, and enrolled users.
                        </p>
                        <p className="source-sans-regular text-xl ">
                            Here is a list of all available reports.
                        </p>
                    </div>
                    <div className="mt-6 border rounded-sm">
                        <div className="grid grid-cols-2 py-3 oxygen-bold text-lg">
                            <span>
                                Report Name
                            </span>
                            <span>
                                Download Report
                            </span>
                        </div>
                        <div className="grid grid-cols-2 w-full bg-gray-50 py-3">
                            <span>
                                All Users Reports
                            </span>
                            <span onClick={handleDownloadTwo} className="flex justify-center cursor-pointer">
                                <Download className="hover:text-primarycolor" />
                            </span>
                        </div>
                        <div className="grid grid-cols-2 w-full py-3">
                            <span>
                                Enrolled Students Reports
                            </span>
                            <span onClick={handleDownloadOne} className="flex justify-center cursor-pointer">
                                <Download className="hover:text-primarycolor" />
                            </span>
                        </div>
                        <div className="grid grid-cols-2 w-full bg-gray-50 py-3">
                            <span>
                                Payment Reports
                            </span>
                            <span onClick={handleDownload} className="flex justify-center cursor-pointer">
                                <Download className="hover:text-primarycolor" />
                            </span>
                        </div>
                        <div className="grid grid-cols-2 w-full bg-gray-50 py-3">
                            <span>
                                Trainer Reports
                            </span>
                            <span onClick={handleDownloadThree} className="flex justify-center cursor-pointer">
                                <Download className="hover:text-primarycolor" />
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default DownloadReportsPage;