async function getProduct() {
  const shouldError = Math.random() > 0.5;
  if (shouldError) {
    throw new Error("Failed to Fetch products");
  }

  return [
    {
      id: 1,
      name: "One",
    },
    {
      id: 2,
      name: "two",
    },
    {
      id: 3,
      name: "Three",
    },
  ];
}

export default async function ErrorExample() {
  const products = await getProduct();
  return (
    <div className="p-4">
      <h1>Product List</h1>
      <div className="grid gap-4">
        {products.map((product) => (
          <h4 key={product.id}>{product.name}</h4>
        ))}
      </div>
    </div>
  );
}
