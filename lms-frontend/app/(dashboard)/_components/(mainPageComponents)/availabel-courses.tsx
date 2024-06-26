import GetAllCourses from "../allcourses";

const AvailableCourses = () => {
    return (
        <div className="py-8"  id="our-courses">
            <div className="px-10 pb-5 flex-col flex gap-y-3">
                <h2 className="text-3xl oxygen-bold">
                    All the skills you need in one place
                </h2>
                <p className="text-lg text-gray-700 source-sans-3-semibold">
                    From critical skills to technical topics, Skill Tech supoorts your professional development
                </p>
            </div>
            <GetAllCourses />
        </div>
    );
}

export default AvailableCourses;