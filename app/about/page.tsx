import Image from "next/image";
import Link from "next/link";
import { group, slides } from "@/lib/content";
export const metadata = { title: "About us", description: "Alpha Investment & Development is part of Rey Corporate Group." };
const values = [["Integrity", "We build relationships and businesses on trust, transparency and accountability."], ["Long-term thinking", "We invest for generations, not quarters."], ["Shared expertise", "We draw on the Group's builders, developers and operators."]];
export default function About() {
  return (<main className="wrap" style={{ padding: "40px 20px" }}>
    <h1 style={{ fontSize: "2.8rem", marginBottom: 24 }}>About Alpha Investment</h1>
    <div className="split"><div>
      <p style={{ marginBottom: 14 }}>Alpha Investment &amp; Development is the investment arm of <a href="https://www.reycorp.com.au" target="_blank" rel="noopener" style={{ color: "var(--red)" }}>Rey Corporate Group</a>, a diversified Australian group with businesses across property, construction, landscaping and investment.</p>
      <p style={{ marginBottom: 14 }}>We channel capital into property, development and growing businesses, working beside the Group companies that design, build and manage them.</p>
      <p>The Group was founded by Pasang Sherpa, Dinesh Khatri and Suman Limbu, and is headquartered in Liverpool, NSW.</p></div>
      <Image src={slides[0].image} alt="" width={800} height={520} style={{ width: "100%", height: "auto", objectFit: "cover" }} /></div>
    <h2 style={{ margin: "48px 0 18px" }}>Our vision, mission and purpose</h2>
    <div className="about">
      <div className="card"><h3>Vision</h3><p>A diversified, enduring group that creates successful businesses and lasting value for generations.</p></div>
      <div className="card"><h3>Mission</h3><p>To build, manage and grow exceptional businesses through shared leadership and collaboration.</p></div>
      <div className="card"><h3>Purpose</h3><p>Creating opportunity through enterprise: careers, partnerships and positive economic impact.</p></div></div>
    <h2 style={{ margin: "48px 0 18px" }}>Values</h2>
    <div className="about">{values.map(([t, d]) => <div className="card" key={t}><h3>{t}</h3><p>{d}</p></div>)}</div>
    <h2 style={{ margin: "48px 0 18px" }}>The wider Group</h2>
    <div className="group">{group.map(g => <a key={g.name} href={g.url} target="_blank" rel="noopener">{g.name}<small>{g.note}</small></a>)}</div>
    <p style={{ marginTop: 32 }}><Link href="/contact" className="btn">Talk to our team</Link></p></main>);
}
