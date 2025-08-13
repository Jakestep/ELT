import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Section,
  Text,
  Tailwind,
  Img,
} from "@react-email/components";
import * as React from "react";

export const ClientEmail = ({ name = "there" }) => {
  return (
    <Html>
      <Head />
      <Preview>
        Thanks for reaching out to EverLessTech — we’ll be in touch soon!
      </Preview>
      <Tailwind>
        <Body className="bg-white font-sans text-gray-800">
          <Container className="mx-auto my-10 max-w-xl rounded-lg border border-gray-200 p-6 shadow-sm">
            <Section className="mb-6 text-center">
              <Img
                src="https://everlesstech.com/icons/ELT-192x192.png"
                alt="EverLessTech Logo"
                width={120}
                height={120}
                className="mx-auto mb-4"
              />
              <Text className="text-2xl font-bold text-[#2f5d62]">
                Thanks {name}!
              </Text>
              <Text className="mt-2 text-base text-gray-600">
                We got your message, and we’re already brewing a plan. Expect a
                response within 24 hours :D
              </Text>
            </Section>

            <Section className="text-sm leading-relaxed text-gray-700">
              <Text className="mb-4">
                We’ll review your submission and follow up as soon as possible.
                In the meantime, if you have additional thoughts or questions,
                feel free to email us directly at:
              </Text>
              <Text className="font-medium text-[#3c9d84]">
                <a href="mailto:jake@everlesstech.com">jake@everlesstech.com</a>
              </Text>
            </Section>

            <Section className="mt-8 border-t border-gray-200 pt-4 text-center text-xs text-gray-500">
              <Text>
                Jake —{" "}
                <a href="https://everlesstech.com" className="text-[#3c9d84]">
                  EverLessTech.com
                </a>
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ClientEmail;
