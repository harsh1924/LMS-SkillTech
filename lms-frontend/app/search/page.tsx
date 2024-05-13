'use client'
import { useSearchParams } from "next/navigation";

const SearchPage = async () => {

    // const categories = await courseModel.collection.find({
    // })

    const search = useSearchParams();
    console.log(search);
    const searchQuery = search ? search?.get('title') : null;

    const encodedSearchQuery = encodeURI(searchQuery || '');
    console.log(encodedSearchQuery);
    
       

    return (
        <div>
            Search Page
        </div>
    );
}

export default SearchPage;