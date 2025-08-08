import * as React from "react";
import {
  Html, Head, Body, Container, Section, Heading,
  Text, Hr, Img, Link, Button
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

// Email-safe brand palette (match your globals.css)
const COLORS = {
  primary:  "#2F5D62",
  surface:  "#E8F1F2",
  surface2: "#D9E2EC",
  text:     "#1F2937",
  muted:    "#475569",
  border:   "#E5E7EB",
  bg:       "#F8FAFC",
};

export default function ScorecardEmail({
  name = "friend",
  auditUrl = "https://everlesstech.com/audit",
  // Logo URLs (PNG, not SVG)
  logo28 = "https://everlesstech.com/email/eltlogo-56.png",
  logo20 = "https://everlesstech.com/email/eltlogo-20.png",
}) {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="m-0 bg-[#F8FAFC] text-[#1F2937]">
          <Container className="mx-2 my-6 w-full bg-white rounded-xl border border-[#E5E7EB] shadow-sm">
            {/* Header */}
            <Section className="px-6 py-5 border-b border-[#E5E7EB] rounded-t-xl" style={{ backgroundColor: COLORS.surface }}>
              <div className="flex items-center gap-3">
                <Img src={logo28} alt="EverLessTech" width="28" height="28" />
                <Text className="m-0 text-sm font-semibold tracking-wide" style={{ color: COLORS.primary }}>
                  EverLessTech — Less tech. More life.
                </Text>
              </div>
            </Section>

            {/* Body */}
            <Section className="px-3 py-7">
              <Heading as="h2" className="m-0 text-2xl font-semibold">You = The 💣</Heading>

              <Text className="mt-3 leading-2">Hey {name}!</Text>

              <Text className="mt-1 leading-2">
                Thank you so much for giving us the chance to help your business!<br />
              </Text>

              <Text className="mt-4 leading-2">
                I'm Jake, and I <span className="font-semibold">despise</span> technology with a passion.
              </Text>
              <Text className={`mt-4 leading-2`} >
                So much so that my mission is to reduce the amount of time <span className={`font-semibold`} >you</span> have to spend on technology.
              </Text>
              <Text className={`mt-4 leading-2`} >
                By providing the most <i>efficient</i>, <b><i>purposeful</i></b>, and <u><i><b>value driven</b></i></u> software possible.
              </Text>

              <Text className="mt-5 leading-2">
                Speaking of value, I've invited you to join my newsletter, and it would mean the world to me if you join.
                <br />
                I'll bring you along on the ride as I search for and create software that makes our time spent on tech more meaningful :D
                <br />
                <span className={`text-sm`}>(and maybe some deals too)</span>
              </Text>

              <Section className="mt-4 rounded-lg px-4 py-3" style={{ backgroundColor: COLORS.surface2 }}>
                <Text className="m-0">
                  I have attached your free, personalized <strong>Business Efficiency Scorecard</strong> with <i>actionable</i> tips to
                  increase your website’s <b>value</b>.
                </Text>
              </Section>

              {/* Warm CTA */}
              <Section className="">
                <Text className="m-0 mt-6 mb-2 text-sm" style={{ color: COLORS.muted }}>
                  Ready for a specific, step‑by‑step plan? My <s>$297</s> $197 Audit gives you a clear one‑pager with fixes,
                  mockups, and priority order.
                </Text>
                <Button
                  href={auditUrl}
                  className="flex w-fit items-center justify-center rounded-lg px-5 py-3 text-white text-sm font-semibold no-underline mx-auto mt-4"
                  style={{ backgroundColor: COLORS.primary }}
                >
                  Schedule an Audit
                </Button>
              </Section>

              <Hr className="my-6" style={{ borderColor: COLORS.border }} />

              <Text className="m-0 leading-2">P.S. You rock! 🪨</Text>
              <Text className="mt-1 leading-2">
                — Jake, EverLessTech{" "}
                <Img src={logo20} alt="ELT" width="20" height="20" style={{ display: "inline-block", verticalAlign: "text-bottom" }} />
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
