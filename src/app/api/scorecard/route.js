import { NextResponse } from "next/server";
import { quickHead, fetchFullMetrics } from "@/lib/scorecard/metrics";
import { generatePdf } from "@/lib/scorecard/pdf";
import { sendScorecardEmail } from "@/lib/scorecard/actions"; // will use attachment
import handleCreateSubscriber from "@/lib/mailerlite";
// import { storePdf } from "@/lib/scorecard/actions"; // optional archive

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req) {
  const {
    name,
    email,
    url: rawUrl,
    goal = "",
    frustration = "",
  } = await req.json();
  if (!name || !email || !rawUrl) {
    return NextResponse.json(
      { ok: false, error: "Missing name, email, or website URL." },
      { status: 400 },
    );
  }
  const url = normalizeUrl(rawUrl);

  // FAST checks (no Lighthouse): key + URL reachable
  try {
    await quickHead(url);
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: err.message || String(err) },
      { status: 400 },
    );
  }

  // ➋ Kick off your background job (PSI → PDF → Resend initial email w/ attachment)
  if (process.env.NODE_ENV == 'development') {
    await runInBackground({ name, email, url, goal, frustration }).catch(
      console.error
    );
  } else {
    runInBackground({ name, email, url, goal, frustration }).catch(
      console.error
    );
  }


  // ➊ Add/Update in Mailerlite list (blocking, so you know they’re subscribed)
  try {
    await handleCreateSubscriber({name, email, url, goal, frustration})
  } catch (e) {
    console.error("SendFox subscribe failed:", e);
    return NextResponse.json(
      {
        ok: false,
        error: "Couldn’t add you to our email list. Please try again.",
      },
      { status: 400 },
    );
  }

  return new Response(
    JSON.stringify({
      ok: true,
      message: "Generating your scorecard—check your email soon.",
    }),
    {
      status: 202,
      headers: {
        "content-type": "application/json",
        "x-vercel-background": "1",
      },
    },
  );
}

async function runInBackground({ name, email, url, goal, frustration }) {
  // Full PSI (you already tuned timeouts/retries)
  const metrics = await fetchFullMetrics(url);

  // Make PDF
  const pdfBuffer = await generatePdf({
    name,
    email,
    url,
    goal,
    frustration,
    metrics,
    createdAt: new Date().toISOString(),
  });

  // Send as ATTACHMENT (no link needed)
  await sendScorecardEmail({ name, url, email, goal, pdfBuffer });

  // Optional: archive in Supabase
  // const path = `scorecards/${Date.now()}-${encodeURIComponent(url)}.pdf`;
  // await storePdf(pdfBuffer, path);
}

function normalizeUrl(input) {
  const s = input.trim();
  const withProto = /^https?:\/\//i.test(s) ? s : `https://${s}`;
  return new URL(withProto).href;
}
