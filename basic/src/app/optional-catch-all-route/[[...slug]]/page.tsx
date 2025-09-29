import React from "react";

export default async function OptionalProductFilter({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  console.log(slug);
  // comma seperted array

  return (
    <div>
      <h1>Optional Product Filter</h1>
    </div>
  );
}
