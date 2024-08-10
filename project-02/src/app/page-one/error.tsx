"use client";
import React from "react";

const error = ({ error, reset }: any) => {
  return (
    <div>
      <h1>I am Your Error, I am very attracting... stay away from me.</h1>

      <button onClick={reset}>Try Again</button>
    </div>
  );
};

export default error;
