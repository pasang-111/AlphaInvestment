import Image from "next/image";
import Link from "next/link";
import { sections } from "@/lib/content";
export const metadata = { title: "Services", description: "Property investment, equities, development funding and strategic investment from Alpha Investment." };
export default function Services() {
  return (<main className="wrap" style={{ padding: "40px 20px" }}>
    <h1 style={{ fontSize: "2.8rem", marginBottom: 12 }}>Our services</h1>
    <p style={{ color: "var(--mute)", maxWidth: 620, marginBottom: 32 }}>Four ways to put capital to work, backed by the builders, developers and operators of Rey Corporate Group.</p>
    <div className="cards">{sections.services.pages.map(p => (
      <Link href={`/services/${p.slug}`} key={p.slug} className="card"><div className="imgwrap"><Image src={p.image} alt="" width={400} height={170} /></div>
        <h3 style={{ marginTop: 12 }}>{p.title}</h3><p style={{ color: "var(--mute)" }}>{p.blurb}</p></Link>))}</div>
    <p style={{ marginTop: 36 }}><Link href="/contact" className="btn">Talk to our team</Link></p></main>);
}
