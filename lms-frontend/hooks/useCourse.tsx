"use client";

import axios from "axios";
import { useEffect, useState } from "react";

interface Course {
    //? String
    _id: string;
    title: string;
    description: string;
    category: string;
    createdBy: string;
    syllabus: string;
    imageUrl: string;
    overview: string;
    duration: string;
    keyFeaturesOne: string;
    keyFeaturesTwo: string;
    keyFeaturesThree: string;
    keyFeaturesFour: string;
    keyFeaturesFive: string;
    keyFeaturesSix: string;
    cardOne: string;
    cardTwo: string;
    cardThree: string;
    cardFour: string;
    skillsOne: string,
    skillsTwo: string,
    skillsThree: string,
    skillsFour: string,
    skillsFive: string,
    skillsSix: string,

    // ?Number
    price: number;
    numberOfLectures: number;
    lecturesCompleted: number;

    // ? Boolean
    isPublished: boolean;
    isAvailable: boolean;
    isFree: boolean;

    // ? Array
    lectures: [];
    attachments: [];

}

export default function useCourse(courseId: string) {
    const [course, setCourse] = useState<Course | null>(null);
    const [id, setId] = useState<string>("");
    const [error, setError] = useState<Error | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const fetchUser = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get(`/api/course/course-details/${courseId}`);
            const course = response.data.course;
            console.log(course);

            setCourse(response.data.course);
            setId(response.data.course);
        } catch (err: unknown) {
            if (err instanceof Error) {
                setError(err); // Set the error if it's an instance of Error
            } else {
                setError(new Error("An unknown error occurred")); // Fallback for non-Error objects
            }
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchUser()
    }, []);

    return { id, course, error, isLoading }
}