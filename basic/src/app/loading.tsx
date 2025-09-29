const Loading = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f9f9f8]">
      {/* spinner */}
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#ff862f50] border-t-[#ff862f]"></div>
      <p className="mt-4 text-lg font-medium text-[#535353]">Loading...</p>
    </div>
  );
};

export default Loading;
