import { AdminAnalytics } from "@/app/(dashboard)/_components/(admin-analytics)/admin-analytics";
import AllUsers from "@/app/(dashboard)/_components/(admin-analytics)/all-user";
import EnrolledUsers from "@/app/(dashboard)/_components/(admin-analytics)/enrolled-users";
import purchaseModel from "@/app/server/models/purchaseModel";
import userModel from "@/app/server/models/userModel";

import '@/app/(dashboard)/dashboard.css'
import { PaymentReport } from "@/app/(dashboard)/_components/(admin-analytics)/payment-report";
import connectToDB from "@/app/server/dbconfig/dbconfig";

connectToDB();

const AnalyticsPage = async () => {

    const users = await userModel.find({
        'role': 'USER'
    });
    const userId = users.map((e: any) => e._id);

    const payment = await purchaseModel.find({
        'userId': userId
    });
    const paymentUsers = payment.map((e) => e.userId);

    const purchasedUsers = await userModel.find({
        '_id': paymentUsers
    });

    // for bar chart
    const userName = users.map((e) => e.name);
    const userNameCount = userName.length;
    const purchasedUsersName = purchasedUsers.map((e) => e.name);
    const purchasedUserNameCount = purchasedUsersName.length;

    return (
        <div className="flex flex-col">
            <AdminAnalytics allUsers={userNameCount} subscribedusers={purchasedUserNameCount} />
            <div className="flex flex-col gap-y-10 px-10 justify-around py-8">
                <div className="flex flex-col gap-y-4 lg:border lg:px-10 lg:py-6 lg:rounded-md p-3 shadow-[0_0_10px_#F7B7A3]">
                    <p className="text-xl oxygen-bold lg:text-center text-[#F7B7A3]">
                        Enrolled Users
                    </p>
                    <div className="lg:grid grid-cols-1 lg:grid-cols-4 oxygen-bold hidden border-b py-2">
                        <span>Name</span>
                        <span>Email</span>
                        <span>Phone Number</span>
                        <span>Enrolled Courses</span>
                    </div>
                    <div className="flex flex-col gap-y-3">
                        {purchasedUsers.map((e) => <EnrolledUsers name={e.name} email={e.email} phoneNumber={e.phoneNumber} userProgress={e.userProgress} key={e.id} />)}
                    </div>

                </div>
                <div className="flex flex-col gap-y-4 lg:border lg:px-10 lg:py-6 lg:rounded-md p-3 shadow-[0_0_10px_#EA5F89]">
                    <p className="text-xl oxygen-bold lg:text-center text-[#F7B7A3]">
                        Payment Report
                    </p>
                    <div className="lg:grid grid-cols-1 lg:grid-cols-3 oxygen-bold hidden border-b py-2">
                        <span>Name</span>
                        <span>Enrolled Course</span>
                        <span>Payment ID</span>
                    </div>
                    <div className="flex flex-col gap-y-3">
                        {payment.map((e) => <PaymentReport key={e.paymentOrderId} userId={e.userId} courseId={e.courseId} paymentId={e.paymentOrderId} />)}
                    </div>

                </div>
                <div className="flex flex-col gap-y-4 lg:border lg:px-10 lg:py-6 lg:rounded-md p-3 shadow-[0_0_10px_#EA5F89]">
                    <p className="text-[#EA5F89] text-xl oxygen-bold text-center">
                        All Users
                    </p>
                    <div className="hidden md:grid grid-cols-1 md:grid-cols-3 oxygen-bold border-b py-2">
                        <span>Name</span>
                        <span>Email</span>
                        <span>Phone Number</span>
                    </div>
                    <div className="flex flex-col gap-y-3">
                        {users.map((e) => <AllUsers key={e.id} name={e.name} email={e.email} phoneNumber={e.phoneNumber} />)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AnalyticsPage;