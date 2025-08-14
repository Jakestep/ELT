import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  pdf,
} from "@react-pdf/renderer";

/* ---------- Brand palette (email-safe colors) ---------- */
const COLORS = {
  primary: "#2F5D62",
  surface: "#D9E2EC",
  text: "#1F2937",
  muted: "#475569",
  border: "#E5E7EB",
};

/* ---------- Styles ---------- */
const styles = StyleSheet.create({
  page: { padding: 36, color: COLORS.text, fontSize: 11, fontFamily: "Helvetica" },
  h1: { fontSize: 20, color: COLORS.primary, marginBottom: 6, fontWeight: 700 },
  h2: { fontSize: 14, color: COLORS.primary, marginTop: 18, marginBottom: 6, fontWeight: 700 },
  p: { marginBottom: 6, lineHeight: 1.4 },
  small: { fontSize: 9, color: COLORS.muted },
  pill: { paddingVertical: 6, paddingHorizontal: 10, backgroundColor: COLORS.surface, borderRadius: 6, textAlign: "center", fontWeight: 700 },
  box: { borderWidth: 1, borderColor: COLORS.primary, backgroundColor: "#fff", borderRadius: 8, padding: 12, marginBottom: 10 },
  softBox: { backgroundColor: COLORS.surface, borderRadius: 8, padding: 10, marginBottom: 10 },
  row: { flexDirection: "row", gap: 8 },
  col: { flex: 1 },

  /* --- table fixes --- */
  table: { borderWidth: 1, borderColor: COLORS.primary, borderRadius: 8, overflow: "hidden", marginBottom: 10 },
  tr: { flexDirection: "row" },
  th: { flex: 1, backgroundColor: COLORS.surface, color: COLORS.primary, padding: 8, fontWeight: 700, borderRightWidth: 1, borderRightColor: COLORS.primary },
  thFirst: { borderTopLeftRadius: 8 }, // NEW
  thLast: { borderTopRightRadius: 8, borderRightWidth: 0 }, // NEW
  td: { flex: 1, padding: 8, borderTopWidth: 1, borderTopColor: COLORS.primary, borderRightWidth: 1, borderRightColor: COLORS.primary },
  tdLast: { borderRightWidth: 0 },
  center: { textAlign: "center" },
  footer: { marginTop: 18, paddingTop: 10, borderTopWidth: 1, borderTopColor: COLORS.border, color: COLORS.muted, fontSize: 9, textAlign: "center" },
});


/* ---------- Helpers ---------- */
const safe = (v, fallback = "—") => (v === null || v === undefined || Number.isNaN(v) ? fallback : v);
const pct = (score0to1) => (score0to1 == null ? "—" : String(Math.round(score0to1 * 100)));
const ms = (v) => (v == null ? "—" : `${Math.round(v)} ms`);
const s = (v) => (v == null ? "—" : `${(v / 1000).toFixed(v >= 1000 ? 1 : 2)} s`);

function computeOverall(metrics) {
  if (!metrics) return 0;
  const m = metrics.mobile || {};
  const d = metrics.desktop || {};
  const mobilePerf = (m.perfScore ?? 0) * 100;
  const desktopPerf = (d.perfScore ?? 0) * 100;
  const lcpScore = m.lcpMs == null ? 0 : lcpToScore(m.lcpMs);
  const clsScore = m.cls == null ? 0 : clsToScore(m.cls);
  const overall = Math.round(0.45 * mobilePerf + 0.25 * desktopPerf + 0.2 * lcpScore + 0.1 * clsScore);
  return Math.max(0, Math.min(100, overall));
}
function lcpToScore(msVal) {
  if (msVal <= 2500) return 100;
  if (msVal <= 4000) return Math.round(100 - ((msVal - 2500) / 1500) * 40);
  if (msVal <= 6000) return Math.round(60 - ((msVal - 4000) / 2000) * 40);
  return 10;
}
function clsToScore(cls) {
  if (cls <= 0.1) return 100;
  if (cls <= 0.25) return Math.round(100 - ((cls - 0.1) / 0.15) * 40);
  if (cls <= 0.5) return Math.round(60 - ((cls - 0.25) / 0.25) * 40);
  return 10;
}

/* ---------- Rule-based quick wins (short, “why it matters”) ---------- */
function quickWins(goal, m = {}, d = {}) {
  const recs = [];

  // Images / media
  if (m.lcpMs != null && m.lcpMs > 3000) {
    recs.push({
      title: "Make pictures lighter",
      why: "Heavy pictures make people wait. Faster pages keep people around.",
      how: "Use AVIF/WebP, compress to ~80%, set sizes, lazy‑load below the fold.",
    });
  }

  // JS / code
  if (m.tbtMs != null && m.tbtMs > 200) {
    recs.push({
      title: "Cut heavy code",
      why: "When code is heavy, the page is too busy to listen.",
      how: "Remove unused scripts, split big bundles, load non‑essentials later.",
    });
  }

  // Layout shift
  if (m.cls != null && m.cls > 0.1) {
    recs.push({
      title: "Stop page jumpiness",
      why: "Jumping pages feel broken. People click the wrong stuff and leave.",
      how: "Give images set width/height, reserve space for embeds and fonts.",
    });
  }

  // General perf
  if ((m.perfScore ?? 1) < 0.7 || (d.perfScore ?? 1) < 0.7) {
    recs.push({
      title: "Cache and serve fast",
      why: "Fast pages feel easy. Easy wins trust.",
      how: "Turn on caching/CDN, keep server close to users, trim redirects.",
    });
  }

  // Goal-based nudges
  if (goal === "More leads") {
    recs.push({
      title: "Make the next step clear",
      why: "If the button is clear, more people click it.",
      how: "One main button up top. Simple form. Use action words like “Get the plan”.",
    });
  } else if (goal === "Save time") {
    recs.push({
      title: "Automate follow‑ups",
      why: "Less typing, fewer misses.",
      how: "Send form data to your inbox and a sheet/CRM. Set auto‑replies.",
    });
  } else if (goal === "Look pro") {
    recs.push({
      title: "Clean look, same everywhere",
      why: "A steady look builds trust.",
      how: "Use one font, one button style, and even spacing on all pages.",
    });
  }

  return recs.slice(0, 4);
}

/* ---------- Component ---------- */
export default function ScorecardDoc({ name, email, url, goal, metrics, createdAt }) {
  const m = metrics?.mobile || {};
  const d = metrics?.desktop || {};
  const overall = computeOverall(metrics);
  const recs = quickWins(goal, m, d);

  return (
    <Document>
      <Page size="LETTER" style={styles.page}>
        {/* Title */}
        <Text style={styles.h1}>Business Efficiency Scorecard</Text>
        <Text style={styles.p}>This report shows how your site is doing and what to fix first. Simple, clear, and ready to use today.</Text>

        {/* Summary */}
        <View style={styles.box}>
          <Text style={[styles.center, { fontSize: 14, fontWeight: 700 }]}>Overall Score: {overall}/100</Text>
          <Text style={[styles.center, styles.small]}>{url}</Text>
          <Text style={[styles.center, styles.small]}>
            For: {name}{email ? ` · ${email}` : ""}{createdAt ? ` · ${new Date(createdAt).toLocaleDateString()}` : ""}
          </Text>
          <Text style={[styles.center, styles.small]}>Goal: {goal || "—"}</Text>
        </View>

        {/* Performance */}
        <Text style={styles.h2}>Speed & Stability</Text>

        {(!metrics || (!metrics.mobile && !metrics.desktop)) ? (
          <View style={styles.softBox}>
            <Text style={styles.p}>We couldn’t load the numbers this time. That’s okay — your plan below still helps.</Text>
          </View>
        ) : (
          <>
            <View style={styles.table}>
              <View style={styles.tr}>
                <Text style={[styles.th, styles.thFirst]}>What we checked</Text>
                <Text style={styles.th}>Mobile</Text>
                <Text style={[styles.th, styles.thLast]}>Desktop</Text>
              </View>

              <View style={styles.tr}>
                <Text style={styles.td}>Performance score (0–100)</Text>
                <Text style={styles.td}>{pct(m.perfScore)}</Text>
                <Text style={[styles.td, styles.tdLast]}>{pct(d.perfScore)}</Text>
              </View>

              <View style={styles.tr}>
                <Text style={styles.td}>Largest Contentful Paint (LCP)</Text>
                <Text style={styles.td}>{s(m.lcpMs)}</Text>
                <Text style={[styles.td, styles.tdLast]}>—</Text>
              </View>

              <View style={styles.tr}>
                <Text style={styles.td}>Cumulative Layout Shift (CLS)</Text>
                <Text style={styles.td}>{safe(m.cls)}</Text>
                <Text style={[styles.td, styles.tdLast]}>{safe(d.cls)}</Text>
              </View>

              <View style={styles.tr}>
                <Text style={styles.td}>Total Blocking Time (TBT)</Text>
                <Text style={styles.td}>{ms(m.tbtMs)}</Text>
                <Text style={[styles.td, styles.tdLast]}>{ms(d.tbtMs)}</Text>
              </View>
            </View>

            {/* Why it matters per metric */}
            <View style={styles.softBox}>
              <Text style={{ fontWeight: 700, marginBottom: 4 }}>Why these matter</Text>
              <Text style={styles.p}>
                <Text style={{ fontWeight: 700 }}>LCP:</Text> shows how fast the biggest thing shows up. Slow LCP makes people leave.
              </Text>
              <Text style={styles.p}>
                <Text style={{ fontWeight: 700 }}>CLS:</Text> shows how much the page jumps. Jumping pages feel broken.
              </Text>
              <Text style={styles.p}>
                <Text style={{ fontWeight: 700 }}>TBT:</Text> shows when the page is too busy to listen. Big TBT makes clicks feel laggy.
              </Text>
            </View>
          </>
        )}

        {/* Top wins */}
        <Text style={styles.h2}>Your Top Fixes</Text>
        {recs.length ? (
          <View style={styles.box}>
            {recs.map((r, i) => (
              <View key={i} style={{ marginBottom: 8 }}>
                <Text style={{ fontWeight: 700 }}>• {r.title}</Text>
                <Text style={styles.p}>Why it matters: {r.why}</Text>
                <Text style={styles.p}>What to do: {r.how}</Text>
              </View>
            ))}
          </View>
        ) : (
          <View style={styles.softBox}>
            <Text style={styles.p}>Nice work — no big issues found. A short audit can still find small wins.</Text>
          </View>
        )}

        {/* Simple guidance */}
        <Text style={styles.h2}>How to think about this</Text>
        <View style={styles.softBox}>
          <Text style={styles.p}>• Fix phone (mobile) first. Most people visit on phones.</Text>
          <Text style={styles.p}>• Make pictures lighter and load extra stuff later.</Text>
          <Text style={styles.p}>• Use one clear button at the top that says what happens next.</Text>
        </View>

        {/* CTA */}
        <View style={{ marginTop: 8 }}>
          <Text style={styles.h2}>Next Step</Text>
          <Text style={styles.p}>Want a clear one‑page plan with exact fixes and mockups?</Text>
          <Text style={styles.pill}>Book the $197 Audit and we’ll map it out for you.</Text>
        </View>

        {/* Footer */}
        <Text style={styles.footer}>EverLessTech — Less tech, more life · everlesstech.com</Text>
      </Page>
    </Document>
  );
}

/* ---------- Buffer generator ---------- */
export async function generatePdf(data) {
  const instance = pdf(<ScorecardDoc {...data} />);
  return await instance.toBuffer();
}
