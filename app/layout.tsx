import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import Link from "next/link";
import Logo from "@/components/Logo";
import "./globals.css";
import { contact } from "@/lib/content";
import NavBar from "@/components/NavBar";
import Crumbs from "@/components/Crumbs";
import Ticker from "@/components/Ticker";
import MobileMenu from "@/components/MobileMenu";
import Fx from "@/components/Fx";
import Footer from "@/components/Footer";

const head = Fraunces({ subsets: ["latin"], variable: "--font-head" });
const body = Manrope({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: {
    default: "Alpha Investment",
    template: "%s | Alpha Investment",
  },
  description: "Independent investment management.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${head.variable} ${body.variable}`}>
      <body>
        <Fx />

        <div className="groupbar">
          <div className="wrap">
            Part of{" "}
            <a
              href="https://www.reycorp.com.au"
              target="_blank"
              rel="noopener noreferrer"
            >
              Rey Corporate Group
            </a>
          </div>
        </div>

        <header>
          <div className="wrap nav">
            <Link href="/" aria-label="Alpha Investment home">
              <Logo />
            </Link>
            <NavBar />
            <MobileMenu />
          </div>
        </header>

        <Ticker />
        <Crumbs />

        {children}

        <Footer />
      </body>
    </html>
  );
}