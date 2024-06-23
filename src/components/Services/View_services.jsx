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
          <h1 className="text-[25px] text-center underline">
            DRY CLEANING SERVICES
          </h1>
          <div className="image ">
            <div>
              <img src="./service_lan.png" alt="" />
              <div className="flex justify-center items-center">
                <button
                  type="button"
                  className="bg-blue-400  w-[100px] h-10 hover:bg-blue-300 mt-3 rounded-full"
                  onClick={() => {
                    navigate("/drycleanbook");
                  }}
                >
                  Laundry
                </button>
              </div>
            </div>
            <div>
              <img src="./iron.jpg" alt="" />
              <div className="flex justify-center items-center">
                <button
                  type="button"
                  className="bg-blue-400  w-[100px] h-10 hover:bg-blue-300 mt-3 rounded-full"
                  onClick={() => {
                    navigate("/drycleanbook");
                  }}
                >
                  Ironing
                </button>
              </div>
            </div>
          </div>

          <div className="view-assistance">
            <h1 className="text-[25px] text-center underline">
              ASSISTANCE SERVICES
            </h1>
            <div className="image">
              <div>
                <img src="./sweeper.jpg" alt="" />
                <div className="flex justify-center items-center">
                  <button
                    className="bg-blue-400  w-[100px] h-10 hover:bg-blue-300 mt-3 rounded-full"
                    onClick={() => {
                      navigate("/assistance-book");
                    }}
                  >
                    Sweeper
                  </button>
                </div>
              </div>
              <div>
                <img src="./dishwash.jpg" alt="" />
                <div className="flex justify-center items-center">
                  <button
                    className="bg-blue-400  w-[120px] h-10 hover:bg-blue-300 mt-3 rounded-full"
                    onClick={() => {
                      navigate("/assistance-book");
                    }}
                  >
                    Dish Washing
                  </button>
                </div>
              </div>
              <div>
                <img src="./plumber.jpg" alt="" />
                <div className="flex justify-center items-center">
                  <button
                    className="bg-blue-400  w-[100px] h-10 hover:bg-blue-300 mt-3 rounded-full"
                    onClick={() => {
                      navigate("/assistance-book");
                    }}
                  >
                    Plumber
                  </button>
                </div>
              </div>
              <div>
                <img src="./cook.jpg" alt="" />
                <div className="flex justify-center items-center">
                  <button
                    className="bg-blue-400  w-[100px] h-10 hover:bg-blue-300 mt-3 rounded-full"
                    onClick={() => {
                      navigate("/assistance-book");
                    }}
                  >
                    Cooking
                  </button>
                </div>
              </div>

              <div>
                <img src="./electrician.jpg" alt="" />
                <div className="flex justify-center items-center">
                  <button
                    className="bg-blue-400  w-[100px] h-10 hover:bg-blue-300 mt-3 rounded-full"
                    onClick={() => {
                      navigate("/assistance-book");
                    }}
                  >
                    Electrician
                  </button>
                </div>
              </div>
              <div>
                <img src="./care.jpg" alt="" />
                <div className="flex justify-center items-center">
                  <button
                    className="bg-blue-400  w-[100px] h-10 hover:bg-blue-300 mt-3 rounded-full"
                    onClick={() => {
                      navigate("/assistance-book");
                    }}
                  >
                    Caretaking
                  </button>
                </div>
              </div>
              <div>
                <img src="./toiletclean.jpg" alt="" />
                <div className="flex justify-center items-center">
                  <button
                    type="button"
                    className="bg-blue-400  w-[120px] h-10 hover:bg-blue-300 mt-3 rounded-full"
                    onClick={() => {
                      navigate("/assistance-book");
                    }}
                  >
                    Toilet Cleaning
                  </button>
                </div>
              </div>
              <div>
                <img src="./carpenter.jpg" alt="" />
                <div className="flex justify-center items-center">
                  <button
                    type="button"
                    className="bg-blue-400  w-[100px] h-10 hover:bg-blue-300 mt-3 rounded-full"
                    onClick={() => {
                      navigate("/assistance-book");
                    }}
                  >
                    Carpenter
                  </button>
                </div>
              </div>
              <div>
                <img src="./more.jpg" alt="" />
                <div className="flex justify-center items-center">
                  <button
                    className="bg-blue-400  w-[100px] h-10 hover:bg-blue-300 mt-3 rounded-full"
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
        </div>
        <Footer />
      </div>
    </>
  );
}
