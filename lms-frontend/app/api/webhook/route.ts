import courseModel from "@/app/server/models/courseModel";
import purchaseModel from "@/app/server/models/purchaseModel";
import userModel from "@/app/server/models/userModel";
import { stripe } from "@/lib/stripe";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(req: NextRequest) {
    const body = await req.text();
    const signature = headers().get('Stripe-Signature') as string;

    let event: Stripe.Event;
    try {
        event = stripe.webhooks.constructEvent(
            body,
            signature,
            process.env.STRIPE_WEBHOOK_SECRET!
        )
    } catch (error: any) {
        return NextResponse.json({
            message: 'Webhook Error'
        }, { status: 400 })
    }

    const session = event.data.object as Stripe.Checkout.Session;
    const userId = session?.metadata?.userId;
    const user = await userModel.findById(userId);
    console.log(user);

    const courseId = session?.metadata?.courseId
    const course = await courseModel.findById(courseId);
    // console.log(course);


    if (event.type === 'checkout.session.completed') {
        if (!userId || !courseId) {
            return NextResponse.json({
                message: 'Webhook Error: Missing MetaData'
            }, { status: 400 })
        }
        await purchaseModel.create({
            courseId: courseId,
            userId: userId
        });
        user.userProgress.push({
            course: {
                id: courseId,
                lectures: course.lectures
            },
        });
        await user.save();
    }
    else {
        return NextResponse.json({
            messgae: `Webhook Error: Unhandled Event Type ${event.type}`
        }, { status: 200 })
    }

    return NextResponse.json(null, { status: 200 });
}