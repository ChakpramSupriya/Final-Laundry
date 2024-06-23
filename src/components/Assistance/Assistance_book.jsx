import React from "react";
import Header from "../Header";
import "./Assistance_book.css";
import { useEffect, useState } from "react";
import { FaArrowCircleLeft } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { FaAddressCard } from "react-icons/fa6";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { MultiSelect } from "@mantine/core";

import { NumberInput } from "@mantine/core";
import { DateTimePicker } from "@mantine/dates";

export default function Assistance_book({
  data,
  setData,
  assistanceamount,
  setAssistanceamount,
}) {
  const navigate = useNavigate();
  const services = [
    {
      name: "Sweeper",
    },
    {
      name: "Cooking",
    },
    {
      name: "Plumber",
    },
    {
      name: "Dish Washing",
    },
    {
      name: "Care Taking",
    },
    {
      name: "Electrician",
    },
    {
      name: "Carpenter",
    },
    {
      name: "Other more",
    },
  ];
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const [name, setName] = useState("");
  const [add, setAdd] = useState("");
  const [phone, setPhone] = useState("");
  // const [dis, setDis] = useState("");
  const [pin, setPin] = useState("");
  const [message, setMessage] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [worker, setWorker] = useState("");
  const [service, setService] = useState("");
  const [district, setDistrict] = useState("");
  const [duration, setDuration] = useState("");
  // const [assistanceamount, setAssistanceamount] = useState("");
  // "fullname":"Supriya",
  // "address":"Patsoi",
  // "contactnumber":"546447679",
  // "district":"Imphal East",
  // "pincode":"795008",
  // "message":"Need 1 Electrician",
  // "date":"01/05/24",
  // "time":"4:30 pm",
  // "workers":"1",
  // "serviceavailable":"Electrician"

  const dataSubmit = () => {
    const bookassistance = {
      fullname: name,
      address: add,
      contactnumber: phone,
      pincode: pin,
      district,
      message,
      date,
      time,
      workers: worker,
      serviceavailable: service,
      duration,
      amount: assistanceamount,
    };
    console.log(bookassistance);
    setData(bookassistance);
    // fetch("http://localhost:3000/bookassistance/createassistancebook", {
    //   method: "POST",
    //   body: JSON.stringify(bookassistance),
    //   headers: {
    //     "content-type": "application/json",
    //   },
    // })
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));
  };

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
    // console.log(pincode[0]?.pincode);
    setPin(pincode[0]?.pincode);
  }, [district]);

  function handleDistrictChange(event) {
    setDistrict(event.target.value);
  }
  useEffect(() => {
    // if (duration === "1") {
    setAssistanceamount(400 * +duration);
    // }
  }, [duration]);

  return (
    <>
      <Header />

      <div className=" w-full h-full new_bg pt-20">
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
            <input
              type="name"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="inputs">
            <FaAddressCard className="icon" />
            <input
              type="address"
              placeholder="Your address"
              value={add}
              onChange={(e) => setAdd(e.target.value)}
            />
          </div>

          <div className="inputs">
            <BiSolidPhoneCall className="icon" />
            <input
              type="text"
              placeholder="Your contact no."
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              minLength={10}
              maxLength={10}
            />
          </div>
          {/* <div className="inputs">
            <p>District:</p>
            <select
              value={district}
              onChange={handleDistrictChange}
              style={{
                border: "1.5px solid gray",
                margin: "10px",
                borderRadius: "10px",
                width: "400px",
                padding: "10px 20px",
              }}
            >
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
              style={{
                border: "1.5px solid gray",
                margin: "10px",
                borderRadius: "10px",
                width: "400px",
                padding: "10px 20px",
              }}
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

          <div className="inputs">
            Pincode:
            <input
              type="pincode"
              placeholder="Pincode"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
            />
          </div>

          <div className="inputs-message">
            <MdEmail className="icon" />
            <input
              type="text"
              placeholder="Your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div className="inputs">
            {" "}
            Date:
            <input
              type="date"
              placeholder="dd/mm/yyyy"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div className="inputs ">
            <label for="time">Time:</label>
            <input
              type="time"
              name="time"
              placeholder=""
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
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
              value={worker}
              onChange={setWorker}
              clampBehavior="strict"
              min={1}
              max={20}
            />
          </div>
          <div>
            <label className="text-center pl-4" for="services">
              Service:
            </label>

            <select
              onChange={(e) => setService(e.target.value)}
              id="services"
              style={{
                border: "1.5px solid gray",
                margin: "10px",
                borderRadius: "10px",
                width: "400px",
                padding: "10px 20px",
              }}
            >
              <option value="asdf">Select Service</option>
              {services.map((s, i) => (
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                <option key={i} value={s.name}>
                  {s.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex w-full">
          <div className=" inputs">
            <label className="text-center">Duration:</label>
            <input
              type="number"
              className="border border-gray-400 indent-2 ml-3"
              placeholder="Duration hours"
              clampBehavior="strict"
              min={0}
              max={5}
              value={duration}
              onChange={(e) => {
                setDuration(e.target.value);
              }}
            />
          </div>
          <div className=" inputs">
            <label className="text-center">Amount:</label>
            <input
              type="text"
              className="border border-gray-400 indent-2 ml-3"
              placeholder="Rs......"
              value={assistanceamount}
            />
          </div>
        </div>

        <button
          type="button"
          className="click bg-blue-300 hover:bg-blue-500 w-33"
          onClick={() => {
            const confirm = prompt("Confirmation to booking");
            if (confirm.toLowerCase() === "yes") {
              dataSubmit();
              navigate("/notification-success");
            } else {
              navigate("/notification-off");
            }
          }}
        >
          Book Now
        </button>
      </div>
      {/* <div>
        <Notificationsuccess bookassistance={bookassistance} />
      </div> */}
    </>
  );
}
