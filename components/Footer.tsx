import Link from "next/link";
import Logo from "@/components/Logo";
import NewsletterForm from "@/components/NewsletterForm";
import BackToTop from "@/components/BackToTop";
import { nav } from "@/lib/nav";
import { group, contact } from "@/lib/content";

export default function Footer() {
  const cols = nav.filter(n => n.label !== "Markets");
  return (
    <footer className="ft">
      <div className="wrap">
        <div className="ft-cta">
          <div>
            <h2>Ready to put your capital to work?</h2>
            <p>Speak with the Alpha Investment team about your goals.</p>
          </div>
          <Link href="/contact" className="btn">Talk to our team</Link>
        </div>

        <div className="ft-grid">
          <div className="ft-brand">
            <Logo height={200} />
            <p>Alpha Investment &amp; Development is the investment arm of Rey Corporate Group.</p>
            <address>
              {contact.address}<br />
              <a href={`tel:${contact.tel}`}>{contact.phone}</a><br />
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </address>
            <NewsletterForm />
          </div>

          {cols.map(c => (
            <div key={c.label}>
              <h4>{c.label}</h4>
              <ul>
                {c.links.map(l => (
                  <li key={l.href}><Link href={l.href}>{l.title}</Link></li>
                ))}
                <li><Link href={c.href} style={{ color: "var(--red)" }}>All {c.label}</Link></li>
              </ul>
            </div>
          ))}
        </div>

        <div className="ft-group">
          <span>Part of Rey Corporate Group:</span>
          {group.map(g => (
            <a key={g.name} href={g.url} target="_blank" rel="noopener" title={g.note}>{g.name}</a>
          ))}
        </div>

        <div className="ft-bot">
          <span>© {new Date().getFullYear()} Alpha Investment &amp; Development. All rights reserved.</span>
          <nav className="ft-legal-links" aria-label="Legal">
            <Link href="/resources/disclosures">Disclosures</Link>
            <Link href="/resources/forms-and-downloads">Forms and Downloads</Link>
            <Link href="/resources/faqs">FAQs</Link>
          </nav>
          <BackToTop />
        </div>
        <p className="ft-legal">
          Investing involves risk, including loss of principal. Information on this website is general
          information only and does not take into account your objectives, financial situation or needs.
        </p>
      </div>
    </footer>
  );
}