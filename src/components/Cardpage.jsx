import React from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

export default function Cardpage() {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <div className="  bg-[rgba(144,178,232,0.81)] pt-20 h-screen w-full flex justify-center flex-col items-center">
        <div className="bg-white w-80 min-h-fit p-20 flex justify-center flex-col items-center rounded-lg gap-y-5 ">
          <button
            type="submit"
            className=" bg-blue-300 hover:bg-blue-500 w-20 h-8 rounded-md"
            onClick={() => {
              navigate("/debitcard");
            }}
          >
            Debitcard
          </button>
          <button
            type="submit"
            className=" bg-blue-300 hover:bg-blue-500 w-30 h-8 rounded-md"
            onClick={() => {
              navigate("/payment-success");
            }}
          >
            Cash on delivery
          </button>
        </div>
      </div>
    </>
  );
}
