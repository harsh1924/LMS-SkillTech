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

export const HomePageCarousel = () => {
    return (
        <div className="px-12 pb-10 pt-6">
            <Carousel plugins={[Autoplay({ delay: 3000 })]} className="w-full h-[450px]">
                <CarouselContent>
                    {Courses.map((course, index) => (
                        <CarouselItem key={index}>
                            <div className="p-1">
                                <Card className="h-[400px]">
                                    <CardContent>
                                        <Link href={`/`} className=" items-center gap-y-2 flex-col justify-center p-6 h-[400px]">
                                            <div className="z-50 flex gap-y-2 flex-col shadow-md absolute w-[300px] h-[200px] top-[100px] justify-center ml-32 bg-white px-4 rounded-md">
                                                <span className="text-2xl font-semibold oxygen-bold">
                                                    {course.title}
                                                </span>
                                                <span className=" source-sans-regular">
                                                   <span>Courses start at {course.price}. Get your new-student offer before it expires.
                                                    </span> 
                                                </span>
                                            </div>
                                            <div className="flex items-center justify-center">
                                            <img src={course.imageUrl} width={1340} height={400} className="opacity-90" />
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