import React, { useState, useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";

const MyDryClean = () => {
  const [listData, setListData] = useState();
  useEffect(() => {
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
    fetchData();
  }, []);
  return (
    <>
      <Header />
      <div className="w-full h-fit bg-[rgb(216,217,221)] pt-20">
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
                  <td>{eachElement.amount}</td>
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
