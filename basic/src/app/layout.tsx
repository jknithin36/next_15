import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira",
  display: "swap",
});

export const metadata: Metadata = {
  title: "My App",
  description: "Modern Next.js Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${firaCode.variable} antialiased bg-[#f9f9f8] text-[#111816]`}
      >
        {/* Sticky, blurred, light header */}
        <header className="sticky top-0 z-40 border-b border-[#eee4d8] bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
          <nav className="container mx-auto flex flex-wrap items-center gap-3 md:gap-6 px-4 py-3 font-medium">
            <Link
              href="/"
              className="relative rounded-lg px-2 py-1 transition-colors hover:text-[#ff862f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff862f50]"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="relative rounded-lg px-2 py-1 transition-colors hover:text-[#ff862f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff862f50]"
            >
              Products
            </Link>
            <Link
              href="/profile"
              className="relative rounded-lg px-2 py-1 transition-colors hover:text-[#ff862f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff862f50]"
            >
              Profile
            </Link>
            <Link
              href="/about"
              className="relative rounded-lg px-2 py-1 transition-colors hover:text-[#ff862f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff862f50]"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="relative rounded-lg px-2 py-1 transition-colors hover:text-[#ff862f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff862f50]"
            >
              Contact
            </Link>
            <Link
              href="/optional-catch-all-route"
              className="relative rounded-lg px-2 py-1 transition-colors hover:text-[#ff862f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff862f50]"
            >
              Filters(optional)
            </Link>
            <Link
              href="/catch-all-routes"
              className="relative rounded-lg px-2 py-1 transition-colors hover:text-[#ff862f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff862f50]"
            >
              Filters(*)
            </Link>
            <Link
              href="/loading-example"
              className="relative rounded-lg px-2 py-1 transition-colors hover:text-[#ff862f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff862f50]"
            >
              Loader
            </Link>
          </nav>
        </header>

        {/* Content container */}
        <main className="container mx-auto px-4 py-8 md:py-12">{children}</main>
      </body>
    </html>
  );
}
