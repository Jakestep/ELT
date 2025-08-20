import MailerLite from "@mailerlite/mailerlite-nodejs";

const API_KEY = process.env.NEXT_MAILERLITE_API_KEY;
const GROUP_ID = process.env.NEXT_MAILERLITE_GROUP_ID;
/**
 * server/mailerlite/handleCreateSubscriber.js
 *
 * Uses the official MailerLite Node SDK to create/update a subscriber
 * and add them to a specific group.
 *
 * Run server-side (e.g., Vite dev server API route). Never expose API keys to the browser.
 *
 * Env vars:
 *   - API_KEY  (MailerLite API key)
 *   - GROUP_ID (MailerLite Group ID)
 */


// Instantiate once to reuse connection pool.
const mailerlite = new MailerLite({ api_key: API_KEY });

/** Convert various date inputs to YYYY-MM-DD (UTC). */
function toYMD(dateInput) {
  if (!dateInput) return undefined;
  const d = new Date(dateInput);
  if (Number.isNaN(d.getTime())) return undefined; // why: avoid API 422 on invalid date
  const yyyy = d.getUTCFullYear();
  const mm = String(d.getUTCMonth() + 1).padStart(2, "0");
  const dd = String(d.getUTCDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

/**
 * Create/Update a subscriber and add to a group.
 *
 * @param {{name?: string, email: string, weddingDate?: string|Date}} data
 * @returns {Promise<any>} MailerLite API response body
 */
export const handleCreateSubscriber = async (data) => {
  const { name, email, url, goal, frustration } = data ?? {};
  const groupId = GROUP_ID;

  if (!API_KEY) throw new Error("API_KEY env var is required");
  if (!groupId) throw new Error("GROUP_ID env var is required");
  if (!email) throw new Error("email is required");

  // const weddingYMD = toYMD(weddingDate);

  // Build request; `groups` ensures assignment to the specified group.
  const params = {
    email,
    fields: {
      ...(name ? { name } : {}),
      ...(email ? { email } : {}),
      ...(url ? { url } : {}),
      ...(goal ? { goal } : {}),
      ...(frustration ? { frustration } : {}),
    },
    groups: [groupId],
    // status: "unconfirmed", // enable if you want double opt-in flows
  };

  try {
    const response = await mailerlite.subscribers.createOrUpdate(params);
    console.log(
      `[MailerLite] Subscribed/updated email=${email} group=${groupId} id=${response?.data?.id ?? "?"}`
    );
    return response?.data ?? response;
  } catch (error) {
    const status = error?.response?.status;
    const body = error?.response?.data;
    console.error(
      `[MailerLite] Failed to subscribe email=${email} status=${status} body=${JSON.stringify(body)}`
    );
    // Surface a clean error up the stack without leaking secrets
    const err = new Error(`MailerLite error${status ? ` (${status})` : ""}`);
    err.status = status;
    err.details = body;
    throw err;
  }
};

export default handleCreateSubscriber;
