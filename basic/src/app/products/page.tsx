import Link from "next/link";
import React from "react";

const Products = () => {
  const products = [
    { id: 1, name: "Mobile", price: 500 },
    { id: 2, name: "Laptop", price: 1500 },
    { id: 3, name: "Watch", price: 1400 },
    { id: 4, name: "Shoe", price: 500 },
  ];

  return (
    <div className="min-h-screen bg-[#f9f9f8] px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-semibold text-[#142d25] mb-8">Products</h1>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="rounded-xl border border-[#eee4d8] bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h2 className="text-xl font-semibold text-[#142d25]">
                {product.name}
              </h2>
              <p className="mt-1 text-[#535353]">${product.price}</p>

              <Link
                href={`/products/${product.id}`}
                className="mt-4 inline-flex items-center rounded-lg bg-[#ff862f] px-4 py-2 text-white font-medium transition-colors duration-200 hover:bg-[#f7a061]"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
