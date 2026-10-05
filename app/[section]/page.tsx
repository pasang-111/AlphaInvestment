import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { sections } from "@/lib/content";
type P = { params: Promise<{ section: string }> };
export const dynamicParams = false;
export function generateStaticParams() { return Object.keys(sections).map(section => ({ section })); }
export async function generateMetadata({ params }: P) { const { section } = await params; return { title: sections[section]?.label }; }
export default async function Section({ params }: P) {
  const { section } = await params; const s = sections[section]; if (!s) notFound();
  return (<main className="wrap" style={{ padding: "40px 20px" }}><h1 style={{ fontSize: "2.8rem", marginBottom: 28 }}>{s.label}</h1>
    <div className="cards">{s.pages.map(p => (<Link href={`/${section}/${p.slug}`} key={p.slug} className="card"><div className="imgwrap"><Image src={p.image} alt="" width={400} height={170} /></div>
      <h3 style={{ marginTop: 12 }}>{p.title}</h3><p style={{ color: "var(--mute)" }}>{p.blurb}</p></Link>))}</div></main>);
}
