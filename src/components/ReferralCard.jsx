// app/book/prep/page.jsx
import Link from "next/link";
import { redirect } from "next/navigation";
import { sendConsultPrep } from "@/emails/send";
import SoftTimer from "@/components/SoftTimer";
import ReferralCard from "@/components/ReferralCard";

export const dynamic = "force-dynamic";

// If you prefer to keep this page out of search results, uncomment:
// export const metadata = { robots: { index: false, follow: true } };

const GOALS = [
  "More leads",
  "Online sales",
  "Easier updates",
  "Professional look",
  "Faster site",
  "Better mobile",
];

const RESOURCES = ["Logo", "Brand colors", "Domain/Hosting", "Written content", "Photos", "None yet"];

export default async function PrepPage({ searchParams }) {
  const sent = searchParams?.sent === "1";
  const failed = searchParams?.error === "1";
  const shared = searchParams?.shared === "1";
  const sharedError = searchParams?.shared_error === "1";

  const refName = safeDecode(searchParams?.n);
  const refEmail = safeDecode(searchParams?.e);

  // Wrap server action so we can redirect with state
  async function action(formData) {
    "use server";
    const name = (formData.get("name") || "").toString();
    const email = (formData.get("email") || "").toString();
    const res = await sendConsultPrep(formData);
    if (res?.ok) {
      redirect(`/book/prep?sent=1&n=${encodeURIComponent(name)}&e=${encodeURIComponent(email)}`);
    }
    redirect("/book/prep?error=1");
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      {/* Top CTA banner */}
      <div className="mb-6 rounded-2xl border border-primary-100 bg-white p-4 shadow-sm">
        <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
          <p className="text-sm text-gray-700">Don’t have a free consultation scheduled yet?</p>
          <Link
            href="/book"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-xl bg-[var(--primary)] px-3 py-2 text-sm font-medium text-white hover:opacity-95"
          >
            Schedule here →
          </Link>
        </div>
      </div>

      {/* Friendly timer + note */}
      <SoftTimer />

      {/* Messages */}
      {sent && (
        <div className="mb-6 rounded-2xl border border-green-200 bg-green-50 p-4 text-green-800">
          Thanks! A copy of your responses has been emailed to you and Jake from EverLessTech.
        </div>
      )}
      {failed && (
        <div className="mb-6 rounded-2xl border border-red-200 bg-red-50 p-4 text-red-800">
          Sorry—something went wrong sending your email. Please try again.
        </div>
      )}
      {shared && (
        <div className="mb-6 rounded-2xl border border-blue-200 bg-blue-50 p-4 text-blue-800">
          Referral sent to Jake. Thanks for paying it forward!
        </div>
      )}
      {sharedError && (
        <div className="mb-6 rounded-2xl border border-red-200 bg-red-50 p-4 text-red-800">
          Sorry—couldn’t send that referral. Please try again.
        </div>
      )}

      {/* If sent, show ReferralCard (no form). Otherwise show the prep form */}
      {sent ? (
        <ReferralCard referrerName={refName} referrerEmail={refEmail} />
      ) : (
        <form action={action} className="space-y-8">
          {/* Contact */}
          <section className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-200">
            <h2 className="mb-4 text-lg font-semibold text-gray-900">Your Contact</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-700">
                  Name *
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-xl border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 outline-none focus:ring-2"
                  placeholder="Jane Doe"
                  autoComplete="name"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
                  Email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-xl border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 outline-none focus:ring-2"
                  placeholder="you@example.com"
                  autoComplete="email"
                />
              </div>
              <div>
                <label htmlFor="business" className="mb-1 block text-sm font-medium text-gray-700">
                  Business name
                </label>
                <input
                  id="business"
                  name="business"
                  className="w-full rounded-xl border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 outline-none focus:ring-2"
                  placeholder="Acme Co."
                  autoComplete="organization"
                />
              </div>
              <div>
                <label htmlFor="website" className="mb-1 block text-sm font-medium text-gray-700">
                  Website URL
                </label>
                <input
                  id="website"
                  name="website"
                  type="url"
                  className="w-full rounded-xl border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 outline-none focus:ring-2"
                  placeholder="https://example.com"
                  autoComplete="url"
                />
              </div>
            </div>
          </section>

          {/* Experiences */}
          <section className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-200">
            <h2 className="mb-4 text-lg font-semibold text-gray-900">Past Website Experiences</h2>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label htmlFor="experiences_owner" className="mb-1 block text-sm font-medium text-gray-700">
                  As a business owner, what struggles have you had with your site?
                </label>
                <textarea
                  id="experiences_owner"
                  name="experiences_owner"
                  rows={4}
                  className="w-full rounded-xl border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 outline-none focus:ring-2"
                  placeholder="e.g., hard to update, confusing analytics, slow load times…"
                />
              </div>
              <div>
                <label htmlFor="experiences_user" className="mb-1 block text-sm font-medium text-gray-700">
                  As a user of other websites, what has frustrated you most?
                </label>
                <textarea
                  id="experiences_user"
                  name="experiences_user"
                  rows={4}
                  className="w-full rounded-xl border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 outline-none focus:ring-2"
                  placeholder="e.g., can’t find info, not mobile friendly, slow, popups…"
                />
              </div>
            </div>
          </section>

          {/* Beliefs / Needs */}
          <section className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-200">
            <h2 className="mb-4 text-lg font-semibold text-gray-900">What You Believe You Need</h2>
            <textarea
              id="believes_need"
              name="believes_need"
              rows={4}
              className="w-full rounded-xl border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 outline-none focus:ring-2"
              placeholder="e.g., online booking, simpler contact options, clearer services page…"
            />
          </section>

          {/* Goals & Vision */}
          <section className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-200">
            <h2 className="mb-4 text-lg font-semibold text-gray-900">Goals & Vision</h2>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label htmlFor="goals_text" className="mb-1 block text-sm font-medium text-gray-700">
                  What should your website help you achieve?
                </label>
                <textarea
                  id="goals_text"
                  name="goals_text"
                  rows={3}
                  className="w-full rounded-xl border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 outline-none focus:ring-2"
                  placeholder="Your words…"
                />
              </div>

              <fieldset>
                <legend className="mb-2 text-sm font-medium text-gray-700">Quick goals (check any)</legend>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {GOALS.map((label) => (
                    <label key={label} className="inline-flex items-center gap-2 text-sm text-gray-800">
                      <input
                        type="checkbox"
                        name="goals_checks"
                        value={label}
                        className="h-4 w-4 rounded border-gray-300 text-[var(--primary)] focus:ring-2"
                      />
                      {label}
                    </label>
                  ))}
                </div>
              </fieldset>
            </div>
          </section>

          {/* Resources */}
          <section className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-200">
            <h2 className="mb-4 text-lg font-semibold text-gray-900">Current Resources</h2>
            <fieldset>
              <legend className="sr-only">What do you already have?</legend>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {RESOURCES.map((label) => (
                  <label key={label} className="inline-flex items-center gap-2 text-sm text-gray-800">
                    <input
                      type="checkbox"
                      name="resources"
                      value={label}
                      className="h-4 w-4 rounded border-gray-300 text-[var(--primary)] focus:ring-2"
                    />
                    {label}
                  </label>
                ))}
              </div>
            </fieldset>
          </section>

          {/* Wishlist */}
          <section className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-200">
            <h2 className="mb-4 text-lg font-semibold text-gray-900">Open Wishlist</h2>
            <textarea
              id="wishlist"
              name="wishlist"
              rows={4}
              className="w-full rounded-xl border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 outline-none focus:ring-2"
              placeholder="If budget and tech weren’t a concern, what would your dream site include?"
            />
          </section>

          {/* Consent + Honeypot */}
          <section className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-200">
            <div className="flex items-start gap-3">
              <input
                id="consent"
                name="consent"
                type="checkbox"
                required
                className="mt-1 h-4 w-4 rounded border-gray-300 text-[var(--primary)] focus:ring-2"
              />
              <label htmlFor="consent" className="text-sm text-gray-800">
                Email a copy of my responses to <strong>me and Jake from EverLessTech</strong>.
              </label>
            </div>

            {/* Honeypot: visible to SR, hidden visually */}
            <div className="sr-only" aria-hidden="true">
              <label htmlFor="website_url">Leave this field empty</label>
              <input id="website_url" name="honey" tabIndex={-1} autoComplete="off" />
            </div>
          </section>

          {/* Submit */}
          <div className="flex items-center justify-end">
            <button
              type="submit"
              className="inline-flex items-center rounded-xl bg-[var(--primary)] px-4 py-2 text-sm font-semibold text-white hover:opacity-95"
            >
              Send my prep
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

/* ---------- helpers ---------- */
function safeDecode(v) {
  try {
    return v ? decodeURIComponent(v) : "";
  } catch {
    return "";
  }
}
