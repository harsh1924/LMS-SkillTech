// @ts-nocheck

import { NextRequest, NextResponse } from "next/server";
import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET(req: NextRequest) {
    try {
        // const { searchParams } = new URL(req.url);
        // console.log(searchParams);

        // const hasTitle = searchParams.has('title');
        const title = "SKILLTECHINDIA.NET"
        const heading = "Online Courses - Learn to Code Anywhere, Anytime | SkillTech"
        const description = "Learn from best tutors of India"

        const imageData = await fetch(
            new URL('./ai.jpg', import.meta.url)).then((res) => res.arrayBuffer())


        return new (ImageResponse as any)(
            <div tw="flex flex-col w-full h-full bg-white">
                <img src={imageData} tw="w-full h-[75%]" />
                <div tw="flex flex-col px-6 pt-3">
                    <span tw="font-light text-2xl">
                        {title}
                    </span>
                    <span tw="font-bold text-3xl pt-1">
                        {heading}
                    </span>
                    <span tw="font-light text-3xl pt-1">
                        {description}
                    </span>
                </div>
            </div>
        );
    } catch (error: any) {
        return NextResponse.json({
            message: error.message
        }, { status: 400 })
    }
}