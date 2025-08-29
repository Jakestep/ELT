/* emails/ConsultPrep.jsx */
import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Heading,
  Text,
  Hr,
  Img,
  Link,
  Row,
  Column,
} from "@react-email/components";
import * as React from "react";

/**
 * Props shape (all strings unless noted):
 * {
 *   name, email, business, website,
 *   experiences_owner, experiences_user,
 *   knows_need, goals_text,
 *   goals_checks: string[],   // e.g. ["More leads","Faster site"]
 *   resources: string[],      // e.g. ["Logo","Photos"]
 *   wishlist,
 *   siteUrl?,                 // optional override; otherwise computed from env
 *   bookingUrl?,              // optional override; falls back to `${siteUrl}/book`
 * }
 */

export default function ConsultPrepEmail(props = {}) {
  const {
    name = "",
    email = "",
    business = "",
    website = "",
    experiences_owner = "",
    experiences_user = "",
    knows_need = "",
    goals_text = "",
    goals_checks = [],
    resources = [],
    wishlist = "",
    siteUrl: siteUrlProp,
    bookingUrl: bookingUrlProp,
  } = props;

  // Build absolute URLs for email assets/links
  const siteUrl =
    siteUrlProp ||
    (process.env.NODE_ENV === "production"
      ? process.env.NEXT_SITE_URL_PROD
      : process.env.NEXT_SITE_URL_DEV) ||
    "https://everlesstech.com";

  const bookingUrl = bookingUrlProp || `${siteUrl.replace(/\/+$/, "")}/book`;
  const homeUrl = `${siteUrl.replace(/\/+$/, "")}/`;
  const privacyUrl = `${siteUrl.replace(/\/+$/, "")}/privacy`;

  const logo20 = `${siteUrl.replace(/\/+$/, "")}/email/ELT-20x20.png`;
  const logo56 = `${siteUrl.replace(/\/+$/, "")}/email/ELT-56x56.png`;

  const previewText = `Thanks ${name || ""}! Here’s a copy of your consultation prep for EverLessTech.`;

  const listOrDash = (arr) =>
    Array.isArray(arr) && arr.length ? arr.join(", ") : "—";

  const Lines = ({ value }) => {
    if (!value) return <Text style={styles.value}>—</Text>;
    const parts = String(value).split(/\r?\n/);
    return (
      <Text style={styles.value}>
        {parts.map((p, i) => (
          <React.Fragment key={i}>
            {p || "\u00A0"}
            {i < parts.length - 1 ? <br /> : null}
          </React.Fragment>
        ))}
      </Text>
    );
  };

  const KV = ({ label, children }) => (
    <Row style={styles.kvRow}>
      <Column style={styles.kvLabelCol} width="160">
        <Text style={styles.kvLabel}>{label}</Text>
      </Column>
      <Column style={styles.kvValueCol}>
        {typeof children === "string" ? (
          <Text style={styles.value}>{children || "—"}</Text>
        ) : (
          children
        )}
      </Column>
    </Row>
  );

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Body style={styles.body}>
        <Container style={styles.container}>
          {/* Header */}
          <Section style={styles.header}>
            <Row>
              <Column style={{ width: 28 }}>
                <Img
                  src={logo20}
                  alt="EverLessTech"
                  width="20"
                  height="20"
                  style={{ display: "block", borderRadius: 4 }}
                />
              </Column>
              <Column>
                <Heading as="h2" style={styles.h2}>
                  Consultation Prep – EverLessTech
                </Heading>
                <Text style={styles.subhead}>
                  Thanks{name ? `, ${name}` : ""}! Here’s a copy of what you
                  shared. A copy was also sent to Jake.
                </Text>
              </Column>
            </Row>
          </Section>

          <Hr style={styles.hr} />

          {/* Contact */}
          <Section style={styles.block}>
            <Heading as="h3" style={styles.h3}>
              Your Contact
            </Heading>
            <KV label="Name">{name || "—"}</KV>
            <KV label="Email">{email || "—"}</KV>
            <KV label="Business">{business || "—"}</KV>
            <KV label="Website">{website || "—"}</KV>
          </Section>

          {/* Experiences */}
          <Section style={styles.block}>
            <Heading as="h3" style={styles.h3}>
              Past Website Experiences
            </Heading>
            <KV label="As owner">
              <Lines value={experiences_owner} />
            </KV>
            <KV label="As a user">
              <Lines value={experiences_user} />
            </KV>
          </Section>

          {/* Needs */}
          <Section style={styles.block}>
            <Heading as="h3" style={styles.h3}>
              What You Know You Need
            </Heading>
            <KV label="Notes">
              <Lines value={knows_need} />
            </KV>
          </Section>

          {/* Goals */}
          <Section style={styles.block}>
            <Heading as="h3" style={styles.h3}>
              Goals & Vision
            </Heading>
            <KV label="Free text">
              <Lines value={goals_text} />
            </KV>
            <KV label="Checked goals">{listOrDash(goals_checks)}</KV>
          </Section>

          {/* Resources */}
          <Section style={styles.block}>
            <Heading as="h3" style={styles.h3}>
              Current Resources
            </Heading>
            <KV label="You have">{listOrDash(resources)}</KV>
          </Section>

          {/* Wishlist */}
          <Section style={styles.block}>
            <Heading as="h3" style={styles.h3}>
              Open Wishlist
            </Heading>
            <KV label="Dream features">
              <Lines value={wishlist} />
            </KV>
          </Section>

          <Hr style={styles.hr} />

          {/* CTA + Footer */}
          <Section style={styles.footer}>
            <Row style={{ marginBottom: 10 }}>
              <Column style={{ width: 64 }}>
                <Img
                  src={logo56}
                  alt="EverLessTech"
                  width="56"
                  height="56"
                  style={{ display: "block", borderRadius: 12 }}
                />
              </Column>
              <Column>
                <Text style={styles.footerTitle}>Next steps</Text>
                <Text style={styles.footerText}>
                  If you haven’t scheduled your free consultation yet, pick a
                  time that works for you:
                </Text>
                <Link href={bookingUrl} style={styles.buttonLink}>
                  Schedule your free consultation →
                </Link>
              </Column>
            </Row>

            <Text style={styles.smallMeta}>
              EverLessTech ·{" "}
              <Link href={homeUrl} style={styles.link}>
                everlesstech.com
              </Link>{" "}
              ·{" "}
              <Link href={privacyUrl} style={styles.link}>
                Privacy
              </Link>
            </Text>

            <Text style={styles.tinyNote}>
              You’re receiving this because you asked us to email a copy of your
              consultation prep to you and Jake from EverLessTech.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

/* ---------- styles ---------- */
const styles = {
  body: {
    backgroundColor: "#f6f8fb",
    margin: 0,
    padding: "24px 0",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    color: "#111827",
  },
  container: {
    maxWidth: "640px",
    margin: "0 auto",
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: "24px 24px 20px",
    border: "1px solid #e5e7eb",
  },
  header: {
    marginBottom: 6,
  },
  h2: {
    margin: 0,
    fontSize: "20px",
    lineHeight: "28px",
    fontWeight: 700,
    color: "#0f172a",
  },
  subhead: {
    margin: "6px 0 0",
    fontSize: "13px",
    lineHeight: "20px",
    color: "#4b5563",
  },
  hr: {
    borderColor: "#e5e7eb",
    margin: "16px 0",
  },
  block: {
    marginTop: 8,
    marginBottom: 8,
  },
  h3: {
    margin: "0 0 8px",
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: 600,
    color: "#111827",
  },
  kvRow: {
    marginBottom: 8,
  },
  kvLabelCol: {
    verticalAlign: "top",
    paddingRight: 10,
  },
  kvValueCol: {
    verticalAlign: "top",
  },
  kvLabel: {
    margin: 0,
    fontSize: "12px",
    lineHeight: "18px",
    color: "#6b7280",
    fontWeight: 600,
    whiteSpace: "nowrap",
  },
  value: {
    margin: 0,
    fontSize: "14px",
    lineHeight: "22px",
    color: "#111827",
    wordBreak: "break-word",
  },
  footer: {
    marginTop: 6,
  },
  footerTitle: {
    margin: 0,
    fontSize: "14px",
    lineHeight: "20px",
    fontWeight: 700,
    color: "#111827",
  },
  footerText: {
    margin: "6px 0 10px",
    fontSize: "13px",
    lineHeight: "20px",
    color: "#374151",
  },
  buttonLink: {
    display: "inline-block",
    backgroundColor: "#2f5d62",
    color: "#ffffff",
    textDecoration: "none",
    fontSize: "14px",
    lineHeight: "20px",
    padding: "10px 14px",
    borderRadius: 10,
  },
  smallMeta: {
    margin: "16px 0 0",
    fontSize: "12px",
    lineHeight: "18px",
    color: "#6b7280",
  },
  tinyNote: {
    margin: "6px 0 0",
    fontSize: "11px",
    lineHeight: "16px",
    color: "#9ca3af",
  },
  link: {
    color: "#2f5d62",
    textDecoration: "underline",
  },
};
