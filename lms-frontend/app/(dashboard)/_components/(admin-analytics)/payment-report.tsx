import courseModel from "@/app/server/models/courseModel"
import userModel from "@/app/server/models/userModel";

interface PaymentData {
    courseId: string,
    userId: string,
    paymentId: string
}

export const PaymentReport = async ({
    courseId,
    userId,
    paymentId
}: PaymentData) => {

    const user = await userModel.findById(userId);
    const course = await courseModel.findById(courseId);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 border-b py-2 source-sans-3-regular">
            <span>
                {user.name}
            </span>
            <span>
                {course.title}
            </span>
            <span>
                {paymentId}
            </span>
        </div>
    )
}