"use client";

import { useRouter } from "next/navigation";

const NotFoundPage = () => {
  const router = useRouter();

  function handleRedirectToHome() {
    router.push("/");
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f9f9f8] px-4">
      <div className="w-full max-w-xl text-center">
        <h1 className="text-3xl md:text-4xl font-semibold text-[#142d25]">
          The page you are looking for does not exist
        </h1>
        <p className="mt-3 text-[#535353]">
          It seems you’ve hit a broken link or a page that’s been moved.
        </p>

        <button
          onClick={handleRedirectToHome}
          className="mt-6 inline-flex items-center rounded-lg bg-[#ff862f] px-5 py-2.5 font-medium text-white shadow-md transition-all duration-200 hover:bg-[#f7a061] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff862f50]"
        >
          Go To Home
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
