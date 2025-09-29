import React from "react";

export default async function ProductFilter({
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
          Product Filter
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
      </div>
    </div>
  );
}
