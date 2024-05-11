import { Button } from "@/components/ui/button";
import Link from "next/link";

const CoursePage = () => {
    return (
        <div className="p-4 flex gap-x-10">
            <Link href={'/admin/courses/all-courses'}>
            <Button className="p-6">
                    View all Courses
                </Button>
            </Link>
            <Link href='/admin/create'>
                <Button className="p-6">
                    New Course
                </Button>
            </Link>
        </div>
    );
}

export default CoursePage;