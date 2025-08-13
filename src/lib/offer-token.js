import crypto from "node:crypto";

const SECRET = process.env.NEXT_OFFER_SECRET;

/** Make a signed token for the $197 audit offer (default 36h). */
export function makeOfferToken({ email = "", ttlHours = 36 } = {}) {
  if (!SECRET) throw new Error("Missing NEXT_OFFER_SECRET");
  const iat = Math.floor(Date.now() / 1000);
  const exp = iat + ttlHours * 3600;
  const payload = { p: "audit197", email, iat, exp };
  const b64 = Buffer.from(JSON.stringify(payload)).toString("base64url");
  const sig = crypto.createHmac("sha256", SECRET).update(b64).digest("base64url");
  return `${b64}.${sig}`;
}

/** Verify token and return payload (throws if bad/expired). */
export function verifyOfferToken(t) {
  if (!SECRET) throw new Error("Missing NEXT_OFFER_SECRET");
  const [b64, sig] = String(t || "").split(".");
  const expect = crypto.createHmac("sha256", SECRET).update(b64).digest("base64url");
  if (sig !== expect) throw new Error("bad-signature");
  const payload = JSON.parse(Buffer.from(b64, "base64url").toString());
  if (payload.p !== "audit197") throw new Error("bad-purpose");
  if (payload.exp < Math.floor(Date.now() / 1000)) throw new Error("expired");
  return payload; // { p, email, iat, exp }
}
