import Link from "next/link";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <header>
        <nav>
          <Link href={"/"}>Home</Link>
          <Link href={"/about"}>About</Link>

          <Link href={"/contact"}>Contact</Link>
        </nav>
      </header>
      {children}
    </div>
  );
};

export default layout;
