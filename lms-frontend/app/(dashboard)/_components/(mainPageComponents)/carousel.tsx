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
import Courses from '@/app/(dashboard)/carouselCourses.json'
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

//  plugins={[Autoplay({ delay: 3000 })]}

export const HomePageCarousel = () => {
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
                                                <img src={course.imageUrl} width={2300} height={1600} className="opacity-90" />
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