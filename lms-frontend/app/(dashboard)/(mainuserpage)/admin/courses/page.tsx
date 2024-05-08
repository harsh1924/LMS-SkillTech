import { Button } from "@/components/ui/button";
import Link from "next/link";

const CoursePage = () => {
    return (
        <div className="p-4">
            <Link href='/admin/create'>
                <Button className="p-6">
                    New Course
                </Button>
            </Link>
        </div>
    );
}

export default CoursePage;