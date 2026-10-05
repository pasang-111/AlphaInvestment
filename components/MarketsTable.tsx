"use client";
import { useMarkets } from "./useMarkets";
import type { Quote } from "@/lib/markets";
const T = ({ id, title, rows }: { id: string; title: string; rows: Quote[] }) => (<div className="card" id={id}><h3>{title}</h3><table><thead><tr><th>Symbol</th><th>Price</th><th>Change</th></tr></thead><tbody>
  {rows.map(q => (<tr key={q.symbol}><td>{q.symbol}</td><td>{q.price.toFixed(q.price > 50 ? 2 : 4)}</td><td className={q.change >= 0 ? "up" : "down"}>{q.change.toFixed(2)}%</td></tr>))}</tbody></table></div>);
export default function MarketsTable() {
  const d = useMarkets(); if (!d) return <p>Loading market data…</p>;
  return (<><div className="cols"><T id="stocks" title="Stocks" rows={d.stocks} /><T id="currencies" title="Currencies (per 1 AUD)" rows={d.fx} /></div>
    <p style={{ color: "var(--mute)", marginTop: 12 }}>{d.live ? "Live quotes" : "Demo stock values: connect a quotes provider for live ASX prices"}. Refreshed every 30s.</p></>);
}
