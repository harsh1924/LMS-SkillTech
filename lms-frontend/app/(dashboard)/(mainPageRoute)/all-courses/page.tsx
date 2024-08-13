import { Footer } from "../../_components/(mainPageComponents)/footer";
import { HomeNavbar } from "../../_components/(mainPageComponents)/navbar";
import GetAllCourses from "../../_components/allcourses";

const allcourses = () => {
    return ( 
        <div className="flex flex-col gap-y-10">
            <HomeNavbar />
            <GetAllCourses />
            <Footer />
        </div>
     );
}
 
export default allcourses;