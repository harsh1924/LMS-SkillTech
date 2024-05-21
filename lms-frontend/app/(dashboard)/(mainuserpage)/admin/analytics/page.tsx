import { AdminAnalytics } from "@/app/(dashboard)/_components/(admin-analytics)/admin-analytics";
import AllUsers from "@/app/(dashboard)/_components/(admin-analytics)/all-user";
import EnrolledUsers from "@/app/(dashboard)/_components/(admin-analytics)/enrolled-users";
import purchaseModel from "@/app/server/models/purchaseModel";
import userModel from "@/app/server/models/userModel";

const AnalyticsPage = async () => {

    const users = await userModel.find({
        'role': 'USER'
    });
    const userName = users.map((e) => e.name);
    const userNameCount = userName.length;
    const userId = users.map((e: any) => e._id);

    const payment = await purchaseModel.find({
        'userId': userId
    }).select('+courseId')
    const paymentUsers = payment.map((e) => e.userId);
    const allEnrolledUsers = await userModel.find({
        '_id': paymentUsers
    });
    const purchasedUsers = await userModel.find({
        '_id': paymentUsers
    })
    const purchasedUsersName = purchasedUsers.map((e) => e.name);
    const purchasedUserNameCount = purchasedUsersName.length;

    return (
        <div className="flex flex-col">
            <AdminAnalytics allUsers={userNameCount} subscribedusers={purchasedUserNameCount} />
            <div className="flex justify-around py-8">
                <div className="flex flex-col gap-y-4 lg:border lg:px-10 lg:py-6 lg:rounded-md p-3 shadow-[0_0_10px_#F7B7A3]">
                    <p className="text-xl lg:text-center text-[#F7B7A3]">
                        Enrolled Users
                    </p>
                    <div className="flex flex-col gap-y-3">
                        {allEnrolledUsers.map((e) => <EnrolledUsers name={e.name} email={e.email} />)}
                    </div>
                </div>
                <div className="flex flex-col gap-y-4 lg:border lg:px-10 lg:py-6 lg:rounded-md p-3 shadow-[0_0_10px_#EA5F89]">
                    <p className="text-[#EA5F89] text-xl">
                        All Users
                    </p>
                    <div className="flex flex-col gap-y-3">
                        {users.map((e) => <AllUsers name={e.name} email={e.email} />)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AnalyticsPage;