import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "metadata Example",
  description: "This is my static meta data",
  // and more
};

export default function MetaDataExample() {
  const examples = [
    { id: 1, title: "One" },
    { id: 2, title: "Two" },
    { id: 3, title: "Three" },
  ];
  return (
    <div>
      <h1>MetaDataExample</h1>
      <ul>
        {examples.map((item) => (
          <li key={item.id}>
            <Link href={`/meta-data-example/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// for example search engine should know it related to something
