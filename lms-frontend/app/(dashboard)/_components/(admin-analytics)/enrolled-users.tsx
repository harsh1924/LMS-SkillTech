import { EnrolledUserCourses } from "./enrolled-user-courses";

interface EnrolledUsersData {
    email: string,
    name: string,
    userProgress: [],
    phoneNumber: number
}

const EnrolledUsers = ({
    name,
    email,
    userProgress,
    phoneNumber
}: EnrolledUsersData) => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-4 border-b py-2 source-sans-3-regular">
            <div>
                {name}
            </div>
            <div>
                {email}
            </div>
            <div>
                {phoneNumber}
            </div>
            <div className="">
                {userProgress.map((e: { course: any }) => <EnrolledUserCourses id={e.course.id} key={e.course.id} />)}
            </div>
        </div>
    );
}

export default EnrolledUsers;