"use client";

import useSWR from "swr";
import { useMemo } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  thumbnail?: string;
}

interface ProductsResponse {
  products: Product[];
  total: number;
}

const fetcher = async (url: string): Promise<ProductsResponse> => {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Request failed (${res.status})`);
  return res.json();
};

function formatCurrency(n: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);
}

export default function SwrExamplePage() {
  const { data, error, isLoading, mutate, isValidating } =
    useSWR<ProductsResponse>("https://dummyjson.com/products", fetcher, {
      revalidateOnFocus: true,
      refreshInterval: 30_000, // auto refresh every 30s
      errorRetryCount: 3,
      dedupingInterval: 5_000,
    });

  const lastUpdated = useMemo(() => new Date().toLocaleTimeString(), [data]);

  const handleRefresh = () => {
    // revalidate without changing cache first
    mutate();
  };

  return (
    <div className="min-h-screen bg-[var(--bg)] py-10 px-6">
      <div className="doc-container">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl font-semibold tracking-tight text-[var(--text)]">
            SWR Example
          </h1>
          <p className="doc-muted mt-1">
            Client-side caching, focus revalidation, and interval refresh using{" "}
            <code className="doc-code">useSWR()</code>.
          </p>
        </header>

        {/* Actions / status */}
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <button
            onClick={handleRefresh}
            className="rounded-lg border border-[var(--border)] bg-[var(--card)] px-3 py-2 text-sm font-medium hover:shadow-sm active:scale-[0.99] transition"
          >
            {isValidating ? "Refreshing…" : "Refresh"}
          </button>
          <span className="text-xs doc-muted">
            Auto: 30s • Last updated:{" "}
            <span className="text-[var(--text)] font-medium">
              {lastUpdated}
            </span>
          </span>
          {typeof data?.total === "number" && (
            <span className="text-xs doc-muted">
              Total Products:{" "}
              <span className="text-[var(--text)] font-medium">
                {data.total}
              </span>
            </span>
          )}
        </div>

        {/* Loading */}
        {isLoading && (
          <div className="border border-[var(--border)] bg-[var(--card)] rounded-xl p-6 text-center doc-muted">
            Loading products…
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="border border-red-200 bg-red-50 text-red-700 rounded-xl p-4 mb-8">
            <p className="font-medium">Couldn’t load products</p>
            <p className="text-sm mt-1">{error.message}</p>
          </div>
        )}

        {/* Grid */}
        {!isLoading && !error && data?.products?.length ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {data.products.map((p) => (
              <article
                key={p.id}
                className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden bg-[#f3f4f6]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={
                      p.thumbnail ?? "https://dummyimage.com/600x450/eee/aaa"
                    }
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

                  <p className="mt-2 text-sm capitalize doc-muted">
                    {p.category}
                  </p>
                </div>
              </article>
            ))}
          </div>
        ) : null}

        {/* Empty */}
        {!isLoading && !error && data && data.products.length === 0 && (
          <div className="mt-10 border border-[var(--border)] bg-[var(--card)] rounded-xl p-10 text-center">
            <p className="doc-muted">No products found.</p>
          </div>
        )}
      </div>
    </div>
  );
}
