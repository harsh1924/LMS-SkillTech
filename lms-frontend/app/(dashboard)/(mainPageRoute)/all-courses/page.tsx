import { HomeNavbar } from "../../_components/(mainPageComponents)/navbar";
import GetAllCourses from "../../_components/allcourses";

const allcourses = () => {
    return ( 
        <div className="flex flex-col gap-y-10">
            <HomeNavbar />
            <GetAllCourses />
        </div>
     );
}
 
export default allcourses;