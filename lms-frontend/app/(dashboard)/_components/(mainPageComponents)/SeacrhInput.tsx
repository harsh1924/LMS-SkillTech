'use client';

import { useRouter } from "next/navigation";
import { useState } from "react";

export const SearchPage = () => {

    const router = useRouter();

    const [searchQuery, setSearchQuery] = useState("");

    const onSearch = (e: React.FormEvent) => {
        e.preventDefault();

        const encodedSearchQuery = encodeURI(searchQuery);
        router.push(`/search?title=${encodedSearchQuery}`)
    }

    return (
        <form className="hidden md:flex" onSubmit={onSearch}>
            <input value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} type="search" className="border px-4 py-2 rounded-3xl outline-none border-black lg:w-[400px]" placeholder="Search for anything" />
        </form>
    )
}