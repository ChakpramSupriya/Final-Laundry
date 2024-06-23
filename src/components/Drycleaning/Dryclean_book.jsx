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

export default function Dryclean_book({
  setName,
  setAddress,
  setDistrict,
  setContact,
  setPincode,
  setMessage,
  district,
  pincode,
  // seeData,
}) {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const districtPincode = [
    {
      district: "Imphal East",
      pincode: "795008",
    },
    {
      district: "Imphal West",
      pincode: "795001",
    },
    {
      district: "Thoubal",
      pincode: "795138",
    },
    {
      district: "Bishnupur",
      pincode: "795126",
    },
    {
      district: "Kakching",
      pincode: "795103",
    },
  ];

  useEffect(() => {
    console.log(district);
    const pincode = districtPincode.filter(
      (eachDistrict) => eachDistrict.district === district
    );
    setPincode(pincode[0]?.pincode);
  }, [district]);
  // const [district, setDistrict] = useState("");
  function handleDistrictChange(event) {
    setDistrict(event.target.value);
  }
  return (
    <>
      <Header />
      <div className=" new_bg w-full  pt-20">
        <button
          type="button"
          onClick={() => {
            navigate("/drycleansteps");
          }}
        >
          <FaArrowCircleLeft className="w-32 h-8" />
        </button>
      </div>

      <div className="dry_clean_book new_bg">
        <h1>MAKE A BOOKING</h1>
        <p>
          We will collect ,clean and delivery your laundry directly to your
          door. Our prices are simple and affordable.
        </p>
        <div className="dry_clean_input">
          <div className="inputs">
            <IoPersonSharp className="icon" />
            <input
              type="name"
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
            />
          </div>

          <div className="inputs">
            <FaAddressCard className="icon" />
            <input
              type="address"
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Your address"
            />
          </div>

          <div className="inputs">
            <BiSolidPhoneCall className="icon" />
            <input
              type="text"
              placeholder="Your contact no."
              minLength={10}
              maxLength={10}
              onChange={(e) => setContact(e.target.value)}
            />
          </div>

          {/* <div className="inputs">
            <p className="text-2xl">District:</p>
            <select value={district} onChange={handleDistrictChange}>
              <option value="">Select an option</option>
              <option value="Imphal East">Imphal East</option>
              <option value="Imphal West">Imphal West</option>
              <option value="Bishnupur">Bishnupur</option>
              <option value="Thoubal">Thoubal</option>
            </select>
          </div> */}

          <div>
            <label className="text-center pl-4" for="services">
              District:
            </label>

            <select
              onChange={(e) => setDistrict(e.target.value)}
              id="district"
              className="select_district"
            >
              <option value="district">Select District</option>
              {districtPincode.map((s, i) => (
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                <option key={i} value={s.district}>
                  {s.district}
                </option>
              ))}
            </select>
          </div>

          <div className="inputs pincode">
            <p>Pincode:</p>
            <input
              type="pincode"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              placeholder="Pincode"
            />
          </div>
          <div className="inputs-message">
            <MdEmail className="icon" />
            <input
              type="text"
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your message"
            />
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
            // seeData();
            navigate("/dryclean_itemorder");
          }}
        >
          Book Now
        </button>
      </div>
    </>
  );
}
