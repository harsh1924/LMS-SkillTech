'use client';

import AdminAllCourseCard from "@/app/(dashboard)/_components/(admin-analytics)/admin-allCourses-card";
import axios from "axios";
import { NextResponse } from "next/server";
import { useEffect, useState } from "react";

const GetAdminAllCourses = () => {

    const [course, setCourse] = useState([]);
    const getAllCourses = async () => {
        try {
            const response = await axios.get('/api/course/getAllCourses');
            const courseData = response.data.courses;

            setCourse(
                courseData
            )

        } catch (error: any) {
            return NextResponse.json({ error: error.message }, { status: 400 });
        }
    };

    useEffect(() => {
        getAllCourses()
    }, []);

    

    return (
        <div>
            <div className="grid md:grid-cols-2 gap-x-3 px-3 lg:grid-cols-3">
                {course.map((e: { title: string; description: string; imageUrl: string; _id: string; category: string; createdBy: string; price: number; isPublished: boolean }) => 
                <AdminAllCourseCard
                    key={e._id} id={e._id} imageUrl={e?.imageUrl}
                    title={e.title} description={e.description} category={e.category} createdBy={e.createdBy}
                    price={e.price} isPublished={e.isPublished} />)}
            </div>
        </div>
    );
}

export default GetAdminAllCourses;