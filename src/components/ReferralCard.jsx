// components/ReferralCard.jsx
import Link from "next/link";
import { redirect } from "next/navigation";
import { sendReferral } from "@/emails/send";

export default function ReferralCard({ referrerName = "", referrerEmail = "" }) {
  async function action(formData) {
    "use server";
    const res = await sendReferral(formData, referrerName, referrerEmail);
    if (res?.ok) redirect("/book/prep?shared=1");
    redirect("/book/prep?shared_error=1");
  }

  return (
    <section className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-200">
      <h2 className="mb-2 text-lg font-semibold text-gray-900">Know someone who needs this?</h2>
      <p className="mb-4 text-sm text-gray-700">
        Want to help save somebody else from their site struggles? If they book a free consultation,
        we’ll send you a small thank-you. We’ll email Jake at EverLessTech with your referral details,
        and he may reach out once personally. No automated marketing to your friend.
      </p>

      <form action={action} className="space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <label htmlFor="friend_name" className="mb-1 block text-sm font-medium text-gray-700">
              Friend’s name (optional)
            </label>
            <input
              id="friend_name"
              name="friend_name"
              className="w-full rounded-xl border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 outline-none focus:ring-2"
              placeholder="e.g., Alex Smith"
            />
          </div>
          <div className="sm:col-span-1">
            <label htmlFor="friend_email" className="mb-1 block text-sm font-medium text-gray-700">
              Friend’s email *
            </label>
            <input
              id="friend_email"
              name="friend_email"
              type="email"
              required
              className="w-full rounded-xl border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 outline-none focus:ring-2"
              placeholder="friend@example.com"
              autoComplete="email"
            />
          </div>
        </div>

        {/* Honeypot (hidden visually) */}
        <div className="sr-only" aria-hidden="true">
          <label htmlFor="ref_honey">Leave this field empty</label>
          <input id="ref_honey" name="honey" tabIndex={-1} autoComplete="off" />
        </div>

        <div className="flex items-center justify-end gap-3">
          <Link href="/" className="text-sm text-gray-600 underline">Skip</Link>
          <button
            type="submit"
            className="inline-flex items-center rounded-xl bg-[var(--primary)] px-4 py-2 text-sm font-semibold text-white hover:opacity-95"
          >
            Send referral
          </button>
        </div>

        <p className="pt-2 text-xs text-gray-500">
          By sending, you confirm you know this person and believe they’d welcome a one-time
          personal outreach from Jake. We won’t add them to any mailing list.
        </p>
      </form>
    </section>
  );
}
