'use client'
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { SearchPage } from "../(dashboard)/_components/(mainPageComponents)/SeacrhInput";

const SearchPageResult = async () => {

    // const categories = await courseModel.collection.find({
    // })

    const search = useSearchParams();
    // console.log(search);
    const searchQuery = search ? search?.get('title') : null;

    const encodedSearchQuery = encodeURI(searchQuery || '');
    // console.log(encodedSearchQuery);
    const searchPage = await axios.get('/api/search')
    
       

    return (
        <div>
            <SearchPage />
            Search Page
        </div>
    );
}

export default SearchPageResult;