import { NextResponse } from "next/server";
import { verifyOfferToken } from "@/lib/offer-token";

export const runtime = "nodejs";

export async function GET(req) {
  const url = new URL(req.url);
  const t = url.searchParams.get("t");
  const next = url.searchParams.get("next") || "/venue/audit";

  const redirect = (path) => NextResponse.redirect(path.startsWith("http") ? path : `${url.origin}${path}`);

  if (!t) return redirect(next);

  try {
    const { exp } = verifyOfferToken(t);
    const expires = new Date(exp * 1000);

    const res = redirect(next);
    // store absolute expiry (ms) so the client can show a countdown
    res.cookies.set("elt_audit_offer", String(expires.getTime()), {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/",
      expires,
    });
    return res;
  } catch {
    return redirect(next);
  }
}
