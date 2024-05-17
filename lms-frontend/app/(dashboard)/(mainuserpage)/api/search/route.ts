import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextApiRequest, res: NextResponse, request: NextRequest) {
    try {
        const { title: query } = req.query;
        const title = request.nextUrl.searchParams.get('title');
        console.log('at api', title);
        // console.log(query);

        // console.log('at api', query);
        console.log('at api');

        return NextResponse.json({
            message: 'uery'
        })
    } catch (error: any) {
        return NextResponse.json({
            error: error.message
        })
    }

}