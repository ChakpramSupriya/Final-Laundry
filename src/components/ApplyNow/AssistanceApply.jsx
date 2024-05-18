import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function AssistanceApply() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [add, setAdd] = useState("");
  const [pin, setPin] = useState("");
  const [dis, setDis] = useState("");
  const [adhar, setAdhar] = useState("");
  const [gen, setGen] = useState("");
  const [service, setService] = useState("");
  const [other, setOther] = useState("");

  const alertThankYou = (e) => {
    e.preventDefault();

    // "fullname":"Lan",
    // "age":"22",
    // "email":"lan_wifi@gmail.com",
    // "phonenumber":"546877679",
    // "address":"Patsoi",
    // "pincode":"795008",
    // "district":"Imphal West",
    // "aadhaarnumber":"12345678789",
    // "gender":"Male",
    // "serviceavailable":"Plumber"
    const assistance = {
      fullname: name,
      age,
      email,
      phonenumber: phone,
      address: add,
      pincode: pin,
      district: dis,
      aadhaarnumber: adhar,
      gender: gen,
      serviceavailable: service,
    };
    console.log(assistance);
    fetch("http://localhost:3000/assistance/createassistance", {
      method: "POST",
      body: JSON.stringify(assistance),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));

    if (
      age === "" ||
      name === "" ||
      email === "" ||
      phone === "" ||
      add === "" ||
      pin === "" ||
      dis === "" ||
      adhar === "" ||
      gen === ""
      // other === ""
    ) {
      return;
    }

    Swal.fire({
      title: "Thank You!",
      text: "Your details has been sucessfully submitted.Thanks!",
      icon: "success",
      confirmButtonText: "OK",
    });
    setName("");
    setAge("");
    setEmail("");
    setPhone("");
    setAdd("");
    setPin("");
    setDis("");
    setAdhar("");
    setGen("");
    setService("");
    setOther("");
  };

  return (
    // container
    <div className=" flex justify-center items-center bg-gradient-to-b from-[#380036] to-[#0CBABA]">
      <div className="my-4 max-w-[650px] p-[28px]  mr-7 ml-7 shadow-2xl shadow-black bg-purple-100 rounded-xl">
        <form>
          <h2 className="text-[26px] font-semibold text-left text-[#2f4f4f] pb-1 border-solid">
            Registration for Assistance
          </h2>
          <hr />
          {/* content */}
          <div className="flex flex-wrap justify-between pt-5  pr-0 pl-0">
            {/* input-box */}
            <div className="flex flex-wrap w-[50%]  justify-end">
              <label
                className="w-[95%] text-[#2f4f4f] font-bold mt-1"
                htmlFor="name"
              >
                Full Name*
              </label>
              <input
                className="h-[40px] w-[95%] pt-0 pb-0 pr-[10px] pl-[10px] rounded-md border-solid border-[1px] outline-none"
                type="text"
                placeholder="Enter your full name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="flex flex-wrap w-[50%]  justify-end">
              <label
                className="w-[95%] text-[#2f4f4f] font-bold mt-1 mb-1"
                htmlFor="age"
              >
                Age*
              </label>
              <input
                className="h-[40px] w-[95%] pt-0 pb-0 pr-[10px] pl-[10px] rounded-md border-solid border-[1px] outline-none"
                type=""
                maxLength={3}
                placeholder="Enter Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                name="age"
                required
              />
            </div>

            <div className="flex flex-wrap w-[50%]  justify-end">
              <label
                className="w-[95%] text-[#2f4f4f] font-bold mt-1 mb-1"
                htmlFor="email"
              >
                Email*
              </label>
              <input
                className="h-[40px] w-[95%] pt-0 pb-0 pr-[10px] pl-[10px] rounded-md border-solid border-[1px] outline-none"
                type="email"
                placeholder="Enter valid email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                required
              />
            </div>

            <div className="flex flex-wrap w-[50%]  justify-end">
              <label
                className="w-[95%] text-[#2f4f4f] font-bold mt-1 mb-1"
                htmlFor="phonenumber"
              >
                Phone Number*
              </label>
              <input
                className="h-[40px] w-[95%] pt-0 pb-0 pr-[10px] pl-[10px] rounded-md border-solid border-[1px] outline-none"
                type="tel"
                maxLength={10}
                placeholder="Enter phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                name="phoneNumber"
                required
              />
            </div>

            <div className="flex flex-wrap w-[50%]  justify-end">
              <label
                className="w-[95%] text-[#2f4f4f] font-bold mt-1 mb-1"
                htmlFor="address"
              >
                Address*
              </label>
              <input
                className="h-[40px] w-[95%] pt-0 pb-0 pr-[10px] pl-[10px] rounded-md border-solid border-[1px] outline-none"
                type="text"
                placeholder="Enter full Address"
                value={add}
                onChange={(e) => setAdd(e.target.value)}
                name="address"
                required
              />
            </div>

            <div className="flex flex-wrap w-[50%]  justify-end">
              <label
                className="w-[95%] text-[#2f4f4f] font-bold mt-1 mb-1"
                htmlFor="pincode"
              >
                Pincode*
              </label>
              <input
                className="h-[40px] w-[95%] pt-0 pb-0 pr-[10px] pl-[10px] rounded-md border-solid border-[1px] outline-none"
                type=""
                placeholder="Enter Pincode"
                value={pin}
                maxLength={6}
                onChange={(e) => setPin(e.target.value)}
                name="pincode"
                required
              />
            </div>

            <div className="flex flex-wrap w-[50%]  justify-end">
              <label
                className="w-[95%] text-[#2f4f4f] font-bold mt-1 mb-1"
                htmlFor="district"
              >
                District*
              </label>
              <input
                className="h-[40px] w-[95%] pt-0 pb-0 pr-[10px] pl-[10px] rounded-md border-solid border-[1px] outline-none"
                type="text"
                placeholder="Enter District"
                value={dis}
                onChange={(e) => setDis(e.target.value)}
                name="district"
                required
              />
            </div>

            <div className="flex flex-wrap w-[50%]  justify-end">
              <label
                className="w-[95%] text-[#2f4f4f] font-bold mt-1 mb-1"
                htmlFor="aadhar"
              >
                Aadhaar Number*
              </label>
              <input
                className="h-[40px] w-[95%] pt-0 pb-0 pr-[10px] pl-[10px] rounded-md border-solid border-[1px] outline-none"
                type=""
                maxLength={12}
                placeholder="Enter Aadhaar Number"
                value={adhar}
                onChange={(e) => setAdhar(e.target.value)}
                name="aadhaar"
                required
              />
            </div>

            {/* gender-title */}
            <span className="w-[95%] text-[#2f4f4f] font-bold mt-1 mb-1 text-[16px] pl-4 ">
              Gender
            </span>
            {/* gender-category */}
            <div className="text-gray pl-4">
              <input
                className="cursor-pointer"
                type="radio"
                name="gender"
                id="male"
                value={"male"}
                required
                checked={gen === "male"}
                onChange={(e) => setGen(e.target.value)}
              />
              <label
                className="pt-0 pr-16 pb-0 pl-[5px] text-[14px] cursor-pointer"
                htmlFor="gender"
              >
                Male
              </label>

              <input
                className="cursor-pointer"
                type="radio"
                name="gender"
                id="female"
                value={"female"}
                required
                checked={gen === "female"}
                onChange={(e) => setGen(e.target.value)}
              />
              <label
                className="pt-0 pr-16 pb-0 pl-[5px] text-[14px] cursor-pointer"
                htmlFor="gender"
              >
                Female
              </label>

              <input
                className="cursor-pointer"
                type="radio"
                name="gender"
                id="other"
                value={"other"}
                required
                checked={gen === "other"}
                onChange={(e) => setGen(e.target.value)}
              />
              <label
                className="pt-0 pr-5 pb-0 pl-[5px] text-[14px] cursor-pointer"
                htmlFor="gender"
              >
                Other
              </label>
            </div>
          </div>

          {/* for services */}
          <span className="w-[95%] text-[#2f4f4f] font-bold mt-1 mb-1 text-[16px] pl-4 ">
            Services Available
          </span>
          {/* service-category */}
          <div className="text-gray pl-4">
            <input
              className="cursor-pointer"
              type="radio"
              name="service"
              id="Sweeper"
              value={"Sweeper"}
              required
              checked={service === "Sweeper"}
              onChange={(e) => setService(e.target.value)}
            />
            <label
              className="pt-0 pr-[20px] pb-0 pl-[5px] text-[14px] cursor-pointer"
              htmlFor="service"
            >
              Sweeper
            </label>

            <input
              className="cursor-pointer"
              type="radio"
              name="service"
              id="Care-taker"
              value={"Care-taker"}
              required
              checked={service === "Care-taker"}
              onChange={(e) => setService(e.target.value)}
            />
            <label
              className="pt-0 pr-[20px] pb-0 pl-[5px] text-[14px] cursor-pointer"
              htmlFor="service"
            >
              Care-taker
            </label>

            <input
              className="cursor-pointer"
              type="radio"
              name="service"
              id="Dish-Washer"
              value={"Dish-Washer"}
              required
              checked={service === "Dish-Washer"}
              onChange={(e) => setService(e.target.value)}
            />
            <label
              className="pt-0 pr-[10px] pb-2 pl-[5px] text-[14px] cursor-pointer"
              htmlFor="service"
            >
              Dish Washer
            </label>

            <input
              className="cursor-pointer"
              type="radio"
              name="service"
              id="Plumber"
              value={"Plumber"}
              required
              checked={service === "Plumber"}
              onChange={(e) => setService(e.target.value)}
            />
            <label
              className="pt-0 pr-[10px] pb-2 pl-[5px] text-[14px] cursor-pointer"
              htmlFor="service"
            >
              Plumber
            </label>

            <input
              className="cursor-pointer"
              type="radio"
              name="service"
              id="Cook"
              value={"Cook"}
              required
              checked={service === "Cook"}
              onChange={(e) => setService(e.target.value)}
            />
            <label
              className="pt-0 pr-[10px] pb-2 pl-[5px] text-[14px] cursor-pointer"
              htmlFor="service"
            >
              Cook
            </label>

            <input
              className="cursor-pointer"
              type="radio"
              name="service"
              id="Toilet-Cleaning"
              value={"Toilet-Cleaning"}
              required
              checked={service === "Toilet-Cleaning"}
              onChange={(e) => setService(e.target.value)}
            />
            <label
              className="pt-0 pr-[10px] pb-2 pl-[5px] text-[14px] cursor-pointer"
              htmlFor="service"
            >
              Toilet Cleaner
            </label>

            <input
              className="cursor-pointer"
              type="radio"
              name="service"
              id="Electrician"
              value={"Electrician"}
              required
              checked={service === "Electrician"}
              onChange={(e) => setService(e.target.value)}
            />
            <label
              className="pt-0 pr-[10px] pb-2 pl-[5px] text-[14px] cursor-pointer"
              htmlFor="service"
            >
              Electrician
            </label>

            <input
              className="cursor-pointer"
              type="radio"
              name="service"
              id="Carpenter"
              value={"Carpenter"}
              required
              checked={service === "Carpenter"}
              onChange={(e) => setService(e.target.value)}
            />
            <label
              className="pt-0 pr-[10px] pb-2 pl-[5px] text-[14px] cursor-pointer"
              htmlFor="service"
            >
              Carpenter
            </label>

            <div className="pt-2 pb-2 flex justify-center">
              <input
                className="h-[40px] w-[80%] pt-0 pb-0 pr-[10px] pl-[10px] rounded-md border-solid border-[1px] outline-none"
                type="text"
                placeholder="Others more"
                name="text"
                value={service}
                onChange={(e) => setService(e.target.value)}
              />
            </div>
          </div>

          {/* button-container */}
          <div className="m-[15px 0] ">
            <button
              // className="w-full border border-black mt-[10px] p-[10px] block  text-white  rounded-xl h-14 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 hover:font-semibold"
              type="button"
              className="w-full border border-black mt-[10px] p-[10px] text-[20px] rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 "
              onClick={alertThankYou}
            >
              Apply
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
