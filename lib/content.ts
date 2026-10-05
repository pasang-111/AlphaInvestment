const img = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1600&q=70`;
export type Page = { slug: string; title: string; blurb: string; image: string; body: string[] };
export const sections: Record<string, { label: string; pages: Page[] }> = {
  services: { label: "Services", pages: [
    { slug: "property-investment", title: "Property Investment", blurb: "Residential and commercial opportunities, sourced through the Rey network.", image: img("photo-1554224155-6726b3ff858f"), body: ["We source, assess and structure property investments with the Rey Properties team.", "Every investor has a dedicated contact and a quarterly review."] },
    { slug: "equities", title: "Equities", blurb: "ASX and global shares, actively researched.", image: img("photo-1611974789855-9c2a0a7236a3"), body: ["Our analysts cover ASX-listed and global equities, with a focus on long-term value."] },
    { slug: "development-funding", title: "Development Funding", blurb: "Capital for luxury residential and bespoke development projects.", image: img("photo-1579532537598-459ecdaf39cc"), body: ["Co-investment in residential developments delivered by Rey Homes, Sandstone and Stonegrove Homes."] },
    { slug: "strategic-investment", title: "Strategic Investment", blurb: "Stakes in growing businesses, alongside the Group.", image: img("photo-1460925895917-afdab827c52f"), body: ["Selective investments in operators the Group already knows and trusts."] },
  ]},
  insights: { label: "Insights", pages: [
    { slug: "2026-market-outlook", title: "2026 Market Outlook", blurb: "Where we see risk and opportunity this year.", image: img("photo-1642543492481-44e81e3914a7"), body: ["Rates, currencies and earnings: our house view for the year ahead."] },
    { slug: "currency-hedging-basics", title: "Currency Hedging Basics", blurb: "Protect returns from exchange-rate swings.", image: img("photo-1621761191319-c6fb62004040"), body: ["When to hedge, what it costs, and the instruments most investors use."] },
    { slug: "property-outlook", title: "Property Outlook", blurb: "Where we see value in residential and development property.", image: img("photo-1560518883-ce09059eeffa"), body: ["Supply, rates and population growth: how they shape property returns."] },
    { slug: "first-time-investor-guide", title: "First-Time Investor Guide", blurb: "The questions to ask before you invest.", image: img("photo-1450101499163-c8848c66ca85"), body: ["Goals, time horizon, risk and costs: a plain-language starting point."] },
  ]},
  resources: { label: "Resources", pages: [
    { slug: "faqs", title: "FAQs", blurb: "Answers to common investor questions.", image: img("photo-1554224155-6726b3ff858f"), body: ["Answers on minimum investments, fees, reporting and how to get started will go here."] },
    { slug: "forms-and-downloads", title: "Forms and Downloads", blurb: "Application forms and investor documents.", image: img("photo-1579532537598-459ecdaf39cc"), body: ["Application forms, product information and reports will be listed here."] },
    { slug: "disclosures", title: "Disclosures", blurb: "Important information about our services.", image: img("photo-1621761191319-c6fb62004040"), body: ["General information only. It does not consider your objectives, financial situation or needs. Final disclosure wording to be confirmed by your licensed adviser."] },
  ]},
  about: { label: "About", pages: [
    { slug: "group", title: "Rey Corporate Group", blurb: "The parent group behind Alpha Investment.", image: img("photo-1486406146926-c627a92ad1ab"), body: ["Alpha Investment is part of Rey Corporate Group, a diversified Australian group spanning property, construction, landscaping and investment.", "Visit reycorp.com.au to see the full list of group companies."] },
    { slug: "leadership", title: "Leadership", blurb: "The founders and directors behind the Group.", image: img("photo-1522071820081-009f0129c71c"), body: ["Rey Corporate Group was founded by Pasang Sherpa, Dinesh Khatri and Suman Limbu.", "Profiles for the Alpha Investment team will be added here."] },
    { slug: "careers", title: "Careers", blurb: "Join the team.", image: img("photo-1522071820081-009f0129c71c"), body: ["We hire analysts, advisors and engineers. Send your CV through the contact page."] },
  ]},
};
export const slides = [
  { title: "Legacy in property. Discipline in capital.", text: "Alpha Investment, part of Rey Corporate Group.", image: img("photo-1486406146926-c627a92ad1ab"), href: "/about", cta: "About us" },
  { title: "Markets move. Your plan shouldn't wobble.", text: "Active research across equities, credit and currencies.", image: img("photo-1642543492481-44e81e3914a7"), href: "/services/equities", cta: "See equities" },
  { title: "Built for generations.", text: "Strategic investment alongside a group that builds.", image: img("photo-1460925895917-afdab827c52f"), href: "/services/strategic-investment", cta: "Explore strategic investment" },
];
export const group = [
  { name: "Rey Homes", url: "https://reyhomes.com.au", note: "Luxury residential" },
  { name: "Rey Properties", url: "https://www.reyproperties.com.au", note: "Buy, sell, build, rent" },
  { name: "Sandstone Constructions", url: "https://sandstoneconstructions.com.au", note: "Residential construction" },
  { name: "Stonegrove Homes", url: "https://www.reycorp.com.au", note: "Custom homes" },
  { name: "Rigid Landscaping", url: "https://www.reycorp.com.au", note: "Outdoor living" },
  { name: "After Build Solutions", url: "https://www.reycorp.com.au", note: "Property improvement" },
];
export const contact = { address: "3/39 Memorial Ave, Liverpool NSW 2170, Australia", phone: "02 8750 8609", tel: "+61287508609", email: "info@reyproperties.com.au" };
