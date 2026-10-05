import Image from "next/image";
import Link from "next/link";
import Counter from "@/components/Counter";
import HeroCarousel from "@/components/HeroCarousel";
import MarketsTable from "@/components/MarketsTable";
import { sections, group } from "@/lib/content";
export default function Home() {
  return (<main><HeroCarousel /><div className="wrap">
    <div className="metrics"><div><Counter to={7} />Businesses in the Group</div><div><Counter to={3} />Founders</div><div><Counter to={4} />Investment services</div><div><Counter to={6} />Currencies tracked live</div></div>
    <div className="band" aria-hidden><div>{[0, 1].map(k => <span key={k}>Legacy in property · Bespoke development · Strategic investment · </span>)}</div></div>
    <section className="s"><h2 style={{ marginBottom: 18 }}>Markets today</h2><MarketsTable /></section>
    <section className="s"><h2 style={{ marginBottom: 18 }}>What we do</h2><div className="cards">{sections.services.pages.map(p => (
      <Link href={`/services/${p.slug}`} key={p.slug} className="card"><div className="imgwrap"><Image src={p.image} alt="" width={400} height={170} /></div><h3 style={{ marginTop: 12 }}>{p.title}</h3><p style={{ color: "var(--mute)" }}>{p.blurb}</p></Link>))}</div></section>
    <section className="s"><h2 style={{ marginBottom: 18 }}>Rey Corporate Group</h2><div className="group">{group.map(g => (<a key={g.name} href={g.url} target="_blank" rel="noopener">{g.name}<small>{g.note}</small></a>))}</div></section>
  </div></main>);
}
