import courseModel from "@/app/server/models/courseModel";

const SearchPage = async () => {

    const categories = await courseModel.collection.find({
    })

    return ( 
        <div>
            Search Page
        </div>
     );
}
 
export default SearchPage;