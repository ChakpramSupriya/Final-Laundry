import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { useState, useEffect } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { toast } from "react-toastify";

const MyAssistance = () => {
  const [listdata, setlistdata] = useState();
  const fetchData = async () => {
    try {
      const res = await fetch(
        "http://localhost:3000/bookassistance/getassistancebook"
      );
      const data = await res.json();
      if (data.success) {
        setlistdata(data.bookassistanceget);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const DeleteAssistance = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:3000/bookassistance/deletebookassistance/${id}`,
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
      <div className="w-full h-fit bg-[rgb(216,217,221)] pt-20 pb-24">
        <h1 className="flex justify-center text-[20px] underline">
          Assistance services
        </h1>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Full Name</th>
              <th>Address</th>
              <th>Contact Number</th>
              <th>Service title</th>
              <th>Worker</th>
              <th>Date</th>
              <th>Time(hrs)</th>
              <th>Durations</th>
              <th>Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {listdata?.map((eachElement, i) => {
              return (
                <tr key={eachElement._id}>
                  <td>{i + 1}</td>
                  <td>{eachElement.fullname}</td>
                  <td>{eachElement.address}</td>
                  <td>{eachElement.contactnumber}</td>
                  <td>{eachElement.serviceavailable}</td>
                  <td>{eachElement.workers}</td>
                  <td>{eachElement.date}</td>
                  <td>{eachElement.time}</td>
                  <td>{eachElement.duration}</td>
                  <td>₹ {eachElement.amount}</td>
                  <td
                    className=" flex justify-center"
                    onClick={() => DeleteAssistance(eachElement._id)}
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

export default MyAssistance;
