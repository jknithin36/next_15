"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { href: "/", label: "Overview" },
  { href: "/server-fetch", label: "Server Fetch" },
  { href: "/use-effect-example", label: "useEffect" },
  { href: "/use-hook", label: "use hook + Suspense" },
  { href: "/swr-example", label: "SWR" },
  { href: "/react-query", label: "React Query" },
];

export default function SidebarNav() {
  const pathname = usePathname();

  return (
    <aside className="sidebar sticky top-0 h-dvh hidden md:block">
      <div className="w-[260px]">
        <div className="sidebar-title">Data Fetching</div>
        <nav className="space-y-1 pb-6">
          {items.map((it) => {
            const active =
              pathname === it.href || pathname?.startsWith(it.href + "/");
            return (
              <Link
                key={it.href}
                href={it.href}
                className={`nav-link ${active ? "nav-link-active" : ""}`}
              >
                {it.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
