import React from "react";

export default async function ProductFilter({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  console.log(slug);
  // comma seperted array

  return (
    <div>
      <h1>Product Filter</h1>
    </div>
  );
}
