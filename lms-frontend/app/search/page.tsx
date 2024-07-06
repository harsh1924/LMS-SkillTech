'use client'

import axios from "axios";
import { useSearchParams } from "next/navigation";
import useSWR from 'swr'
import toast from "react-hot-toast";
import { Suspense, useState } from "react";
import { HomeNavbar } from "../(dashboard)/_components/(mainPageComponents)/navbar";
import { SearchPageCourses } from "../(dashboard)/_components/search-page-courses";

const SearchPageResult = () => {

    function SearchFunction() {
        const [courses, setCourses] = useState([]);

        const search = useSearchParams();
        const searchQuery = search ? search.get('q') : null;
        const encodedSearchQuery = encodeURI(searchQuery || '');

        const fetchPosts = async (url: string) => {
            const response = await axios.get(url);
            if (!response) {
                toast.error('no');
            }
            console.log(response.data.courses);
            setCourses(response.data.courses);
        }
        const { data, isLoading } = useSWR(`/api/search?q=${encodedSearchQuery}`, fetchPosts)

        return (
            <div>
                <div className="w-full">
                    <HomeNavbar />
                </div>
                <div className="flex flex-wrap justify-between px-6 py-10 gap-y-6">
                    {courses.map((course: { title: string; description: string; imageUrl: string; createdBy: string; duration: string; _id: string }) => <SearchPageCourses title={course.title} description={course.description} imageUrl={course.imageUrl} duration={course.duration} createdBy={course.createdBy} id={course._id} />)}
                </div>
            </div>
        )
    }

    return (
        <Suspense>
            <SearchFunction />
        </Suspense>
    );
}

export default SearchPageResult;