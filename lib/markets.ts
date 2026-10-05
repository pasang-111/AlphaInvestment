export type Quote = { symbol: string; price: number; change: number };
export type Markets = { stocks: Quote[]; fx: Quote[]; live: boolean; updated: string };
const STOCKS = (process.env.MARKET_SYMBOLS ?? "BHP.AX,CBA.AX,CSL.AX,WES.AX,SPY,AAPL").split(",");
const demo = (s: string, i: number): Quote => ({ symbol: s, price: 100 + i * 57 + Math.random() * 3, change: (Math.random() - 0.45) * 2 });
export async function getMarkets(): Promise<Markets> {
  const key = process.env.FINNHUB_API_KEY; let live = false;
  let stocks: Quote[] = STOCKS.map(demo);
  if (key) try {
    stocks = await Promise.all(STOCKS.map(async s => {
      const r = await fetch(`https://finnhub.io/api/v1/quote?symbol=${s}&token=${key}`, { next: { revalidate: 30 } });
      const q = await r.json(); return { symbol: s, price: q.c, change: q.dp ?? 0 };
    })); live = true;
  } catch {}
  let fx: Quote[] = [];
  try {
    const [t, y] = await Promise.all([
      fetch("https://api.frankfurter.app/latest?from=AUD&to=USD,EUR,GBP,JPY,INR,NZD", { next: { revalidate: 300 } }).then(r => r.json()),
      fetch(`https://api.frankfurter.app/${new Date(Date.now() - 4 * 864e5).toISOString().slice(0, 10)}..?from=AUD&to=USD,EUR,GBP,JPY,INR,NZD`, { next: { revalidate: 300 } }).then(r => r.json()),
    ]);
    const days = Object.keys(y.rates ?? {}).sort(); const prev = y.rates?.[days[days.length - 2]] ?? t.rates;
    fx = Object.entries(t.rates as Record<string, number>).map(([c, v]) => ({ symbol: `AUD/${c}`, price: v, change: ((v - prev[c]) / prev[c]) * 100 }));
  } catch {}
  return { stocks, fx, live, updated: new Date().toISOString() };
}
