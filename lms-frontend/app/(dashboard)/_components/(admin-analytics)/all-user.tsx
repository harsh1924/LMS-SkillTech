interface AllUserData {
    name: string,
    email: string,
    phoneNumber: number,
    idx: number
}

const AllUsers = ({
    name,
    email,
    idx,
    phoneNumber
}: AllUserData) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 source-sans-3-regular border-b py-2">
            <p className="pl-4">
                {idx + 1}
            </p>
            <p>
                {name}
            </p>
            <p>
                {email}
            </p>
            <p className="text-center">
                {phoneNumber}
            </p>
        </div>
    );
}

export default AllUsers;