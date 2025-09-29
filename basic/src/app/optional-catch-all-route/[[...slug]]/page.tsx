import React from "react";

export default async function OptionalProductFilter({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  console.log(slug);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f9f9f8] px-4">
      <div className="w-full max-w-2xl rounded-xl border border-[#eee4d8] bg-white shadow-md p-8 text-center">
        <h1 className="text-3xl font-semibold text-[#142d25] mb-4">
          Optional Product Filter
        </h1>

        {slug && slug.length > 0 ? (
          <p className="text-lg text-[#535353]">
            Filters applied:{" "}
            <span className="font-medium text-[#ff862f]">
              {slug.join(", ")}
            </span>
          </p>
        ) : (
          <p className="text-lg text-[#535353]">No filters applied</p>
        )}

        {/* hint for user */}
        <div className="mt-6 text-sm text-[#645a7d]">
          <p className="mb-1 font-medium">Try applying filters via URL:</p>
          <p>
            <code className="rounded bg-[#f3f2f6] px-2 py-1">
              /optional-product-filter/mobile/laptop
            </code>
          </p>
          <p className="mt-1">
            You can add multiple segments like{" "}
            <span className="font-medium">/category/brand/price</span>
          </p>
        </div>
      </div>
    </div>
  );
}
