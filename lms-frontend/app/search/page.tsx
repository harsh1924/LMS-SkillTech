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
        const [isloading, setIsloading] = useState(false);

        const search = useSearchParams();
        const searchQuery = search ? search.get('q') : null;
        const encodedSearchQuery = encodeURI(searchQuery || '');

        const fetchPosts = async (url: string) => {
            const response = await axios.get(url);
            if (!response) {
                toast.error('no');
            }
            setCourses(response.data.courses);
            setIsloading(true);
        }
        const { data, isLoading } = useSWR(`/api/search?q=${encodedSearchQuery}`, fetchPosts)

        return (
            <div>
                {isloading ? (
                    <div>
                        <div className="w-full">
                            <HomeNavbar />
                        </div>
                        <div className="flex flex-wrap justify-between px-6 py-10 gap-y-6">
                            {courses?.map((course: { title: string; description: string; imageUrl: string; createdBy: string; duration: string; _id: string }) => <SearchPageCourses title={course.title} description={course.description} imageUrl={course.imageUrl} duration={course.duration} createdBy={course.createdBy} id={course._id} />)}
                        </div>
                    </div>
                ) : (
                    <div className="flex h-screen w-screen items-center justify-center">
                        <div className="animate-spin rounded-full border-4 border-gray-300 border-t-gray-900 h-12 w-12 dark:border-gray-600 dark:border-t-gray-50" />
                    </div>
                )}
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