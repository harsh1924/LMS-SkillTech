interface AllUserData {
    name: string,
    email: string
}

const AllUsers = ({
    name,
    email
}: AllUserData) => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <p>
                {name}
            </p>
            <p>
                {email}
            </p>
        </div>
    );
}

export default AllUsers;