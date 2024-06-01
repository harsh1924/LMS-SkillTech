import courseModel from "@/app/server/models/courseModel";
import connectToDB from "@/app/server/dbconfig/dbconfig";
import { PublishCourseButton } from "@/app/(dashboard)/_components/(buttons)/publish-course-button";
import { UnPublishCourseButton } from "@/app/(dashboard)/_components/(buttons)/unpublish-course-button";

import { LayoutDashboard, Trash2 } from "lucide-react";

import Link from "next/link";
import { DurationForm } from "../../_components/(extra-details)/duration-form";
import { OverviewForm } from "../../_components/(extra-details)/overview-form";
import { KeyFeaturesOneForm } from "../../_components/(extra-details)/(features)/key-feature-one";
import { KeyFeaturesTwoForm } from "../../_components/(extra-details)/(features)/key-feature-two";
import { KeyFeaturesThreeForm } from "../../_components/(extra-details)/(features)/key-feature-three";
import { KeyFeaturesFourForm } from "../../_components/(extra-details)/(features)/key-feature-four";
import { KeyFeaturesFiveForm } from "../../_components/(extra-details)/(features)/ket-feature-five";
import { KeyFeaturesSixForm } from "../../_components/(extra-details)/(features)/key-feature-six";
import { SkillsOne } from "../../_components/(extra-details)/(skills-covered)/skills-one";
import { SkillsTwo } from "../../_components/(extra-details)/(skills-covered)/skills-two";
import { SkillsThree } from "../../_components/(extra-details)/(skills-covered)/skills-three";
import { SkillsFour } from "../../_components/(extra-details)/(skills-covered)/skills-four";
import { SkillsFive } from "../../_components/(extra-details)/(skills-covered)/skills-five";
import { SkillsSix } from "../../_components/(extra-details)/(skills-covered)/skills-six";
import { Separator } from "@/components/ui/separator";
import { CardOne } from "../../_components/(extra-details)/(course-details-cards.tsx)/card-one";
import { CardTwo } from "../../_components/(extra-details)/(course-details-cards.tsx)/card-two";
import { CardThree } from "../../_components/(extra-details)/(course-details-cards.tsx)/card-three";
import { CardFour } from "../../_components/(extra-details)/(course-details-cards.tsx)/card-four";

connectToDB();

const CourseOtherDetails = async ({
    params
}: {
    params: { courseId: string }
}) => {

    const course = await courseModel.findById(params.courseId).select('-lectures');

    return (
        <div>
            {!course.isPublished ? (
                <div className="bg-yellow-200 font-sans py-4 px-3 text-center">
                    This course is <span className="font-semibold">NOT PUBLISHED</span>. It will not be visible to students!
                </div>
            ) : (
                <div className="bg-green-300 font-sans py-4 px-3 text-center">
                    This course is <span className="font-semibold">PUBLISHED</span>. It is visible to students!
                </div>
            )}
            <div className="px-6 pb-10">
                <div className="grid grid-cols-1 mt-16">
                    <div className="flex items-center">
                        <div className="flex items-center w-full gap-x-2">
                            <LayoutDashboard className="hidden md:block text-sky-500" />
                            <h2 className="text-xl">
                                Customize Your Course
                            </h2>
                        </div>
                        <div className="flex gap-x-4">
                            {!course.isPublished ? (
                                <PublishCourseButton courseId={params.courseId} />
                            ) : (
                                <UnPublishCourseButton courseId={params.courseId} />
                            )}

                            <Link href={`/admin/courses/${params.courseId}/edit-course/delete-course`} className="bg-red-600 hover:bg-red-700 transition-all duration-300 ease-in-out text-white py-2 rounded-md px-5">
                                <Trash2 size={20} />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6">
                        <DurationForm
                            initialData={course}
                            courseId={course.id} />
                        {/* overview */}
                        <OverviewForm
                            initialData={course}
                            courseId={course.id} />
                    </div>

                    <Separator className="my-10" />

                    {/* key features */}
                    <span className="text-xl">
                        Course Key Features
                    </span>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6">
                        <KeyFeaturesOneForm
                            initialData={course}
                            courseId={course.id} />
                        <KeyFeaturesTwoForm
                            initialData={course}
                            courseId={course.id} />
                        <KeyFeaturesThreeForm
                            initialData={course}
                            courseId={course.id} />
                        <KeyFeaturesFourForm
                            initialData={course}
                            courseId={course.id} />
                        <KeyFeaturesFiveForm
                            initialData={course}
                            courseId={course.id} />
                        <KeyFeaturesSixForm
                            initialData={course}
                            courseId={course.id} />
                    </div>

                    <Separator className="my-10" />

                    {/* skills covered */}
                    <span className="text-xl">
                        Skills Covered in Course
                    </span>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6">
                        <SkillsOne
                            initialData={course}
                            courseId={course.id} />
                        <SkillsTwo
                            initialData={course}
                            courseId={course.id} />
                        <SkillsThree
                            initialData={course}
                            courseId={course.id} />
                        <SkillsFour
                            initialData={course}
                            courseId={course.id} />
                        <SkillsFive
                            initialData={course}
                            courseId={course.id} />
                        <SkillsSix
                            initialData={course}
                            courseId={course.id} />

                    </div>

                    <Separator className="my-10" />

                    {/* skills covered */}
                    <span className="text-xl">
                        Course Card Details
                    </span>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6">
                        <CardOne
                            initialData={course}
                            courseId={course.id} />
                        <CardTwo
                            initialData={course}
                            courseId={course.id} />
                        <CardThree
                            initialData={course}
                            courseId={course.id} />
                        <CardFour
                            initialData={course}
                            courseId={course.id} />
                    </div>

                </div>
                <div className="my-6 flex justify-between items-center">
                    <Link href={'/trainer/courses/all-courses'} className="bg-sky-500 hover:bg-sky-600 transition-all duration-300 ease-in-out text-white py-2 rounded-md px-5">
                        Done
                    </Link>
                    <Link href={`/trainer/courses/${params.courseId}/edit-course/add-lectures/view-lectures`} className="bg-sky-500 hover:bg-sky-600 transition-all duration-300 ease-in-out text-white py-2 rounded-md px-5">
                        Edit Lectures
                    </Link>
                    <Link href={`/trainer/courses/${params.courseId}/edit-course/add-lectures`} className="bg-sky-500 hover:bg-sky-600 transition-all duration-300 ease-in-out text-white py-2 rounded-md px-5">
                        Add Lectures
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default CourseOtherDetails;