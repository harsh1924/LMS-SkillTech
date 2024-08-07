'use client';

import { SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const SearchPage = () => {

    const router = useRouter();

    const [searchQuery, setSearchQuery] = useState("");

    const onSearch = (e: React.FormEvent) => {
        e.preventDefault();

        const encodedSearchQuery = encodeURI(searchQuery);
        console.log(encodedSearchQuery);

        router.push(`/search?q=${encodedSearchQuery}`)
    }

    return (
        <form className="flex" onSubmit={onSearch}>
            <div className="border rounded-sm outline-none border-[#0056d2] lg:w-[300px] placeholder-[#0056d2] flex items-center justify-between">
                <input value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} type="search" className="px-3 py-2 rounded-sm outline-none border-[#0056d2] lg:w-[260px] placeholder-[#0056d2]" placeholder="Search Courses" />
                <button type="submit" className="h-full rounded-sm px-2 text-[#0056d2] bg-[#ecf2fc]">
                    <SearchIcon />
                </button>
            </div>

        </form>
    )
}