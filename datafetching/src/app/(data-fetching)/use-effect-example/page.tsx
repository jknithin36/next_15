"use client";

import { useEffect, useState } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  thumbnail?: string;
}

export default function UseEffectExample() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [products, setProducts] = useState<Product[]>([]);

  async function fetchProducts() {
    try {
      setIsLoading(true);
      setError(null);
      const res = await fetch("https://dummyjson.com/products");
      if (!res.ok) throw new Error("Failed to fetch products");
      const result = await res.json();
      setProducts(result?.products ?? []);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-[var(--bg)] py-10 px-6">
      <div className="doc-container">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl font-semibold tracking-tight text-[var(--text)]">
            useEffect Example
          </h1>
          <p className="doc-muted mt-1">
            Client-side data fetching after initial render using{" "}
            <code className="doc-code">useEffect()</code>.
          </p>
        </header>

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
            <p className="text-sm mt-1">{error}</p>
          </div>
        )}

        {/* Product grid */}
        {!isLoading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((p) => (
              <article
                key={p.id}
                className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Thumbnail */}
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

                {/* Content */}
                <div className="p-4 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-semibold text-[var(--text)] line-clamp-1">
                      {p.title}
                    </h3>
                    <p className="text-sm capitalize doc-muted mt-1">
                      {p.category}
                    </p>
                  </div>

                  <p className="text-indigo-600 font-bold text-lg mt-4">
                    ${p.price}
                  </p>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
