import React from "react";

export default function Card() {
  return (
    <div className="inline-block ">
      <div className="mb-3 text-center relative">
        <div className="max-w-md  ">
          <img
            className="bg-transparent rounded-2xl  "
            src="https://res.cloudinary.com/dif6os1pq/image/upload/v1681007314/pagejaune/Bank_1_vwptdw.jpg"
            alt="alt-text"
          />
        </div>
        <p className="font-semibold  text-white   border-b-4 inline-block border-yellow-300 text-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          bank
        </p>
      </div>
    </div>
  );
}
