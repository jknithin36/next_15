"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "../ui/button";
import { Ghost, Menu, X, Search, Sun, Moon } from "lucide-react";

const PrimaryAccent = "hsl(142,70%,55%)";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Create", href: "/" },
  { label: "Edit", href: "/" },
  { label: "Profile", href: "/profile" },
];

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isActive =
    href === "/" ? pathname === "/" : pathname.startsWith(href) && href !== "/";

  return (
    <Link
      href={href}
      className={[
        "relative rounded-full px-3 py-2 text-sm font-medium transition-colors",
        "text-muted-foreground hover:text-foreground",
        "focus-visible:outline-2 focus-visible:outline-offset-2",
        isActive ? "text-foreground" : "",
      ].join(" ")}
      style={{ outlineColor: PrimaryAccent }}
    >
      <span
        className={[
          "absolute left-3 right-3 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full transition-transform duration-200",
          isActive ? "scale-x-100" : "hover:scale-x-100",
        ].join(" ")}
        style={{ backgroundColor: PrimaryAccent }}
      />
      {children}
    </Link>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Left: Brand + Desktop Nav */}
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="group inline-flex items-center gap-2 rounded-lg px-2 py-1 focus-visible:outline-2 focus-visible:outline-offset-2"
              style={{ outlineColor: PrimaryAccent }}
            >
              {/* Explicit color avoids currentColor flips & hydration diffs */}
              <Ghost
                color={PrimaryAccent}
                className="h-5 w-5 transition-transform duration-200 group-hover:scale-110"
              />
              <span className="text-xl font-bold tracking-tight">Slug</span>
            </Link>

            <nav className="hidden md:flex md:items-center md:gap-1.5">
              {navItems.map((item) => (
                <NavLink key={item.label} href={item.href}>
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>

          {/* Right: Search + Theme + Auth (desktop) */}
          <div className="hidden items-center gap-3 md:flex">
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 opacity-60" />
              <input
                placeholder="Search…"
                className={[
                  "h-9 w-64 rounded-full border bg-background px-9 text-sm shadow-sm outline-none",
                  "transition focus:border-transparent focus-visible:ring-2 focus-visible:ring-offset-0",
                  // static class for stability (no template)
                  "focus-visible:ring-[hsl(142,70%,55%)]",
                ].join(" ")}
              />
            </div>

            {/* Theme toggle (placeholder) */}
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full"
              aria-label="Toggle theme"
              title="Toggle theme"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>

            {/* Login matches auth button vibe */}
            <Button
              asChild
              className="font-medium border-none"
              style={{
                backgroundColor: PrimaryAccent,
                backgroundImage:
                  "linear-gradient(to bottom, rgba(255,255,255,0.1), rgba(0,0,0,0.05))",
              }}
            >
              <Link href="/auth">Login</Link>
            </Button>
          </div>

          {/* Mobile: Menu button */}
          <button
            className={[
              "inline-flex items-center justify-center rounded-md p-2 md:hidden",
              "focus-visible:outline-2 focus-visible:outline-offset-2",
            ].join(" ")}
            style={{ outlineColor: PrimaryAccent }}
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile sheet */}
      <div
        className={`md:hidden transition-[max-height,opacity] duration-200 ease-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden border-t`}
      >
        <div className="mx-auto max-w-screen-xl px-4 py-3">
          <div className="mb-3">
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 opacity-60" />
              <input
                placeholder="Search…"
                className={[
                  "h-10 w-full rounded-full border bg-background px-9 text-sm shadow-sm outline-none",
                  "transition focus:border-transparent focus-visible:ring-2 focus-visible:ring-offset-0",
                  "focus-visible:ring-[hsl(142,70%,55%)]",
                ].join(" ")}
              />
            </div>
          </div>

          <nav className="grid gap-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-full px-3 py-2 text-sm font-medium text-foreground/90 hover:bg-accent hover:text-accent-foreground focus-visible:outline-2 focus-visible:outline-offset-2"
                style={{ outlineColor: PrimaryAccent }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-3 flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full"
              aria-label="Toggle theme"
              title="Toggle theme"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>

            <Button
              asChild
              className="w-full font-medium border-none"
              style={{
                backgroundColor: PrimaryAccent,
                backgroundImage:
                  "linear-gradient(to bottom, rgba(255,255,255,0.1), rgba(0,0,0,0.05))",
              }}
            >
              <Link href="/auth">Login</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
