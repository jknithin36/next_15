const Page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f9f9f8] px-4">
      <div className="w-full max-w-3xl rounded-2xl border border-[#eee4d8] bg-white shadow-lg p-10 text-center">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#142d25]">
          This is our home page at root route / root level
        </h1>
        <p className="mt-4 text-lg text-[#535353] leading-relaxed">
          Welcome! This page is styled with your custom light theme colors and
          smooth UI.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button className="inline-flex items-center rounded-lg bg-[#ff862f] px-5 py-2.5 text-white font-medium shadow-md transition-all duration-200 hover:bg-[#f7a061] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff862f50]">
            Get Started
          </button>
          <button className="inline-flex items-center rounded-lg border border-[#d2d2d250] bg-white px-5 py-2.5 text-[#645a7d] font-medium transition-colors duration-200 hover:bg-[#f3f2f6]">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
