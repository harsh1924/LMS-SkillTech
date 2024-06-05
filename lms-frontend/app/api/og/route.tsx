import { NextRequest, NextResponse } from "next/server";
import { ImageResponse } from '@vercel/og'

export const runtime = 'edge'

export async function GET(req: NextRequest) {
    try {
        // const { searchParams } = new URL(req.url);
        // console.log(searchParams);
        
        const title = req.nextUrl.searchParams.get('title');
        console.log(title);
        
        const coverURL = `http://localhost:3000/`
        return new ImageResponse(
            <div>{title}
            </div>
        );
    } catch (error: any) {
        return NextResponse.json({
            message: error.message
        }, { status: 400 })
    }
}