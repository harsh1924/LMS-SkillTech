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
    const courseExists = allCourses.length;

    return (
        <div>
            <div>
                <HomeNavbar />
            </div>
            {courseExists !== 0 ? (
                <div>
                    <p className="flex text-center justify-center items-center py-10 oxygen-bold text-2xl text-gray-700">
                        Your Courses
                    </p>
                    <div className="flex flex-wrap px-10 gap-3 justify-center md:justify-start">
                        {allCourses.map((e) => <UserPurchasedCoursesCard key={e._id} courseId={e._id} imageUrl={e.imageUrl} title={e.title} userId={params.userId} />)}
                    </div>
                </div>
            ) : (
                <div>
                    <div className="flex flex-col items-center justify-center min-h-[300px]">
                        <main className="text-center">
                            <h1 className="text-4xl font-bold text-gray-900">You Have No Courses</h1>
                            <p className="mt-4 text-lg text-gray-600">
                                It looks like you don't have any courses at the moment.
                            </p>
                        </main>
                    </div>
                </div>
            )}
        </div>
    );
}

export default UserPurchasedCourses;