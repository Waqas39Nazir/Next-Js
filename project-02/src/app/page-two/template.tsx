"use client";
import React from "react";

const Lemplate = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  console.log("I am Template please note down me");

  return (
    <div>
      <h1>I am the Template lets test me</h1>
      {children}
    </div>
  );
};

export default Lemplate;
