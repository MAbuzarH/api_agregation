import React from "react";
import ParcelFormCard from "../../components/ParcelFormCard";
import Table from "../../components/table";
function page() {
  return (
    <div className="flex items-center md:items-start   w-[100vw] flex-col md:flex-row overflow-x-hidden bg-gray-100">
      {/* Obtain tracking card */}
      <div className="flex  sm:rounded-lg  items-center justify-around flex-col w-[90vw] md:w-[35%]  bg-white shadow-md rounded  py-4 mx-2 px-2 my-4 ">
        <h1 className="text-3xl font-semibold mb-2">Obtain Tracking</h1>
        <p>
          Current credits:{" "}
          <span className="w-[20px] h-[20px] rounded-lg bg-blue-300 text-blue-500 py-1 px-2 ">
            0
          </span>{" "}
        </p>
        <div>
          <ParcelFormCard />
        </div>
      </div>
      <div className="md:w-[60%] w-[90vw] m-4 p-4 bg-white rounded-md">
        <Table />
      </div>
    </div>
  );
}

export default page;
