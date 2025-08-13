import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";
import ScorecardEmail from "@/emails/ScorecardEmail";
import { makeOfferToken } from "../offer-token";

const supabase = createClient(
  process.env.NEXT_SUPABASE_URL,
  process.env.NEXT_SUPABASE_SECRET_KEY,
  {
    auth: { persistSession: false },
  },
);
const resend = new Resend(process.env.NEXT_RESEND_API_KEY);

export async function storePdf(fileBuffer, path) {
  const { error } = await supabase.storage
    .from("scorecards")
    .upload(path, fileBuffer, { contentType: "application/pdf", upsert: true });

  if (error) throw error;

  const { data } = supabase.storage.from("scorecards").getPublicUrl(path);
  return data.publicUrl;
}

export async function sendScorecardEmail({
  name: n,
  email,
  pdfBuffer,
}) {

  const t = makeOfferToken({ email, ttlHours: 36 });

  const auditUrl = `${process.env.NEXT_SITE_URL}/api/scorecard/offer?t=${t}&next=/audit`;

  // pass auditUrl into your React Email template <Button href={auditUrl} />

  let name = n.split(" ")[0];
  await resend.emails.send({
    from: process.env.NEXT_RESEND_FROM, // "Jake with EverLessTech <jake@everlesstech.com>"
    to: email,
    subject: "Your FREE Scorecard is here..",
    react: ScorecardEmail({ name, auditUrl}),
    text: textFallback({ name, auditUrl}),
    attachments: [
      {
        filename: `Scorecard_Report-${name}.pdf`,
        content: pdfBuffer.toString("base64"),
      },
    ],
    reply_to: "jake@everlesstech.com",
  });
}

function textFallback({
  name = "friend",
  auditUrl = "https://everlesstech.com/audit",
}) {
  return [
    `You = The 💣`,
    ``,
    `Hey ${name}!`,
    ``,
    `Thank you so much for joining the EverLessTech mission:`,
    `Less tech. More Life.`,
    ``,
    `I'm Jake, and I despise technology with a passion.`,
    `So much so that my mission is to make the highest quality technology to serve you,`,
    `so you spend as little time on it as possible—while getting the best results.`,
    ``,
    `Attached is your free, personalized Business Efficiency Scorecard with tips to increase your website’s value.`,
    ``,
    `Speaking of value—that’s what I hope to give you in this newsletter.`,
    `What could I write about to provide value to you? Just hit reply. I actually read these.`,
    ``,
    `Warm CTA: Ready for a specific, step-by-step plan? The $197 Audit gives you a clear one-pager with fixes, mockups, and priority order: ${auditUrl}`,
    ``,
    `P.S. You rock!`,
    `— Jake, EverLessTech`,
    ``,
  ].join("\n");
}
