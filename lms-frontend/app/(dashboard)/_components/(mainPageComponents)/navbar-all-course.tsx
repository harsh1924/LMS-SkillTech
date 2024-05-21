interface courseData {
    data: [],
}

const NavbarAllCourses = ({
    data
}: courseData) => {
    return (
        <div className="flex flex-col">
            {data.map((e: {title: string;}) =>
                <div className="border-b py-2">
                    <div>
                        {e.title}
                    </div>
                    <div>
                        {/* {e.category} */}
                    </div>
                </div>
            )}

        </div>
    );
}

export default NavbarAllCourses;