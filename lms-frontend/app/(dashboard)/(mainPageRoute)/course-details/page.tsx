'use client'

import { useParams } from "next/navigation";

const CourseDetails = ({
    params
}: {
    params: { courseId: string }
}) => {

    const courseId = useParams();

    return (
        <div>
            hi
            
        </div>
    );
}

export default CourseDetails;