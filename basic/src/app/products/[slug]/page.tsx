import React from "react";

async function ProductDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = await params;

  console.log(slug); // logs the slug value
  return <div>Product Details Page : {slug.slug}</div>;
}

export default ProductDetails;
