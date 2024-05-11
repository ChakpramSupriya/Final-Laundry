import React from "react";
import Header from "../Header";
import { TiTickOutline } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
export default function Notificationsuccess() {
  const paymentHandler = async (e) => {
    const currency = "INR";
    const receiptId = "qwerty";
    const amount = 400;
    const response = await fetch("http://localhost:3000/order", {
      method: "POST",
      body: JSON.stringify({
        amount: amount * 100,
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
        name: "Web Services", //your customer's name
        email: "webservices@gmail.com",
        contact: "9362002083", //Provide the customer's phone number for better conversion rates
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
  const navigate = useNavigate();
  return (
    <>
      <Header />

      <div className="bg-[rgba(144,178,232,0.81)] w-full h-screen flex justify-center items-center flex-col gap-2">
        <TiTickOutline className="text-green-500 w-48 h-44" />
        <p>Your book is now confirm</p>
        <h2 className="text-blue-600">NOW AVAILABLE</h2>
        <button
          type="submit"
          className="click  bg-blue-300 hover:bg-blue-500"
          onClick={paymentHandler}
        >
          Continue to pay
        </button>
      </div>
    </>
  );
}
