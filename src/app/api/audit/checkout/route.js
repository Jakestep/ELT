// app/api/checkout/route.js
import { NextResponse } from "next/server";
import Stripe from "stripe";


const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const WINDOW_MS = 36 * 60 * 60 * 1000;

function readOfferCookie(headers) {
  const cookie = headers.get("cookie") || "";
  const m = cookie.match(/(?:^|;\s*)elt_audit_offer=([^;]+)/);
  return m ? Number(decodeURIComponent(m[1])) : null;
}

export async function POST(req) {
  const body = await req.json().catch(() => ({}));
  const priceStandard = process.env.STRIPE_PRICE_297;
  const priceDiscount = process.env.STRIPE_PRICE_197;

  const cookieExpMs = readOfferCookie(req.headers);
  const now = Date.now();
  const use197 = cookieExpMs && cookieExpMs > now;

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [{ price: use197 ? priceDiscount : priceStandard, quantity: 1 }],
    success_url: `${process.env.NEXT_SITE_URL}/thanks?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_SITE_URL}/audit`,
  });

  return NextResponse.json({ url: session.url }, { status: 200 });
}
