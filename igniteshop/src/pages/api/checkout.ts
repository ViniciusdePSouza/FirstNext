import { stripe } from "@/lib/stripe";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    const successUrl = `${process.env.NEXT_URL!}/success`
    const cancelURL = `${process.env.NEXT_URL!}`
    const priceId = 'price_1MWiUvFE4EY1TmCzvqpiQPpc'

    const checkoutSession = await stripe.checkout.sessions.create({
        success_url: successUrl,
        cancel_url: cancelURL,
        mode: 'payment',
        line_items: [{
            price: priceId,
            quantity: 1
        }]
    })

    return res.status(201).json({
        checkoutUrl: checkoutSession.url 
    })
}