interface EnrolledUsersData {
    email: string,
    name: string,

}

const EnrolledUsers = ({
    name,
    email
}: EnrolledUsersData) => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <div>
                {name}
            </div>
            <div>
                {email}
            </div>
        </div>
    );
}

export default EnrolledUsers;