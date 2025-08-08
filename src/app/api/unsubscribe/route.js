import { NextResponse } from "next/server";
import { readUnsubToken } from "@/lib/unsub-token";
import { sendfoxUnsubscribe } from "@/lib/sendfox";

export const runtime = "nodejs";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const token = searchParams.get("t");
  if (!token) return NextResponse.redirect("/unsub?status=missing");

  try {
    const email = readUnsubToken(token);
    await sendfoxUnsubscribe(email);
    return NextResponse.redirect("/unsub?status=ok");
  } catch (e) {
    console.error("Unsub error:", e);
    return NextResponse.redirect("/unsub?status=error");
  }
}
