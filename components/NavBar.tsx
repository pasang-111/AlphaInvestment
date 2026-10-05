"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { nav } from "@/lib/nav";
function RouteProgress() {
  const path = usePathname(), [w, setW] = useState(0), [on, setOn] = useState(false), tm = useRef<ReturnType<typeof setInterval> | undefined>(undefined);
  useEffect(() => {
    const click = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest("a"); if (!a || a.target || e.metaKey || e.ctrlKey) return;
      const u = new URL(a.href, location.href); if (u.origin !== location.origin || u.pathname === location.pathname) return;
      setOn(true); setW(8); clearInterval(tm.current); tm.current = setInterval(() => setW(x => x + (90 - x) * 0.08), 120);
    };
    addEventListener("click", click); return () => removeEventListener("click", click);
  }, []);
  useEffect(() => { clearInterval(tm.current); setW(100); const t = setTimeout(() => { setOn(false); setW(0); }, 500); return () => clearTimeout(t); }, [path]);
  return <div className={`rp ${on ? "on" : ""}`} style={{ width: `${w}%` }} aria-hidden />;
}
export default function NavBar() {
  const path = usePathname(), [open, setOpen] = useState<number | null>(null), [seen, setSeen] = useState<number[]>([]);
  const [ind, setInd] = useState({ x: 0, w: 0 }), refs = useRef<(HTMLAnchorElement | null)[]>([]), timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const active = nav.findIndex(n => path === n.match || path.startsWith(n.match + "/"));
  const target = open ?? active;
  useEffect(() => setOpen(null), [path]);
  useEffect(() => {
    const measure = () => { const el = refs.current[target]; if (el) setInd({ x: el.offsetLeft + 16, w: el.offsetWidth - 32 }); };
    measure(); addEventListener("resize", measure); return () => removeEventListener("resize", measure);
  }, [target]);
  const show = (i: number) => { clearTimeout(timer.current); setOpen(i); setSeen(s => (s.includes(i) ? s : [...s, i])); };
  const hide = () => { clearTimeout(timer.current); timer.current = setTimeout(() => setOpen(null), 140); };
  return (<div className="navwrap" onMouseEnter={() => clearTimeout(timer.current)} onMouseLeave={hide} onKeyDown={e => e.key === "Escape" && setOpen(null)}>
    <RouteProgress />
    <ul className="nv">
      {nav.map((n, i) => (<li key={n.label} onMouseEnter={() => show(i)} onFocus={() => show(i)}>
        <Link ref={el => { refs.current[i] = el; }} href={n.href} className={`nl ${i === active ? "act" : ""}`} aria-haspopup="true" aria-expanded={open === i} aria-current={i === active ? "page" : undefined}>{n.label}</Link></li>))}
      <span className="nind" style={{ transform: `translateX(${ind.x}px)`, width: ind.w, opacity: target >= 0 ? 1 : 0 }} />
    </ul>
    <Link href="/contact" className={`btn ${path === "/contact" ? "cur" : ""}`}>Contact</Link>
    <div className={`scrim ${open !== null ? "show" : ""}`} aria-hidden />
    <div className={`mp ${open !== null ? "show" : ""}`} aria-hidden={open === null}>
      {nav.map((n, i) => (<div key={n.label} className={`mpi ${open === i ? "on" : ""}`}>{seen.includes(i) && (<div className="wrap mpg">
        <div><p className="mph">{n.label}</p><div className="mpgrid">{n.links.map(l => (
          <Link key={l.href} href={l.href} onClick={() => setOpen(null)}><Image src={l.image} alt="" width={72} height={72} /><span>{l.title}<small>{l.blurb}</small></span></Link>))}</div></div>
        <Link href={n.feature.href} className="feat" onClick={() => setOpen(null)}><Image src={n.feature.image} alt="" fill sizes="340px" />
          <div><h3>{n.feature.title}</h3><p>{n.feature.text}</p><span className="btn">{n.feature.cta}</span></div></Link></div>)}</div>))}
    </div>
  </div>);
}
