"use client";
import { useEffect, useRef, useState } from "react";
export default function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const r = useRef<HTMLElement>(null), [v, setV] = useState(0);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return; io.disconnect(); const t0 = performance.now();
      const f = (t: number) => { const p = Math.min((t - t0) / 1600, 1); setV(Math.round(to * (1 - Math.pow(1 - p, 3)))); if (p < 1) requestAnimationFrame(f); };
      requestAnimationFrame(f);
    }, { threshold: 0.5 });
    io.observe(r.current!); return () => io.disconnect();
  }, [to]);
  return <strong ref={r}>{v}{suffix}</strong>;
}
