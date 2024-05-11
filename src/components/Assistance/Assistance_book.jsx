import React from "react";
import Header from "../Header";
import "./Assistance_book.css";
import { useEffect } from "react";
import { FaArrowCircleLeft } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { FaAddressCard } from "react-icons/fa6";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { MultiSelect } from "@mantine/core";

import { NumberInput } from "@mantine/core";
import { DateTimePicker } from "@mantine/dates";

export default function Assistance_book() {
  const navigate = useNavigate();
  const services = [
    {
      name: "Sweeper",
      rate: 400,
    },
    {
      name: "Cooking",
      rate: 400,
    },
    {
      name: "Plumber",
      rate: 400,
    },
    {
      name: "Dish Washing",
      rate: 400,
    },
    {
      name: "Care Taking",
      rate: 400,
    },
    {
      name: "Electrician",
      rate: 400,
    },
    {
      name: "Other more",
      rate: 400,
    },
  ];
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <Header />

      <div className=" w-full h-full bg-[rgba(144,178,232,0.81)] pt-16">
        <button
          onClick={() => {
            navigate("/home");
          }}
          type="button"
        >
          <FaArrowCircleLeft className="w-32 h-8" />
        </button>
      </div>

      <div className="dry_clean_book">
        <h1>MAKE A BOOKING</h1>
        <p>
          We ensure the customer for their refreshment and helps them in their
          household needs.
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

          <div className="inputs-message">
            <MdEmail className="icon" />
            <input type="text" placeholder="Your message" />
          </div>
          <div className="inputs ml-7">
            <input type="date" placeholder=" Your Date:" />
          </div>

          <div className="inputs ">
            <input type="time" placeholder="Your Time:" />
          </div>

          {/* <DateTimePicker
            type="date"
            valueFormat="DD MMM YYYY hh:mm A"
            label="Pick date and time"
            placeholder="Pick date and time"
          /> */}

          <div className="inputs">
            <IoPersonSharp className="icon" />
            {/* <input type="number" placeholder="Number of workers:" /> */}
            <NumberInput
              className="w-90"
              placeholder="Number of workers:"
              clampBehavior="strict"
              min={0}
              max={20}
            />
          </div>
          <div>
            <label className="text-center" for="services">
              Service
            </label>
            <select
              id="services"
              style={{
                border: "1.5px solid gray",
                margin: "10px",
                borderRadius: "10px",
                width: "400px",
                padding: "10px 20px",
              }}
            >
              {services.map((s) => (
                <option value="">{s.name}</option>
              ))}
            </select>
          </div>
        </div>

        {/* <div className="radio">
          <input type="radio" name="service" value="sweeper" />
          <label htmlFor="sweeper">Sweeper</label>

          <input type="radio" name="service" value="care taking" />
          <label htmlFor="care taking">CareTaking</label>

          <input type="radio" name="service" value="dish washing" />
          <label htmlFor="dish washing">Dish Washing</label>

          <input type="radio" name="service" value="plumber" />
          <label htmlFor="plumber">Plumber</label>

          <input type="radio" name="service" value="cooking" />
          <label htmlFor="cooking">Cooking</label>

          <input type="radio" name="service" value="toilet cleaning" />
          <label htmlFor="toilet cleaning">Toilet Cleaning</label>

          <input type="radio" name="service" value="more" />
          <label htmlFor="more">More</label>
        </div> */}

        <button
          type="button"
          className="click bg-blue-300 hover:bg-blue-500 w-33"
          onClick={() => {
            const confirm = prompt("Confirmation to booking");
            if (confirm === "yes") {
              navigate("/notification-success");
            } else {
              navigate("/notification-off");
            }
          }}
        >
          Book Now
        </button>
      </div>
    </>
  );
}
