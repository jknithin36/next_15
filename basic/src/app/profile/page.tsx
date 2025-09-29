"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Profile() {
  const router = useRouter();
  const pathName = usePathname();
  const searchparams = useSearchParams();

  console.log(searchparams.getAll("name"), searchparams);
  console.log(pathName);
  console.log(router);

  const handleNavigate = () => {
    router.push("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f9f9f8] px-4">
      <div className="w-full max-w-lg rounded-xl border border-[#eee4d8] bg-white shadow-md p-8 text-center">
        <h1 className="text-3xl font-semibold text-[#142d25]">
          Profile Component: client
        </h1>

        {/* Path & Query info */}
        <div className="mt-4 space-y-2 text-[#535353]">
          <p>
            Path: <span className="font-medium text-[#ff862f]">{pathName}</span>
          </p>
          <p>
            Query (name):{" "}
            <span className="font-medium text-[#645a7d]">
              {searchparams.getAll("name").join(", ") || "None"}
            </span>
          </p>
        </div>

        {/* Actions */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={handleNavigate}
            className="inline-flex items-center justify-center rounded-lg bg-[#ff862f] px-5 py-2.5 font-medium text-white shadow-md transition-all duration-200 hover:bg-[#f7a061] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff862f50]"
          >
            Go Home
          </button>

          <Link
            href={"/profile/account"}
            className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-2.5 font-medium text-[#645a7d] border border-[#d2d2d250] shadow-sm transition-all duration-200 hover:bg-[#f3f2f6]"
          >
            Account Route
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Profile;
