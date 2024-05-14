import React from "react";
import Header from "../Header";
// import "./Dryclean_book.css";
import { useState, useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { FaArrowCircleLeft } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { FaAddressCard } from "react-icons/fa6";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";

export default function Dryclean_book() {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const [district, setDistrict] = useState("");
  function handleDistrictChange(event) {
    setDistrict(event.target.value);
  }
  return (
    <>
      <Header />
      <div className=" w-full bg-[rgba(144,178,232,0.81)] pt-20">
        <button
          type="button"
          onClick={() => {
            navigate("/dry_clean_steps");
          }}
        >
          <FaArrowCircleLeft className="w-32 h-8" />
        </button>
      </div>

      <div className="dry_clean_book">
        <h1>MAKE A BOOKING</h1>
        <p>
          We will collect ,clean and delivery your laundry directly to your
          door. Our prices are simple and affordable.
        </p>
        <div className="dry_clean_input">
          <div className="inputs">
            <IoPersonSharp className="icon" />
            <input type="name" placeholder="Your name" />
          </div>

          <div className="inputs">
            <FaAddressCard className="icon" />
            <input type="address" placeholder="Your address" />
          </div>

          <div className="inputs">
            <BiSolidPhoneCall className="icon" />
            <input
              type="text"
              placeholder="Your contact no."
              minLength={10}
              maxLength={10}
            />
          </div>

          <div className="inputs">
            <p className="text-2xl">District:</p>
            <select value={district} onChange={handleDistrictChange}>
              <option value="">Select an option</option>
              <option value="Imphal East">Imphal East</option>
              <option value="Imphal West">Imphal West</option>
              <option value="Bishnupur">Bishnupur</option>
            </select>
          </div>

          <div className="inputs">
            Pincode:
            <input type="pincode" placeholder="Pincode" />
          </div>
          <div className="inputs-message">
            <MdEmail className="icon" />
            <input type="text" placeholder="Your message" />
          </div>
        </div>

        {/* <div className="radio">
          <input type="radio" name="service" value="sweeper" />
          <label htmlFor="sweeper">Laundry</label>

          <input type="radio" name="service" value="care taking" />
          <label htmlFor="care taking">Ironing</label>
        </div> */}

        <button
          type="button"
          className="click bg-blue-300 hover:bg-blue-500 w-33 mt-4"
          onClick={() => {
            navigate("/dryclean_itemorder");
          }}
        >
          Book Now
        </button>
      </div>
    </>
  );
}
