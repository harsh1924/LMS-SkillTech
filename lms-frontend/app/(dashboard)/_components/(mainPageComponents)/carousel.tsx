'use client'

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import * as React from "react"
// import Courses from '@/app/(dashboard)/carouselCourses.json'
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Banner1 from '@/app/helpers/images/Banner-images/Banner1.jpg'
import Banner2 from '@/app/helpers/images/Banner-images/Banner2.jpg'
import Banner3 from '@/app/helpers/images/Banner-images/Banner2.jpg'
import Banner4 from '@/app/helpers/images/Banner-images/BAnner4.jpg'


export const HomePageCarousel = () => {

    const Courses = [
        {
            "title": "Full Stack Developer - MERN Stack",
            "imageUrl": Banner2.src,
            "description": "Gain skill with full stack developer course to design, build, and scale frontend and backend systems. Gain exposure over 10+ tools/frameworks, 6+ real-world projects via an immersive learning approach led by live virtual classes, access to integrated labs and JobAssist services",
            "price": "4999"
        },
        {
            "title": "Java Course and Certification",
            "imageUrl": Banner1.src,
            "description": "This advanced Java Certification Training is designed to guide you through the concepts of Java from introductory techniques to advanced programming skills. This Java course will also provide you with the knowledge of Core Java 8, operators, arrays, loops, methods, and constructors while giving you hands-on experience in JDBC and JUnit framework.",
            "price": "4999"
        },
        {
            "title": "Full Stack Java Developer",
            "imageUrl": Banner3.src,
            "description": "This advanced Java Certification Training is designed to guide you through the concepts of Java from introductory techniques to advanced programming skills. This Java course will also provide you with the knowledge of Core Java 8, operators, arrays, loops, methods, and constructors while giving you hands-on experience in JDBC and JUnit framework.",
            "price": "4999"
        },
        {
            "title": "SQL Certification Course ",
            "imageUrl": Banner4.src,
            "description": "This advanced Java Certification Training is designed to guide you through the concepts of Java from introductory techniques to advanced programming skills. This Java course will also provide you with the knowledge of Core Java 8, operators, arrays, loops, methods, and constructors while giving you hands-on experience in JDBC and JUnit framework.",
            "price": "4999"
        }
    ]

    return (
        <div className="pb-10">
            <Carousel className="w-full h-[450px]" plugins={[Autoplay({ delay: 5000 })]}>
                <CarouselContent>
                    {Courses.map((course, index) => (
                        <CarouselItem key={index}>
                            <div className="p-1">
                                <Card className="h-[400px]">
                                    <CardContent>
                                        <Link href={`/`} className=" items-center gap-y-2 flex-col justify-center h-[400px]">
                                            <div className="z-50 flex gap-y-2 flex-col shadow-md absolute w-[300px] h-[200px] top-[100px] justify-center ml-32 bg-white px-4 rounded-md">
                                                <span className="text-2xl font-semibold oxygen-bold">
                                                    {course.title}
                                                </span>
                                                <span className=" source-sans-regular">
                                                    <span>Courses start at {course.price}. Get your new-student offer before it expires.
                                                    </span>
                                                </span>
                                            </div>
                                            <div className="flex items-center justify-center w-full h-full">
                                                <img src={course.imageUrl} width={3000} height={2700} className="opacity-90  object-fill" loading="lazy" />
                                            </div>
                                        </Link>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>

        </div>
    )
}