"use client";

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
    <div>
      <h1>Profile Component: client</h1>
      <button onClick={handleNavigate}>Home</button>
    </div>
  );
}

export default Profile;
