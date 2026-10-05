"use client";
import { useState } from "react";

export default function NewsletterForm() {
  const [st, setSt] = useState<"idle" | "sending" | "ok" | "err">("idle");

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setSt("sending");
    const email = String(new FormData(form).get("email"));
    const r = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Newsletter subscriber",
        email,
        topic: "Newsletter",
        message: "Please add this email to the newsletter list.",
      }),
    });
    setSt(r.ok ? "ok" : "err");
    if (r.ok) form.reset();
  }

  return (
    <form className="ft-news" onSubmit={submit}>
      <label htmlFor="nl-email">Market updates in your inbox</label>
      <div>
        <input id="nl-email" name="email" type="email" placeholder="Email address" required />
        <button className="btn" disabled={st === "sending"}>
          {st === "sending" ? "Sending…" : "Subscribe"}
        </button>
      </div>
      <small>By subscribing you agree to be contacted by Alpha Investment.</small>
      {st === "ok" && <p className="up" role="status">Thanks. We'll add you to the list.</p>}
      {st === "err" && <p className="down" role="alert">Could not subscribe. Please try again.</p>}
    </form>
  );
}