import ContactForm from "@/components/ContactForm";
import { contact } from "@/lib/content";
export const metadata = { title: "Contact" };
export default function Contact() {
  return (<main className="wrap" style={{ padding: "40px 20px" }}><h1 style={{ marginBottom: 20 }}>Contact us</h1>
    <div className="split" style={{ alignItems: "start" }}><ContactForm />
      <div><p>{contact.address}</p><p><a href={`tel:${contact.tel}`}>{contact.phone}</a></p><p style={{ marginBottom: 16 }}><a href={`mailto:${contact.email}`}>{contact.email}</a></p>
        <iframe title="Head office map" loading="lazy" src={`https://www.google.com/maps?q=${encodeURIComponent(contact.address)}&output=embed`} /></div></div></main>);
}
