import React, { useState } from "react";
import Header from "../Header";
import "./Dryclean_steps.css";
import { useNavigate } from "react-router-dom";
import { FaArrowCircleLeft } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { useEffect } from "react";

export default function Dryclean_steps() {
  const navigate = useNavigate();

  const steps = ["Places order", "Pick up", "Drop off"];
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <Header />
      <div className=" w-full  new_bg pt-20">
        <button
          type="button"
          onClick={() => {
            navigate("/home");
          }}
        >
          <FaArrowCircleLeft className="w-32 h-8" />
        </button>
      </div>
      <div className="steps new_bg sm:h-screen pb-10">
        <h2>STEPS FOR DRY CLEANING SERVICES</h2>
        <div className="photo">
          <div className="flex flex-col items-center">
            <img className="photo-img" src="placeorder.png" alt="" />
            <h4 className="block sm:hidden">PLACED ORDER</h4>
          </div>
          <div className="flex flex-col items-center">
            <img className="photo-img" src="pickup.svg" alt="" />
            <h4 className="block sm:hidden">PICK UP </h4>
          </div>
          <div className="flex flex-col items-center">
            <img className="photo-img" src="drop.svg" alt="" />
            <h4 className="block sm:hidden">DROP OFF</h4>
          </div>
        </div>
        <div className="steps-order hidden sm:block">
          <h4>PLACED ORDER</h4>
          <h4>PICK UP </h4>
          <h4>DROP OFF</h4>
        </div>
        <div className="steps-order-par flex flex-wrap flex-cols">
          <p>Placed your order in seconds.</p>
          <p>We pickup the clothes.</p>
          <p>Deliver your clothes.</p>
        </div>
        {/* 
        <div className="flex justify-between m-6">
          {steps?.map((step, i) => (
            <div
              key={i}
              className={`step-item ${currentStep === i + 1 && "active"} ${
                (i + 1 < currentStep || complete) && "complete"
              }`}
            >
              <div className="step">
                {i + 1 < currentStep || complete ? <TiTick size={24} /> : i + 1}
              </div>
              <p className="text-gray-500">{step}</p>
            </div>
          ))}
        </div>

        {!complete && (
          <button
            type="button"
            className="steps-btn"
            onClick={() => {
              currentStep === steps.length
                ? setComplete(true)
                : setCurrentStep((prev) => prev + 1);
            }}
          >
            {currentStep === steps.length ? "Finish" : "Next"}
          </button>
        )} */}

        <button
          type="button"
          className="click bg-blue-300 hover:bg-blue-500 mt-5"
          onClick={() => {
            navigate("/drycleanbook");
          }}
        >
          ORDER
        </button>
      </div>
    </>
  );
}
