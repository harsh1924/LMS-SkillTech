import { UserPurchasedCoursesCard } from "@/app/(dashboard)/_components/(user-purchased-courses)/user-purcahased-course";

import courseModel from "@/app/server/models/courseModel";
import purchaseModel from "@/app/server/models/purchaseModel";

import '@/app/(dashboard)/dashboard.css'
import userModel from "@/app/server/models/userModel";
import { HomeNavbar } from "@/app/(dashboard)/_components/(mainPageComponents)/navbar";

const UserPurchasedCourses = async ({
    params
}: {
    params: { userId: string }
}) => {

    const user = await userModel.findById(params.userId);
    const payment = await purchaseModel.find({
        userId: params.userId
    });
    const courses = payment.map((e) => e.courseId);
    const allCourses = await courseModel.find({
        _id: courses
    }).select('-lectures');

    return (
        <div>
            <div>
                <HomeNavbar />
            </div>
            <p className="flex text-center justify-center items-center py-10 oxygen-bold text-2xl text-gray-700">
                Your Courses
            </p>
            <div className="flex flex-wrap px-10 gap-3">
                {allCourses.map((e) => <UserPurchasedCoursesCard key={e._id} courseId={e._id} imageUrl={e.imageUrl} title={e.title} userId={params.userId} />)}
            </div>
        </div>
    );
}

export default UserPurchasedCourses;