// app/(datafetching)/server-fetch/page.tsx
import React from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  thumbnail?: string; // present in dummyjson
  rating?: number; // present in dummyjson
}

interface ProductsResponse {
  products: Product[];
  total: number;
}

// 👉 If you want ISR-style revalidation, you can export this:
// export const revalidate = 3600; // revalidate once/hour

async function getProducts(): Promise<ProductsResponse> {
  const res = await fetch("https://dummyjson.com/products", {
    // Default in Next.js server is effectively "force-cache".
    // You can switch to full freshness with:
    // cache: "no-store",
    // or time-based with:
    // next: { revalidate: 3600 }
    cache: "force-cache",
  });

  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}

function formatCurrency(n: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);
}

export default async function ServerSideFetch() {
  let data: ProductsResponse | null = null;
  let error: string | null = null;

  try {
    data = await getProducts();
  } catch (e) {
    error = e instanceof Error ? e.message : "Unknown error";
  }

  return (
    <div className="min-h-screen bg-[var(--bg)] py-10 px-6">
      <div className="doc-container">
        {/* Page header */}
        <header className="mb-8">
          <h1 className="text-3xl font-semibold tracking-tight text-[var(--text)]">
            Server-Side Data Fetching
          </h1>
          <p className="doc-muted mt-1">
            server component. Cached fetch with{" "}
            <code className="doc-code">cache="force-cache"</code>.
          </p>
        </header>

        {/* Status row */}
        <div className="mb-6 flex items-center justify-between gap-4">
          <div className="text-sm doc-muted">
            Total Products:{" "}
            <span className="font-semibold text-[var(--text)]">
              {data?.total ?? 0}
            </span>
          </div>

          {/* Non-functional filter chips for demo aesthetics (server comp) */}
          <div className="hidden sm:flex items-center gap-2">
            {["All", "Smartphones", "Laptops", "Fragrances", "Groceries"].map(
              (c) => (
                <span
                  key={c}
                  className="rounded-full border border-[var(--border)] bg-[var(--card)] px-3 py-1 text-xs text-[var(--text)]"
                >
                  {c}
                </span>
              )
            )}
          </div>
        </div>

        {/* Error state */}
        {error && (
          <div className="border border-red-200 bg-red-50 text-red-700 rounded-xl p-4 mb-8">
            <p className="font-medium">Couldn’t load products</p>
            <p className="text-sm mt-1">{error}</p>
          </div>
        )}

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {data?.products?.map((p) => (
            <article
              key={p.id}
              className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden bg-[#f3f4f6]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.thumbnail ?? "https://dummyimage.com/600x450/eee/aaa"}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>

              {/* Body */}
              <div className="p-4">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-base font-semibold text-[var(--text)] line-clamp-2">
                    {p.title}
                  </h3>
                  <span className="shrink-0 rounded-lg border border-[var(--border)] bg-[var(--bg)] px-2 py-1 text-sm font-medium">
                    {formatCurrency(p.price)}
                  </span>
                </div>

                <div className="mt-2 flex items-center justify-between">
                  <span className="inline-flex items-center rounded-full bg-[#f5f5f4] px-2.5 py-1 text-xs capitalize text-[#535353]">
                    {p.category}
                  </span>

                  {typeof p.rating === "number" && (
                    <span className="text-xs doc-muted">
                      * {p.rating.toFixed(1)}
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Empty state (if API returns nothing) */}
        {!error && (!data || data.products.length === 0) && (
          <div className="mt-10 border border-[var(--border)] bg-[var(--card)] rounded-xl p-10 text-center">
            <p className="doc-muted">No products found.</p>
          </div>
        )}
      </div>
    </div>
  );
}
