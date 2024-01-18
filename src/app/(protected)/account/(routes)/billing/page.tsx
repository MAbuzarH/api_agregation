import React from "react";
import Card from "./_components/card";

function page() {
  return (
    <div className="flex flex-col items-center justify-between bg-gray-100">
      <div className="flex items-start justify-between flex-col w-[94%] p-8 bg-white my-4 rounded-sm">
        <p className="text-xl font-samibold my-2">Current Credits</p>
        <p className="flex item items-center justify-around">
          Current Balance:{" "}
          <span className=" bg-blue-100 text-lg  px-2 rounded-lg"> 0 </span>{" "}
          Credits
        </p>
      </div>
      <div className="flex items-start justify-between flex-col w-[94%] p-8 bg-white my-4 rounded-sm">
        {/* heading */}
        <div className="flex  items-center justify-between w-[30%]">
          <p className="text-xl font-bold">Purchase credits</p>
          <p className="text-green-400 p-2 bg-gray-100 text-sm">
            CREDITS NEVER EXPIRE
          </p>
        </div>
        {/* cards */}
        <div className="flex items-center justify-around flex-col md:flex-row flex-grow my-6 w-full md:w-[80%]">
          <Card credits="100" price="25.00" pptokens="o.25" />
          <Card credits="100" price="25.00" pptokens="o.25" />
          <Card credits="100" price="25.00" pptokens="o.25" />
          <Card credits="100" price="25.00" pptokens="o.25" />
          <Card credits="100" price="25.00" pptokens="o.25" />
          <Card credits="100" price="25.00" pptokens="o.25" />
        </div>
        {/* footer */}
        <div className="my-2">
          <p className="text-xs">
            Credits never expire. Need more than 10,000 credits? Please reach
            out to example@123.com for custom pricing.
          </p>
        </div>
      </div>
    </div>
  );
}

export default page;
