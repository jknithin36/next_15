import React from "react";

async function ProductDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = await params;

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f9f9f8] px-4">
      <div className="w-full max-w-xl rounded-xl border border-[#eee4d8] bg-white p-8 shadow-md text-center">
        <h1 className="text-3xl font-semibold text-[#142d25]">
          Product Details
        </h1>
        <p className="mt-4 text-lg text-[#535353]">
          Product ID:{" "}
          <span className="font-medium text-[#ff862f]">{slug.slug}</span>
        </p>
      </div>
    </div>
  );
}

export default ProductDetails;
