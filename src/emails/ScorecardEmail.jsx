import * as React from "react";
import {
  Html,
  Head,
  Body,
  Section,
  Heading,
  Text,
  Hr,
  Img,
  Button,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

const COLORS = {
  primary: "#2F5D62",
  surface: "#E8F1F2",
  surface2: "#D9E2EC",
  text: "#1F2937",
  muted: "#475569",
  border: "#E5E7EB",
  bg: "#F8FAFC",
};

export default function ScorecardEmail({
  name = "friend",
  auditUrl = "https://everlesstech.com/venue/audit",
  logo28 = "https://everlesstech.com/email/eltlogo-56.png",
  logo20 = "https://everlesstech.com/email/eltlogo-20.png",
}) {
  return (
    <Html>
      <Head />
      <Tailwind>
        {/* keep your body colors */}
        <Body className="mx-auto max-w-[600px]">
          {/* header: no background panel, no container clamp */}
          <Section className="px-6 py-5">
            <div className="flex items-center gap-3">
              <Img src={logo28} alt="EverLessTech" width="28" height="28" />
              <Text
                className="m-0 text-sm font-semibold tracking-wide"
                style={{ color: COLORS.primary }}
              >
                EverLessTech — Less tech. More life.
              </Text>
            </div>
          </Section>

          {/* body: same spacing you used (px-3/py-7, leading-2) */}
          <Section className="px-3 py-7">
            <Heading as="h2" className="m-0 text-2xl font-semibold">
              You = The 💣
            </Heading>

            <Text className="mt-3 leading-2">Hey {name}!</Text>

            <Text className="mt-1 leading-2">
              Thank you so much for giving us the chance to help your business!
              <br />
            </Text>

            <Text className="mt-4 leading-2">
              I'm Jake, and I <span className="font-semibold">despise</span>{" "}
              technology (with a passion).
            </Text>
            <Text className="mt-4 leading-2">
              So much so that my mission is to reduce the amount of time{" "}
              <span className="font-semibold">you</span> have to spend on it.
            </Text>
            <Text className="mt-4 leading-2">
              By providing the most <i>efficient</i>,{" "}
              <b>
                <i>purposeful</i>
              </b>
              , and{" "}
              <u>
                <i>
                  <b>value driven</b>
                </i>
              </u>{" "}
              software possible.
            </Text>

            <Text className="mt-5 leading-2">
              Speaking of value, I've invited you to join my newsletter, and it
              would mean the world to me if you join.
              <br />
              I'll bring you along on the ride as I search for and create
              software that makes our time spent on tech more meaningful :D
              <br />
              <span className="text-sm">(and maybe some deals too)</span>
            </Text>

            {/* attachment note: no colored box */}
            <Text className="mt-4 leading-2">
              I have attached your free, personalized{" "}
              <strong>Business Efficiency Scorecard</strong> with{" "}
              <i>actionable</i> tips to increase your website’s <b>value</b>.
            </Text>

            {/* CTA: same copy, centered button; no container clamp */}
            <Section className="">
              <Text
                className="m-0 mt-6 mb-2 text-sm"
                style={{ color: COLORS.muted }}
              >
                By the way, this link gives you <b>$100</b> off my business-wide tech audit, but only for the next <i>36 hours</i>. <b><i>Act now</i></b> or forever hold your tech pain tight.
              </Text>
              <Button
                href={auditUrl}
                className="mx-auto mt-4 flex w-fit items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold text-white no-underline"
                style={{ backgroundColor: COLORS.primary }}
              >
                Schedule for <s>$297</s> $197
              </Button>
            </Section>

            <Hr className="my-6" style={{ borderColor: COLORS.border }} />

            <Text className="m-0 leading-2">P.S. You rock! 🪨</Text>
            <Text className="m-0 leading-2">
              P.P.S. Forward this email to your web developer so they can make
              these changes for you
            </Text>
            <Text className="mt-1 leading-2">
              — Jake, EverLessTech{" "}
              <Img
                src={logo20}
                alt="ELT"
                width="20"
                height="20"
                style={{
                  display: "inline-block",
                  verticalAlign: "text-bottom",
                }}
              />
            </Text>
          </Section>
        </Body>
      </Tailwind>
    </Html>
  );
}
