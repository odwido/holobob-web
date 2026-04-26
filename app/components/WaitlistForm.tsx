"use client";

import { useState } from "react";
import BobBubble from "./BobBubble";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [err, setErr] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email || !/.+@.+\..+/.test(email)) {
      setErr("Enter a valid email.");
      return;
    }
    setErr("");
    setSubmitting(true);
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        setErr(data.error ?? "Something went wrong. Try again in a moment.");
        return;
      }
      setSubmitted(true);
    } catch {
      setErr("Network hiccup. Try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="hb-waitlist" id="waitlist">
      <div className="hb-waitlist-card">
        <div className="hb-tag" style={{ marginBottom: 14 }}>
          JOIN THE WAITLIST
        </div>
        <h2 className="hb-h2" style={{ marginTop: 0 }}>
          Get the TestFlight invite.
        </h2>
        <p className="hb-sub">
          Early-access spots are limited. We&rsquo;ll send a TestFlight / Play invite the day we
          open the gate — Bob will start watching your collection on day one.
        </p>
        {submitted ? (
          <BobBubble mood="happy">
            You&rsquo;re in. I&rsquo;ll email you when the gate opens — keep an eye out.
          </BobBubble>
        ) : (
          <form className="hb-form" onSubmit={submit}>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Email address"
              disabled={submitting}
            />
            <button type="submit" className="hb-cta-primary" disabled={submitting}>
              {submitting ? "Reserving…" : "Reserve my spot"} <span aria-hidden>›</span>
            </button>
            {err && <div className="hb-err">{err}</div>}
          </form>
        )}
      </div>
    </section>
  );
}
