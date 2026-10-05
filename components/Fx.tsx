"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
export default function Fx() {
  const bar = useRef<HTMLDivElement>(null), glow = useRef<HTMLDivElement>(null), path = usePathname();
  useEffect(() => {
    const s = () => { const h = document.documentElement; bar.current!.style.transform = `scaleX(${h.scrollTop / (h.scrollHeight - h.clientHeight || 1)})`; };
    const m = (e: MouseEvent) => { glow.current!.style.transform = `translate(${e.clientX - 300}px,${e.clientY - 300}px)`; };
    addEventListener("scroll", s, { passive: true }); addEventListener("mousemove", m);
    return () => { removeEventListener("scroll", s); removeEventListener("mousemove", m); };
  }, []);
  useEffect(() => {
    let io: IntersectionObserver | undefined;
    const t = setTimeout(() => {
      io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { (e.target as HTMLElement).classList.add("in"); io!.unobserve(e.target); } }), { threshold: 0.12 });
      document.querySelectorAll<HTMLElement>("main h2, .card, .metrics>div, .group a, .split>*, .band").forEach(el => {
        if (el.closest(".hero")) return;
        const i = el.parentElement ? Array.from(el.parentElement.children).indexOf(el) : 0;
        el.style.setProperty("--d", `${(i % 4) * 0.09}s`);
        el.addEventListener("transitionend", () => el.style.setProperty("--d", "0s"), { once: true });
        el.classList.add("rv"); io!.observe(el);
      });
    }, 60);
    return () => { clearTimeout(t); io?.disconnect(); };
  }, [path]);
  return (<><div ref={bar} className="progress" /><div ref={glow} className="glow" /></>);
}
