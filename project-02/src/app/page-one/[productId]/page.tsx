"use client";
import React from "react";
import { useParams } from "next/navigation";

const Page = () => {
  const { productId } = useParams();

  console.log("Params:", productId);

  return (
    <div>
      <h1>I am The Nested Static Page: {productId} </h1>
    </div>
  );
};

export default Page;
