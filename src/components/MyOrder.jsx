import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const MyOrder = () => {
  return (
    <>
      <Header />
      <div className="w-full h-[400px] bg-[rgb(216,217,221)] pt-20">
        <div className="grid grid-cols-7 items-center gap-6 p-8  text-black">
          <p className="text-[18px] font-semibold">#</p>
          <p className="text-[18px] font-semibold">Services Booked</p>
          <p className="text-[18px] font-semibold">Services Title</p>
          <p className="text-[18px] font-semibold">Number of Items</p>
          <p className="text-[18px] font-semibold">Working Hours</p>
          <p className="text-[18px] font-semibold">Price</p>
          <p className="text-[18px] font-semibold">Total</p>
        </div>
        <hr />
        <div className="grid grid-cols-7 items-center gap-6 p-8  text-black">
          <p>1</p>
          <p>Dry Cleaning</p>
          <p>Dry Cleaning</p>
          <p>2</p>
          <p>0</p>
          <p>Rs: 30+60</p>
          <p>Rs: 90</p>
        </div>
        <hr />
        <div className="grid grid-cols-7 items-center gap-6 p-8  text-black">
          <p>2</p>
          <p>Assistance</p>
          <p>Caretaking</p>
          <p>0</p>
          <p>1</p>
          <p>Rs: 400</p>
          <p>Rs: 400</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MyOrder;
