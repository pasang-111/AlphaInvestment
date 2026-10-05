import nodemailer from "nodemailer";
export const runtime = "nodejs";
const esc = (s: string) => s.replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]!));
export async function POST(req: Request) {
  const b = await req.json().catch(() => null);
  if (!b || b.website) return Response.json({ ok: true });
  const { name, email, phone = "", topic, message } = b as Record<string, string>;
  if (!name || !/^\S+@\S+\.\S+$/.test(email ?? "") || !message || message.length > 5000) return Response.json({ error: "Please check your details." }, { status: 400 });
  const { GSUITE_USER, GSUITE_APP_PASSWORD, CONTACT_TO } = process.env;
  if (!GSUITE_USER || !GSUITE_APP_PASSWORD) return Response.json({ error: "Email is not configured on the server." }, { status: 500 });
  try {
    const t = nodemailer.createTransport({ host: "smtp.gmail.com", port: 465, secure: true, auth: { user: GSUITE_USER, pass: GSUITE_APP_PASSWORD } });
    await t.sendMail({ from: `Alpha Investment <${GSUITE_USER}>`, to: CONTACT_TO ?? GSUITE_USER, replyTo: email, subject: `[Website] ${topic}: ${name}`,
      html: `<p><b>${esc(name)}</b> (${esc(email)}, ${esc(phone)}) re: ${esc(topic)}</p><p>${esc(message).replace(/\n/g, "<br>")}</p>` });
    return Response.json({ ok: true });
  } catch { return Response.json({ error: "Could not send your message." }, { status: 502 }); }
}
