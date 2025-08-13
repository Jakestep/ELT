"use client";
export default function UnsubPage() {
  const params = new URLSearchParams(
    typeof window !== "undefined" ? window.location.search : "",
  );
  const status = params.get("status");
  return (
    <main className="flex min-h-dvh items-center justify-center p-8">
      <div className="max-w-md text-center">
        {status === "ok" && (
          <h1 className="text-2xl font-semibold">You're unsubscribed 💚</h1>
        )}
        {status === "missing" && (
          <h1 className="text-2xl font-semibold">Unsubscribe link missing</h1>
        )}
        {status === "error" && (
          <h1 className="text-2xl font-semibold">
            We couldn’t unsubscribe you
          </h1>
        )}
        <p className="mt-3 text-gray-600">
          If this wasn’t expected, reply to this email and I’ll help manually.
        </p>
      </div>
    </main>
  );
}
