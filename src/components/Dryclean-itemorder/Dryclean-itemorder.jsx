import React, { useState } from "react";
import Header from "../Header";
import { FaArrowCircleLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
import { MultiSelect } from "@mantine/core";
import { NumberInput } from "@mantine/core";

export default function Dryclean_itemorder() {
  const rateData = [
    {
      type: "Shirt",
      rate: 20,
    },
    {
      type: "Longsleeve",
      rate: 30,
    },
    {
      type: "Uniform",
      rate: 80,
    },
    {
      type: "Blazer",
      rate: 100,
    },
    {
      type: "Coats",
      rate: 220,
    },
    {
      type: "Jackets",
      rate: 180,
    },
    {
      type: "Raincoats",
      rate: 150,
    },
    {
      type: "Vests",
      rate: 160,
    },
    {
      type: "Formal pants",
      rate: 60,
    },
    {
      type: "Jeans",
      rate: 80,
    },
    {
      type: "Shorts pants",
      rate: 40,
    },
    {
      type: "Buttons",
      rate: 70,
    },
    {
      type: "Betsheets",
      rate: 100,
    },
    {
      type: "Pillow covers",
      rate: 50,
    },
    {
      type: "Curtains",
      rate: 60,
    },
    {
      type: "Bednets",
      rate: 120,
    },
    {
      type: "Shoes",
      rate: 100,
    },
    {
      type: "Bags",
      rate: 150,
    },
  ];
  const [rate, setRate] = useState(0);
  const navigate = useNavigate();
  const [select, setSelect] = useState();
  const [amount, setAmount] = useState("");
  const paymentHandler = async (e) => {
    const currency = "INR";
    const receiptId = "qwerty";
    const response = await fetch("http://localhost:3000/order", {
      method: "POST",
      body: JSON.stringify({
        amount: rate * 100,
        currency,
        receipt: receiptId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const order = await response.json();
    console.log(order);

    const options = {
      key: "rzp_test_JIH6EhvgsXj43w", // Enter the Key ID generated from the Dashboard
      amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency,
      name: "Supriya ch", //your business name
      description: "Test Transaction",
      // image: "https://example.com/your_logo",
      order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      handler: async (response) => {
        const body = {
          ...response,
        };

        const validateRes = await fetch(
          "http://localhost:3000/order/validate",
          {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const jsonRes = await validateRes.json();
        console.log(jsonRes);
      },
      prefill: {
        //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
        name: "Web Dev Matrix", //your customer's name
        email: "webdevmatrix@example.com",
        contact: "9000000000", //Provide the customer's phone number for better conversion rates
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.on("payment.failed", (response) => {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });
    rzp1.open();
    e.preventDefault();
  };
  // console.log(select);

  const setPriceRate = (value) => {
    // console.log(value);
    let prices = [];
    setRate(0);
    for (let product = 0; product < value.length; product++) {
      let price = rateData
        .map((r) => {
          if (value[product] === r.type) {
            return r.rate;
          }
          return null; // or undefined, depending on your preference
        })
        .filter((price) => price !== null && price !== undefined);
      prices = prices.concat(price);
    }

    // price = rateData.map((r) => {
    //   if (product === r.type) {
    //     return r.rate;
    //   }
    // });
    // setRate(
    //   prices.reduce((acc, r) => {
    //     acc + r;
    //   })
    // );
    console.log(prices);
    setRate(prices.reduce((acc, r) => acc + r, 0));
  };
  console.log(rate);
  return (
    <>
      <Header />
      {/* <div className=" w-full bg-[rgba(144,178,232,0.81)] pt-20">
        <button
          type="button"
          onClick={() => {
            navigate("/dry-clean-steps");
          }}
        >
          <FaArrowCircleLeft className="w-40 h-10" />
        </button>
      </div> */}
      <div className="bg-[rgba(144,178,232,0.81)] h-screen w-full flex justify-center flex-col items-center ">
        <div className="bg-white mt-6 w-[40em] h-fit p-8   flex justify-center flex-col items-center rounded-lg gap-y-3">
          <div className="flex gap-6">
            {/* <div className=" flex flex-col ">
              <label className="text-center">Item</label>
              <input
                type="number"
                className="border border-gray-400 indent-2 "
                placeholder="Items"
              />
            </div> */}
            <NumberInput
              label="Items"
              placeholder="Number of items"
              clampBehavior="strict"
              min={0}
              max={20}
            />

            {/* <div className=" flex flex-col">
              <label className="text-center">Pieces</label>
              <input
                type="number"
                className="border border-gray-400 indent-2"
                placeholder="Pieces"
              />
            </div> */}
            {/* <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Pieces" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select> */}
            <MultiSelect
              className="h-fit"
              onChange={(value) => {
                setPriceRate(value);
              }}
              label="Product type"
              placeholder="Pick value"
              data={[
                "Shirt",
                "Longsleeve",
                "Uniform",
                "Blazer",
                "Coats",
                "Jackets",
                "Raincoats",
                "Vests",
                "Formal pants",
                "Jeans",
                "Shorts pants",
                "Buttons",
                "Betsheets",
                "Pillow covers",
                "Curtains",
                "Bednets",
                "Shoes",
                "Bags",
              ]}
            />
          </div>
          <input
            type="text"
            className="border mt-10 border-gray-400 indent-2 min-h-20 w-full"
            placeholder="Your details:"
          />
          <div className=" w-full">
            <label className="text-center">Amount:</label>
            <input
              type="text"
              className="border border-gray-400 indent-2"
              placeholder="Rs......"
              value={rate}
            />
          </div>
          <input
            type="text"
            className="border border-gray-400 indent-2 min-h-20 w-full"
            placeholder="Your comments:"
          />
          {rate > 1 && (
            <button
              type="submit"
              className="click  bg-blue-300 hover:bg-blue-500"
              onClick={paymentHandler}
            >
              Continue to pay
            </button>
          )}
        </div>
      </div>
    </>
  );
}
