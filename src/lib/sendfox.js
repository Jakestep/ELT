const BASE = "https://api.sendfox.com";

function authHeaders() {
  const token = process.env.NEXT_SENDFOX_TOKEN;
  if (!token) throw new Error("Missing NEXT_SENDFOX_TOKEN");
  return {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
}

/** Create/update a contact and add to list(s). */
export async function sendfoxUpsertContact({
  email,
  first_name,
  last_name,
  ip,
  listIds = [],
}) {
  const res = await fetch(`${BASE}/contacts`, {
    method: "POST",
    headers: authHeaders(),
    body: JSON.stringify({
      email,
      first_name,
      last_name,
      ip_address: ip,
      lists: listIds.map(Number),
    }),
    cache: "no-store",
  });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`SendFox upsert failed: ${res.status} ${text}`);
  }
  return res.json(); // { id, email, ... }
}

/** Unsubscribe a contact by email. */
export async function sendfoxUnsubscribe(email) {
  const res = await fetch(`${BASE}/contacts/unsubscribe`, {
    method: "POST",
    headers: authHeaders(),
    body: JSON.stringify({ email }),
    cache: "no-store",
  });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`SendFox unsubscribe failed: ${res.status} ${text}`);
  }
  return res.json();
}
