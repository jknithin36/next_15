import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f9f9f8] px-4">
      <div className="w-full max-w-2xl rounded-xl border border-[#eee4d8] bg-white shadow-md p-10 text-center">
        <h1 className="text-3xl font-semibold text-[#142d25] mb-4">
          Marketing About Page
        </h1>
        <p className="text-lg text-[#535353] leading-relaxed">
          This is the marketing about page. Here you can describe your company,
          mission, or product in a clean and professional style.
        </p>
      </div>
    </div>
  );
};

export default Page;
