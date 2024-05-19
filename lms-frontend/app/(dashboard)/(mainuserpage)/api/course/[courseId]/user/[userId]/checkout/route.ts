import courseModel from "@/app/server/models/courseModel";
import purchaseModel from "@/app/server/models/purchaseModel";
import userModel from "@/app/server/models/userModel";
import { stripe } from "@/lib/stripe";
import { NextRequest, NextResponse } from "next/server";
import Stripe from 'stripe';

export async function POST(request: NextRequest
    , { params }: {
        params: { courseId: string; userId: string }
    }
) {
    try {
        const courseId = params.courseId;
        const userId = params.userId;
        console.log(userId);
        

        const user = await userModel.findById(userId);
        console.log(user._id);
        if (!user) {
            return NextResponse.json({
                message: 'User does not exists'
            }, { status: 400 })
        }

        const course = await courseModel.findById(courseId);
        // console.log(course);
        // console.log(course.title);
        
        if (!course) {
            return NextResponse.json({
                message: 'Course not found'
            }, { status: 404 })
        }

        const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = [
            {
                quantity: 1,
                price_data: {
                    currency: 'INR',
                    product_data: {
                        name: course.title,
                        description: course.description!
                    },
                    unit_amount: Math.round(course.price! * 100)
                }
            }
        ];

        // console.log(line_items[0].price_data?.product_data);
        

        let stripeCustomer = await purchaseModel.findOne(
            { userId: user._id }
        )

        // console.log(stripeCustomer);
        

        if (!stripeCustomer) {
            const customer = await stripe.customers.create({
                email: user.email
            })
            // console.log(customer);
            
            stripeCustomer = await purchaseModel.create({
                // data: {
                    userId: user._id,
                    stripeCustomerId: customer.id,
                // }
            })
            
        }
        console.log(stripeCustomer);

        const session = await stripe.checkout.sessions.create({
            customer: stripeCustomer.stripeCustomerId,
            line_items,
            mode: 'payment',
            success_url: `${process.env.HOME_URL}/?success=1`,
            cancel_url: `${process.env.HOME_URL}/?cancel=1`,
            metadata: {
                courseId: courseId,
                userId: userId
            }
        });
        

        return NextResponse.json({
            message: 'hello',
            url: session.url
        }, { status: 200 })

    } catch (error: any) {
        console.log('Course checkout error: ', error.message);

        return NextResponse.json({
            error: error.message
        }, { status: 400 })
    }
}