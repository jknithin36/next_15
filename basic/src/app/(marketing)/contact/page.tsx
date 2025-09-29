import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f9f9f8] px-4">
      <div className="w-full max-w-xl rounded-xl border border-[#eee4d8] bg-white shadow-md p-10 text-center">
        <h1 className="text-3xl font-semibold text-[#142d25] mb-4">
          Marketing Contact Page
        </h1>
        <p className="text-lg text-[#535353] leading-relaxed mb-6">
          Have questions? Get in touch with us using the form below.
        </p>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full rounded-lg border border-[#eee4d8] bg-[#f9f9f8] px-4 py-2 text-[#111816] placeholder:text-[#9b9b9b] focus:outline-none focus:ring-2 focus:ring-[#ff862f50]"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full rounded-lg border border-[#eee4d8] bg-[#f9f9f8] px-4 py-2 text-[#111816] placeholder:text-[#9b9b9b] focus:outline-none focus:ring-2 focus:ring-[#ff862f50]"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="w-full rounded-lg border border-[#eee4d8] bg-[#f9f9f8] px-4 py-2 text-[#111816] placeholder:text-[#9b9b9b] focus:outline-none focus:ring-2 focus:ring-[#ff862f50]"
          ></textarea>

          <button
            type="submit"
            className="mt-2 inline-flex items-center justify-center rounded-lg bg-[#ff862f] px-5 py-2.5 font-medium text-white shadow-md transition-all duration-200 hover:bg-[#f7a061] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff862f50]"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
