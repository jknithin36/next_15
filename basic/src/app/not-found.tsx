"use client";

import { useRouter } from "next/navigation";

const NotFoundPage = () => {
  const router = useRouter();

  function handleRedirectToHome() {
    router.push("/");
  }
  return (
    <div>
      <h1> The Page You are looking is Not Exits</h1>
      <button onClick={handleRedirectToHome} className=" bg-black text-white">
        Go To Home
      </button>
    </div>
  );
};

export default NotFoundPage;
