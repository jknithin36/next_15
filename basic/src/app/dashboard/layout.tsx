import Link from "next/link";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <aside className="w-64 p-4 border-r">
        <h2>Dashbaord ROUTE</h2>

        <nav>
          <ul>
            <li>
              <Link href={"/dashboard"}>Dashboard Home</Link>
              <Link href={"/dashboard/analytics"}>Dashbaord Analytics</Link>
            </li>
          </ul>
        </nav>
      </aside>
      <div className="flex-1 p-5">{children}</div>
    </div>
  );
};

export default layout;
