async function getData() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return {
    stats: {
      users: 10000,
    },
  };
}

export default async function LoadingExample() {
  const data = await getData();

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f9f9f8] px-4">
      <div className="w-full max-w-md rounded-xl border border-[#eee4d8] bg-white shadow-md p-8 text-center">
        <h1 className="text-3xl font-semibold text-[#142d25] mb-4">
          Loading Example
        </h1>
        <p className="text-sm font-bold text-[#ff862f]">
          Users: {data.stats.users}
        </p>
      </div>
    </div>
  );
}
