import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { contact } from "@/lib/content";
import NavBar from "@/components/NavBar";
import Crumbs from "@/components/Crumbs";
import Ticker from "@/components/Ticker";
import MobileMenu from "@/components/MobileMenu";
import Fx from "@/components/Fx";
const head = Fraunces({ subsets: ["latin"], variable: "--font-head" });
const body = Manrope({ subsets: ["latin"], variable: "--font-body" });
export const metadata: Metadata = { title: { default: "Alpha Investment", template: "%s | Alpha Investment" }, description: "Independent investment management." };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en" className={`${head.variable} ${body.variable}`}><body>
    <Fx /><div className="groupbar"><div className="wrap">Part of <a href="https://www.reycorp.com.au" target="_blank" rel="noopener">Rey Corporate Group</a></div></div>
    <header><div className="wrap nav"><Link href="/" className="logo">Alpha<b>.</b>Investment</Link><NavBar /><MobileMenu /></div></header>
    <Ticker /><Crumbs />{children}
    <footer><div className="wrap"><p>Alpha Investment &amp; Development, part of <a href="https://www.reycorp.com.au" target="_blank" rel="noopener" style={{color:"var(--red)"}}>Rey Corporate Group</a>.</p><p>{contact.address} · <a href={`tel:${contact.tel}`}>{contact.phone}</a> · <a href={`mailto:${contact.email}`}>{contact.email}</a></p><p>© {new Date().getFullYear()} Alpha Investment. Investing involves risk, including loss of principal.</p></div></footer>
  </body></html>);
}
