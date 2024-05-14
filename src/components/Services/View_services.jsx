import React, { useEffect } from "react";
import "./View_services.css";
import Header from "../Header";

import { useNavigate } from "react-router-dom";
import Footer from "../Footer";

export default function View_services() {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <Header />
      <div className="view-services">
        <div className="view-cleaning">
          <h1>DRY CLEANING</h1>
          <div className="image">
            <div>
              <img src="./service_lan.png" alt="" />
              <button
                className="bg-gray-400 w-20 h-10 hover:bg-white mt-3 rounded-md"
                onClick={() => {
                  navigate("/dry-clean-book");
                }}
              >
                Laundry
              </button>
            </div>
            <div>
              <img src="./iron.jpg" alt="" />
              <button
                className="bg-gray-400 w-20 h-10 hover:bg-white mt-3 rounded-md"
                onClick={() => {
                  navigate("/dry-clean-book");
                }}
              >
                Ironing
              </button>
            </div>
          </div>

          <div className="view-assistance">
            <h1>ASSISTANCE</h1>
            <div className="image">
              <div>
                <img src="./sweeper.png" alt="" />
                <button
                  className="bg-gray-400 w-20 h-10 hover:bg-white mt-3 rounded-md "
                  onClick={() => {
                    navigate("/assistance-book");
                  }}
                >
                  Sweeper
                </button>
              </div>
              <div>
                <img src="./dishwash.png" alt="" />
                <button
                  className="bg-gray-400 w-20 h-10 hover:bg-white mt-3 rounded-md text-[13px]"
                  onClick={() => {
                    navigate("/assistance-book");
                  }}
                >
                  Dish Washing
                </button>
              </div>
              <div>
                <img src="./plumber.png" alt="" />
                <button
                  className="bg-gray-400 w-20 h-10 hover:bg-white mt-3 rounded-md"
                  onClick={() => {
                    navigate("/assistance-book");
                  }}
                >
                  Plumber
                </button>
              </div>
              <div>
                <img src="./cook.png" alt="" />
                <button
                  className="bg-gray-400 w-20 h-10 hover:bg-white mt-3 rounded-md"
                  onClick={() => {
                    navigate("/assistance-book");
                  }}
                >
                  Cooking
                </button>
              </div>
              <div>
                <img src="./care.png" alt="" />
                <button
                  className="bg-gray-400 w-20 h-10 hover:bg-white mt-3 rounded-md "
                  onClick={() => {
                    navigate("/assistance-book");
                  }}
                >
                  Caretaking
                </button>
              </div>
              <div>
                <img src="./toiletclean.jpg" alt="" />
                <button
                  type="button"
                  className="bg-gray-400 w-20 h-10 hover:bg-white mt-3 rounded-md text-[13px]"
                  onClick={() => {
                    navigate("/assistance-book");
                  }}
                >
                  Toilet Cleaning
                </button>
              </div>
              <div>
                <img src="./more.jpg" alt="" />
                <button
                  className="bg-gray-400 w-20 h-10 hover:bg-white mt-3 rounded-md"
                  onClick={() => {
                    navigate("/assistance-book");
                  }}
                >
                  More
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
