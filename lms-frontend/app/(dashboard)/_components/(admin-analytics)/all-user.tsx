interface AllUserData {
    name: string,
    email: string,
    phoneNumber: number
}

const AllUsers = ({
    name,
    email,
    phoneNumber
}: AllUserData) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 source-sans-3-regular border-b py-2">
            <p>
                {name}
            </p>
            <p>
                {email}
            </p>
            <p>
                {phoneNumber}
            </p>
        </div>
    );
}

export default AllUsers;