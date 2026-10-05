import { sections, slides } from "./content";
export type NavLink = { title: string; blurb: string; href: string; image: string };
export type NavItem = { label: string; href: string; match: string; links: NavLink[]; feature: { title: string; text: string; image: string; href: string; cta: string } };
const from = (k: string): NavLink[] => sections[k].pages.map(p => ({ title: p.title, blurb: p.blurb, href: `/${k}/${p.slug}`, image: p.image }));
const im = (k: string, slug: string) => sections[k].pages.find(p => p.slug === slug)!.image;
export const nav: NavItem[] = [
  { label: "Investments", href: "/services", match: "/services", links: from("services"), feature: { title: "Not sure where to start?", text: "Talk to our team about the right mix for your goals.", image: im("services", "property-investment"), href: "/contact", cta: "Talk to us" } },
  { label: "Markets", href: "/markets", match: "/markets", links: [
    { title: "Stocks", blurb: "ASX and global share prices.", href: "/markets#stocks", image: im("services", "equities") },
    { title: "Currencies", blurb: "AUD against major currencies.", href: "/markets#currencies", image: im("insights", "currency-hedging-basics") }],
    feature: { title: "Today's markets", text: "Currency rates refreshed every 30 seconds.", image: im("insights", "2026-market-outlook"), href: "/markets", cta: "Open markets" } },
  { label: "Insights", href: "/insights", match: "/insights", links: from("insights"), feature: { title: "2026 Market Outlook", text: "Where we see risk and opportunity this year.", image: im("insights", "2026-market-outlook"), href: "/insights/2026-market-outlook", cta: "Read the outlook" } },
  { label: "Resources", href: "/resources", match: "/resources", links: from("resources"), feature: { title: "Have a question?", text: "Start with our FAQs, or ask the team directly.", image: im("resources", "faqs"), href: "/resources/faqs", cta: "See FAQs" } },
  { label: "About", href: "/about", match: "/about", links: [{ title: "Our story", blurb: "Who we are and how we invest.", href: "/about", image: slides[0].image }, ...from("about")], feature: { title: "Part of Rey Corporate Group", text: "Property, construction, landscaping and investment under one vision.", image: im("about", "group"), href: "/about/group", cta: "Meet the Group" } },
];
