"use client";
import { useMarkets } from "./useMarkets";
export default function Ticker() {
  const d = useMarkets(); if (!d) return <div className="ticker"><div>Loading markets…</div></div>;
  return (<div className="ticker" aria-label="Market ticker"><div className="track">{[0, 1].flatMap(k => [...d.stocks, ...d.fx].map(q => (
    <span key={k + q.symbol}>{q.symbol} {q.price.toFixed(2)} <span className={q.change >= 0 ? "up" : "down"}>{q.change >= 0 ? "▲" : "▼"} {Math.abs(q.change).toFixed(2)}%</span></span>)))}</div></div>);
}
