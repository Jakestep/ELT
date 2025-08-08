import crypto from "node:crypto";
const SECRET = process.env.NEXT_JOB_SECRET;

export function makeUnsubToken(email) {
  const payload = Buffer.from(JSON.stringify({ email })).toString("base64url");
  const sig = crypto.createHmac("sha256", SECRET).update(payload).digest("base64url");
  return `${payload}.${sig}`;
}

export function readUnsubToken(token) {
  const [payload, sig] = token.split(".");
  const check = crypto.createHmac("sha256", SECRET).update(payload).digest("base64url");
  if (sig !== check) throw new Error("Invalid token");
  return JSON.parse(Buffer.from(payload, "base64url").toString()).email;
}
