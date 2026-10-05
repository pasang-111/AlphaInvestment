"use client";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { slides } from "@/lib/content";
const SPEEDS = [4000, 7000, 11000];
export default function HeroCarousel() {
  const [i, setI] = useState(0), [prev, setPrev] = useState(-1), [play, setPlay] = useState(true), [sp, setSp] = useState(1), [tick, setTick] = useState(0);
  const root = useRef<HTMLDivElement>(null);
  const go = useCallback((n: number) => { setPrev(i); setI((n + slides.length) % slides.length); setTick(0); }, [i]);
  useEffect(() => { if (!play) return; const t = setInterval(() => setTick(x => x + 100), 100); return () => clearInterval(t); }, [play]);
  useEffect(() => { if (tick >= SPEEDS[sp]) go(i + 1); }, [tick, sp, i, go]);
  const key = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") go(i + 1); else if (e.key === "ArrowLeft") go(i - 1);
    else if (e.key === " ") { e.preventDefault(); setPlay(p => !p); } else if (e.key === "f") root.current?.requestFullscreen?.();
  };
  return (<div className="hero" ref={root} tabIndex={0} onKeyDown={key} role="region" aria-roledescription="carousel" aria-label="Featured"
    onMouseEnter={() => setPlay(false)} onMouseLeave={() => setPlay(true)}>
    {slides.map((s, n) => (<div key={n} className={`slide ${n === i ? "on" : n === prev ? "prev" : ""}`} aria-hidden={n !== i}>
      <Image src={s.image} alt="" fill priority={n === 0} sizes="100vw" />
      <div className="cap"><div className="wrap">
        <h1 aria-label={s.title}>{s.title.split(" ").map((w, k) => <span className="w" key={k} aria-hidden><span style={{ "--i": k } as React.CSSProperties}>{w}&nbsp;</span></span>)}</h1>
        <p>{s.text}</p><Link href={s.href} className="btn">{s.cta}</Link></div></div></div>))}
    <div className="count" aria-hidden>0{i + 1}<span> / 0{slides.length}</span></div>
    <div className="remote" role="group" aria-label="Carousel controls">
      <button onClick={() => go(i - 1)} aria-label="Previous">‹</button>
      <button onClick={() => setPlay(p => !p)} aria-label={play ? "Pause" : "Play"}>{play ? "Pause" : "Play"}</button>
      <button onClick={() => go(i + 1)} aria-label="Next">›</button>
      {slides.map((_, n) => <button key={n} className={`dot ${n === i ? "on" : ""}`} onClick={() => go(n)} aria-label={`Slide ${n + 1}`} />)}
      <button onClick={() => setSp(s => (s + 1) % 3)} aria-label="Change speed">{["Fast", "Normal", "Slow"][sp]}</button>
      <button onClick={() => root.current?.requestFullscreen?.()} aria-label="Fullscreen">⛶</button>
    </div>
    {play && <div className="bar" style={{ width: `${(tick / SPEEDS[sp]) * 100}%` }} />}
  </div>);
}
