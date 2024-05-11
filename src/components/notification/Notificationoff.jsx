import React from "react";
import { FaSearch } from "react-icons/fa";
import Header from "../Header";
export default function Notificationoff() {
  return (
    <>
      <Header />
      <div className="bg-[rgba(144,178,232,0.81)] w-full h-screen flex justify-center items-center flex-col gap-2">
        <FaSearch className="text-gray-700 w-48 h-44" />
        <h2 className="text-blue-600 font-bold">NOT FOUND ANY NOTIFICATION</h2>
      </div>
    </>
  );
}
