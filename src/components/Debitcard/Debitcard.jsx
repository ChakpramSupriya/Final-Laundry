import React from "react";
import "./Debitcard.css";
import Header from "../Header";
import { useNavigate } from "react-router-dom";

export default function Debitcard() {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <div className="bg-[rgba(144,178,232,0.81)] h-screen w-full flex justify-center flex-col items-center ">
        <div className="bg-white w-100 min-h-fit p-10 flex justify-center flex-col items-center rounded-lg gap-y-5 ">
          <div className="">CHECKOUT FORM</div>

          <div className="input-form">
            <div className="section-1">
              <div className="items">
                <label className="label">Card Number</label>
                <input
                  type="text"
                  className="input"
                  placeholder="1234 1234 1234 1234"
                />
              </div>
            </div>

            <div className="section-2">
              <div className="items">
                <label className="label">Card holder</label>
                <input
                  type="text"
                  className="input"
                  placeholder="Coding Market"
                />
              </div>
            </div>

            <div className="section-3">
              <div className="items">
                <label className="label">Expire Date</label>
                <input type="text" className="input" placeholder="MM / YY" />
              </div>
              <div className="items">
                <div className="cvc">
                  <label className="label">cvc code</label>
                  <div className="tooltip">
                    ?
                    <div className="cvc-img">
                      <img src="cvv-card.png" alt="" />
                    </div>
                  </div>
                </div>
                <input
                  type="text"
                  className="input"
                  placeholder="0000"
                  maxLength={4}
                />
              </div>
            </div>
          </div>

          <button
            type="button"
            className="btn-debit bg-blue-300 hover:bg-blue-500"
            onClick={() => {
              navigate("/payment-success");
            }}
          >
            Proceed
          </button>
        </div>
      </div>
    </>
  );
}
