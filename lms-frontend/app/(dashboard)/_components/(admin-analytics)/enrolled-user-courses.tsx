import connectToDB from "@/app/server/dbconfig/dbconfig";
import courseModel from "@/app/server/models/courseModel"
connectToDB();

interface data {
    id: string
}

export const EnrolledUserCourses = async ({
    id
}: data) => {

    const courses = await courseModel.find({
        _id: id
    });

    return (
        <div className="flex">
            {courses.map((course) => course.title)}
        </div>
    )
}