"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { nav } from "@/lib/nav";
export default function MobileMenu() {
  const [open, setOpen] = useState(false), [sec, setSec] = useState<number | null>(null), path = usePathname(), t = open ? 0 : -1;
  useEffect(() => setOpen(false), [path]);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [open]);
  return (<>
    <button className="burger" onClick={() => setOpen(o => !o)} aria-expanded={open} aria-controls="mnav" aria-label={open ? "Close menu" : "Open menu"}><span /><span /></button>
    <nav id="mnav" className={`mnav ${open ? "open" : ""}`} aria-label="Mobile" aria-hidden={!open}>
      {nav.map((n, i) => (<div key={n.label}>
        <button className={`macc ${path.startsWith(n.match) ? "cur" : ""}`} onClick={() => setSec(sec === i ? null : i)} aria-expanded={sec === i} tabIndex={t}>{n.label}<span>{sec === i ? "−" : "+"}</span></button>
        <div className={`mbody ${sec === i ? "open" : ""}`}><div>
          {n.links.map(l => (<Link key={l.href} href={l.href} className="ml" tabIndex={sec === i ? t : -1}><Image src={l.image} alt="" width={44} height={44} />{l.title}</Link>))}
          <Link href={n.href} tabIndex={sec === i ? t : -1} style={{ color: "var(--red)" }}>All {n.label}</Link></div></div></div>))}
      <Link href="/contact" className="btn" tabIndex={t}>Contact</Link>
    </nav></>);
}
