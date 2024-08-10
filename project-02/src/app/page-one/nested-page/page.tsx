import React from "react";
import { Suspense } from "react";
import Loading from "@/app/loading";

const page = () => {
  return (
    <Suspense fallback={<Loading />}>
      <div>
        <h1>I am The Nested Page</h1>
      </div>
    </Suspense>
  );
};

export default page;
