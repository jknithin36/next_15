import { Metadata } from "next";
import React from "react";

const dummyData = {
  "1": { title: "One" },
  "2": { title: "Two" },
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const data = dummyData[params.slug as keyof typeof dummyData];

  return {
    title: data?.title ?? "Not found",
  };
}

export default async function DynamicMetaDataExample({
  params,
}: {
  params: { slug: string };
}) {
  const data = dummyData[params.slug as keyof typeof dummyData];

  return <div>{data?.title ?? "Not found"}</div>;
}
