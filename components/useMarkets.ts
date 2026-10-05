"use client";
import { useEffect, useState } from "react";
import type { Markets } from "@/lib/markets";
export function useMarkets(ms = 30000) {
  const [d, setD] = useState<Markets | null>(null);
  useEffect(() => {
    let on = true; const load = () => fetch("/api/markets").then(r => r.json()).then(j => on && setD(j)).catch(() => {});
    load(); const t = setInterval(load, ms); return () => { on = false; clearInterval(t); };
  }, [ms]);
  return d;
}
