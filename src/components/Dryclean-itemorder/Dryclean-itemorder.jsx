import React, { useState } from "react";
import Header from "../Header";
import { FaArrowCircleLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Button } from "@mantine/core";
import Swal from "sweetalert2";

import { MultiSelect } from "@mantine/core";
import { NumberInput } from "@mantine/core";

export default function Dryclean_itemorder() {
  const [opened, { open, close }] = useDisclosure(false);

  const rateData = [
    {
      type: "Shirt",
      rate: 10,
    },
    {
      type: "Longsleeve",
      rate: 20,
    },
    {
      type: "Uniform",
      rate: 50,
    },
    {
      type: "Blazer",
      rate: 80,
    },
    {
      type: "Coats",
      rate: 100,
    },
    {
      type: "Jackets",
      rate: 120,
    },
    {
      type: "Raincoats",
      rate: 120,
    },
    {
      type: "Vests",
      rate: 120,
    },
    {
      type: "Formal pants",
      rate: 30,
    },
    {
      type: "Jeans",
      rate: 50,
    },
    {
      type: "Shorts pants",
      rate: 20,
    },
    {
      type: "Buttons",
      rate: 60,
    },
    {
      type: "Betsheets",
      rate: 50,
    },
    {
      type: "Pillow covers",
      rate: 20,
    },
    {
      type: "Curtains",
      rate: 40,
    },
    {
      type: "Bednets",
      rate: 80,
    },
    {
      type: "Shoes",
      rate: 80,
    },
    {
      type: "Bags",
      rate: 50,
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
      const price = rateData
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

  const alertOk = () => {
    Swal.fire({
      title: "Good job!",
      text: "Thank you for your service",
      icon: "success",
    });
    navigate("/myorder");
  };
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
            <NumberInput
              label="Items"
              placeholder="Number of items"
              clampBehavior="strict"
              min={0}
              max={20}
            />

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
          {/* <input
            type="text"
            className="border mt-10 border-gray-400 indent-2 min-h-20 w-full"
            placeholder="Your details:"
          /> */}
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
          <Modal
            opened={opened}
            onClose={close}
            // type="submit"
            // onClick={paymentHandler}
            centered
          >
            <div className="flex flex-col gap-4">
              <Button
                onClick={alertOk}
                className=" bg-blue-300 hover:bg-blue-500"
              >
                Case On Delivery
              </Button>

              <Button
                className="bg-blue-300 hover:bg-blue-500"
                onClick={paymentHandler}
              >
                Rayzor Payment
              </Button>
            </div>
          </Modal>
          <Button
            className="click  bg-blue-300 hover:bg-blue-500"
            onClick={open}
          >
            Open modal
          </Button>
        </div>
      </div>
    </>
  );
}
