import React from "react";
import UsaTracking from "./_components/UsaTracking";
function page() {
  return (
    <div className="flex items-center justify-center flex-col bg-gray-100">
      <h2 className="my-3  text-3xl text-bold">Get Tracking</h2>
      <div>
        <UsaTracking />
      </div>
    </div>
  );
}

export default page;
