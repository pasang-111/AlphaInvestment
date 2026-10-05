import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { sections } from "@/lib/content";
type P = { params: Promise<{ section: string; slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() { return Object.entries(sections).flatMap(([section, s]) => s.pages.map(p => ({ section, slug: p.slug }))); }
const find = (sec: string, slug: string) => sections[sec]?.pages.find(p => p.slug === slug);
export async function generateMetadata({ params }: P): Promise<Metadata> { const { section, slug } = await params; const p = find(section, slug); return { title: p?.title, description: p?.blurb }; }
export default async function Page({ params }: P) {
  const { section, slug } = await params; const p = find(section, slug); if (!p) notFound();
  return (<main className="wrap" style={{ padding: "40px 20px" }}>
    <p style={{ color: "var(--mute)" }}><Link href="/">Home</Link> / {sections[section].label} / {p.title}</p>
    <h1 style={{ fontSize: "2.6rem", margin: "12px 0 20px" }}>{p.title}</h1>
    <Image src={p.image} alt="" width={1200} height={480} style={{ width: "100%", height: 380, objectFit: "cover" }} />
    <div style={{ maxWidth: 680, margin: "28px 0" }}>{p.body.map((t, i) => <p key={i} style={{ marginBottom: 14 }}>{t}</p>)}</div>
    <Link href="/contact" className="btn">Talk to an advisor</Link></main>);
}
