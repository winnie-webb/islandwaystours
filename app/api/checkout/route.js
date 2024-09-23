// app/api/checkout/route.js
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2020-08-27",
});

export async function POST(request) {
  try {
    const { tourName, totalPrice } = await request.json();
    console.log("Received data:", { tourName, totalPrice }); // Log the incoming data

    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: tourName,
            },
            unit_amount: totalPrice * 100, // amount in cents
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `http://localhost:3000`,
      cancel_url: `http://localhost:3000`,
    });

    return NextResponse.json({ id: session.id });
  } catch (error) {
    console.error("Stripe Error:", error); // Log the error
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
