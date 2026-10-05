"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav } from "@/lib/nav";
import { sections } from "@/lib/content";
export default function Crumbs() {
  const seg = usePathname().split("/").filter(Boolean); if (!seg.length) return null;
  const item = nav.find(n => n.match === "/" + seg[0]);
  const page = seg[1] ? sections[seg[0]]?.pages.find(p => p.slug === seg[1])?.title : undefined;
  const trail = [{ label: item?.label ?? (seg[0] === "contact" ? "Contact" : seg[0]), href: item?.href ?? "/" + seg[0] }, ...(page ? [{ label: page, href: "" }] : [])];
  return (<div className="crumbs" aria-label="You are here"><div className="wrap"><i /><Link href="/">Home</Link>
    {trail.map((t, k) => (<span key={t.label}>/ {k === trail.length - 1 ? <b>{t.label}</b> : <Link href={t.href}>{t.label}</Link>}</span>))}</div></div>);
}
