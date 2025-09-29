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
    <div>
      <h1 className="text-2xl font-bold mb-4">
        <div className="grid gap-4">
          {products.map((product) => (
            <div key={product.id} className="border p-4 rounded">
              <h2>{product.name}</h2>
              <h3>{product.price}</h3>
              <Link href={`/products/${product.id}`}>View Details</Link>
            </div>
          ))}
        </div>
      </h1>
    </div>
  );
};

export default Products;
