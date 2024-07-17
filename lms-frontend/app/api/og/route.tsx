import { NextRequest, NextResponse } from "next/server";
import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        // console.log(searchParams);

        const hasTitle = searchParams.has('title')
        const title = hasTitle ? searchParams.get('title')?.slice(0, 100) : "SkillTech India"
        console.log(title);

        const coverURL = `http://localhost:3000/`

        const imageData = await fetch(
            new URL('./ai.jpg', import.meta.url)).then((res) => res.arrayBuffer())


        return new (ImageResponse as any)(
            <div tw="flex flex-col w-full h-full items-center justify-center bg-white">
                <img src={imageData} width={600} height={300} />
                <h1 tw="font-bold text-3xl text-gray-900 ">
                    {title}
                </h1>
            </div>
        );
    } catch (error: any) {
        return NextResponse.json({
            message: error.message
        }, { status: 400 })
    }
}