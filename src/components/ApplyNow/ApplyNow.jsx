import React from "react";
import Header from "../Header";

const ApplyNow = () => {
  return (
    <>
      <div>
        <Header />
        <div className="flex pt-16 items-center justify-center bg-blue-300 h-[500px] ">
          <div className="bg-green-400 flex gap-10 h-[300px] w-[300px] text-center">
            <div className="bg-red-400">Dry cleaning</div>
            <div className="bg-red-400">Assistance</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplyNow;
