import React, { useState, useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { RiDeleteBin6Line } from "react-icons/ri";

import { toast } from "react-toastify";

const MyDryClean = () => {
  const [listData, setListData] = useState();
  const fetchData = async () => {
    try {
      const res = await fetch(
        "http://localhost:3000/bookdryclean/getdrycleanbook"
      );
      const data = await res.json();
      console.log(data);
      setListData(data.bookdrycleanget);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const DeleteDryclean = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:3000/bookdryclean/deletebookdryclean/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      if (data.success) {
        toast.success(data.message);
        fetchData();
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      <Header />
      <div className="sm:w-full max-h-fit bg-[rgb(216,217,221)] pt-24 pb-28 ">
        <h1 className="flex justify-center text-[20px] underline">
          Dry Cleaning Services
        </h1>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Full Name</th>
              <th>Address</th>
              <th>Contact Number</th>
              <th>Message</th>
              <th>Items</th>
              <th>Product types</th>
              <th>Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {listData?.map((eachElement, i) => {
              return (
                <tr key={eachElement._id}>
                  <td>{i + 1}</td>
                  <td>{eachElement.fullname}</td>
                  <td>{eachElement.address}</td>
                  <td>{eachElement.contactnumber}</td>
                  <td>{eachElement.message}</td>
                  <td>{eachElement.items}</td>
                  <td>{eachElement.productstype}</td>
                  <td>₹ {eachElement.amount}</td>
                  <td
                    className="flex justify-center"
                    onClick={() => DeleteDryclean(eachElement._id)}
                  >
                    <RiDeleteBin6Line size={30} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <hr />
      </div>
      <Footer />
    </>
  );
};

export default MyDryClean;
