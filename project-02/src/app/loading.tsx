import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-row w-full h-full items-center justify-center p-10 rounded-lg bg-green-500">
      <h1>Loading..............</h1>
    </div>
    // <div>
    //   <h1>Loading TEST TEST TEST TEST TEST</h1>
    // </div>
  );
};

export default Loading;

// const delay = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Done");
//     }, 3000);
//   });
// };
