"use client";
import { useState } from "react";
export default function ContactForm() {
  const [st, setSt] = useState<"idle" | "sending" | "ok" | "err">("idle"), [msg, setMsg] = useState("");
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); const form = e.currentTarget; setSt("sending"); const data = Object.fromEntries(new FormData(form));
    const r = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
    const j = await r.json().catch(() => ({})); setMsg(j.error ?? ""); setSt(r.ok ? "ok" : "err"); if (r.ok) form.reset();
  }
  return (<form onSubmit={submit}>
    <input name="name" placeholder="Full name" required /><input name="email" type="email" placeholder="Email" required /><input name="phone" type="tel" placeholder="Phone (optional)" />
    <select name="topic" defaultValue="Investment"><option>Investment</option><option>Buy Property</option><option>Sell Property</option><option>Development Funding</option><option>Other</option></select>
    <textarea name="message" rows={5} placeholder="How can we help?" required />
    <input name="website" tabIndex={-1} autoComplete="off" style={{ display: "none" }} aria-hidden />
    <button className="btn" disabled={st === "sending"}>{st === "sending" ? "Sending…" : "Send message"}</button>
    {st === "ok" && <p className="up" role="status">Message sent. We reply within one business day.</p>}
    {st === "err" && <p className="down" role="alert">{msg || "Could not send. Please try again."}</p>}
  </form>);
}
