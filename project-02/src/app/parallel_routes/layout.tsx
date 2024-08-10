import React from "react";

const layout = ({
  children,
  abc,
  def,
}: Readonly<{
  children: React.ReactNode;
  abc: React.ReactNode;
  def: React.ReactNode;
}>) => {
  return (
    <>
      <h1>I am Parallel Routes Shared Layout</h1>
      {children}
      {abc}
      {def}
    </>
  );
};

export default layout;
