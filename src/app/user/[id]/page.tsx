import React from "react";
import type { Metadata } from "next";

interface dataType {
  img: string;
  rame: string;
  title: string;
  color: string;
  brand: string;
  price: string;
  id: number;
}

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { id } = await params;

  const res = await fetch(
    `https://market-backend-zeta.vercel.app/phones/${id}`
  );
  const data: dataType = await res.json();

  const metaDeta: Metadata = {
    title: data.title,
    description: data.brand,
    openGraph: {
      images: [data.img],
    },
  };
  return metaDeta;
}

const UserId = () => {
  return (
    <div className="p-[30px]">
      <h1>UserId</h1>
    </div>
  );
};

export default UserId;
