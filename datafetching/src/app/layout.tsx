import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import SidebarNav from "@/components/Sidebar";
import React from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Data Fetching Examples",
  description: "Learning different data fetching patterns in Next.js/React",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[var(--bg)] text-[var(--text)]`}
      >
        <div className="min-h-screen grid grid-cols-1 md:grid-cols-[260px_1fr]">
          {/* Sidebar */}
          <SidebarNav />

          {/* Main area */}
          <main>
            <header className="border-b border-[var(--border)] bg-[var(--card)]">
              <div className="doc-container py-4">
                <h1 className="text-2xl md:text-3xl font-semibold">
                  Data Fetching
                </h1>
                <p className="doc-muted mt-1 text-sm">
                  Server fetch, useEffect, use hook with Suspense, SWR, React
                  Query
                </p>
              </div>
            </header>

            <div className="doc-container">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}
