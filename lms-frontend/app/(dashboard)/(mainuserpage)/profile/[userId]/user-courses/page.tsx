import { UserPurchasedCoursesCard } from "@/app/(dashboard)/_components/(user-purchased-courses)/user-purcahased-course";
import courseModel from "@/app/server/models/courseModel";
import purchaseModel from "@/app/server/models/purchaseModel";

const UserPurchasedCourses = async ({
    params
}: {
    params: { userId: string }
}) => {

    const payment = await purchaseModel.find({
        userId: params.userId
    })
    // console.log(payment);
    const courses = payment.map((e) => e.courseId);
    // console.log(courses);
    const allCourses = await courseModel.find({
        _id: courses
    }).select('-lectures');
    console.log(allCourses);


    return (
        <div >
            <p className="flex text-center justify-center items-center pt-5 font-bold font-sans text-2xl text-gray-700">
                Your Courses
            </p>
            <div className="flex flex-col lg:flex-row flex-wrap">
                {allCourses.map((e) => <UserPurchasedCoursesCard courseId={e._id} imageUrl={e.imageUrl} title={e.title} />)}
            </div>
        </div>
    );
}

export default UserPurchasedCourses;