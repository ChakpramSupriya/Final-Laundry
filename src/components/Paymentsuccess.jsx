import React from "react";
import Header from "./Header";
import { PiShootingStarDuotone } from "react-icons/pi";
export default function Paymentsuccess() {
  return (
    <>
      <Header />
      <div className="bg-slate-300 w-full h-screen flex justify-center items-center flex-col gap-2">
        <PiShootingStarDuotone className="text-green-500 w-48 h-44" />
        <h4 className="flex justify-center items-center text-blue-500 font-bold">
          Payment is successfull
        </h4>
      </div>
    </>
  );
}
