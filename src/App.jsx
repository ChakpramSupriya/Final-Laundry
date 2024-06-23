import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
// import Register from "./components/Register";
// import Login from "./components/Login";
import Home from "./components/Home";
import About from "./components/About";
import View_services from "./components/Services/View_services";
import Prices from "./components/Prices/Prices";
import Dryclean_book from "./components/Drycleaning/Dryclean_book";
import Assistance_book from "./components/Assistance/Assistance_book";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import Dryclean_steps from "./components/Dryclean_steps/Dryclean_steps";
import Notificationsuccess from "./components/notification/Notificationsuccess";
import Notificationoff from "./components/notification/Notificationoff";
import { HomeComponent } from "./components/HomeComponent";
import Dryclean_itemorder from "./components/Dryclean-itemorder/Dryclean-itemorder";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ApplyNow from "./components/ApplyNow/ApplyNow";
import LoginRegister from "./components/LoginRegister";
import MyOrder from "./components/Myorder/MyDryclean";
import DryCleaningApply from "./components/ApplyNow/DrycleaningApply";
import AssistanceApply from "./components/ApplyNow/AssistanceApply";
import { useState } from "react";
import MyDryClean from "./components/Myorder/MyDryclean";
import MyAssistance from "./components/Myorder/MyAssistance";

function App() {
  const [data, setData] = useState();
  const [name, setName] = useState();
  const [address, setAddress] = useState();
  const [contact, setContact] = useState();
  const [district, setDistrict] = useState();
  const [pincode, setPincode] = useState();
  const [message, setMessage] = useState();
  const [product, setProduct] = useState([]);
  const [item, setItem] = useState();
  const [amount, setAmount] = useState();
  const [assistanceamount, setAssistanceamount] = useState("");
  const seeData = () => {
    console.log(object);
  };

  const dryPost = async () => {
    try {
      // "fullname":"K Lanthoiba",
      // "address":"Patsoi",
      // "contactnumber":"546877679",
      // "district":"Imphal West",
      // "pincode":"795008",
      // "message":"Both Laundry and ironing",
      // "items":"1",
      // "productstype":["Shoes","Laptop","Mobile"],
      // "amount":"50"
      const object = {
        fullname: name,
        address,
        contactnumber: contact,
        district,
        pincode,
        message,
        items: item,
        productstype: product,
        amount,
      };
      console.log(object);
      const res = await fetch(
        "http://localhost:3000/bookdryclean/createdrycleanbook",
        {
          method: "POST",
          body: JSON.stringify(object),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const jsonRes = await res.json();
      console.log("yareey");
      console.log(jsonRes);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <ToastContainer />
      <MantineProvider>
        <BrowserRouter>
          <Routes>
            {/* <Route path="/" element={<Login />} /> */}
            <Route path="/" element={<LoginRegister />} />
            <Route path="/home" element={<Home />}>
              <Route index element={<HomeComponent />} />
              {/* <Route path="dry-clean-book" element={<Dryclean_book />} /> */}
            </Route>
            <Route path="/drycleansteps" element={<Dryclean_steps />} />
            <Route
              path="/drycleanbook"
              element={
                <Dryclean_book
                  seeData={seeData}
                  name={name}
                  address={address}
                  district={district}
                  setName={setName}
                  setAddress={setAddress}
                  setContact={setContact}
                  setDistrict={setDistrict}
                  setPincode={setPincode}
                  pincode={pincode}
                  setMessage={setMessage}
                />
              }
            />

            <Route
              path="/dryclean_itemorder"
              element={
                <Dryclean_itemorder
                  setProduct={setProduct}
                  setItem={setItem}
                  setAmount={setAmount}
                  amount={amount}
                  seeData={seeData}
                  dryPost={dryPost}
                />
              }
            />
            <Route
              path="/assistance-book"
              element={
                <Assistance_book
                  data={data}
                  setData={setData}
                  assistanceamount={assistanceamount}
                  setAssistanceamount={setAssistanceamount}
                />
              }
            />
            <Route
              path="/notification-success"
              element={
                <Notificationsuccess
                  data={data}
                  setData={setData}
                  assistanceamount={assistanceamount}
                  setAssistanceamount={setAssistanceamount}
                />
              }
            />
            <Route path="/notification-off" element={<Notificationoff />} />
            <Route path="/services" element={<View_services />} />
            <Route path="/prices" element={<Prices />} />
            {/* <Route path="/login" element={<Login />} /> */}
            {/* <Route path="/register" element={<Register />} /> */}
            <Route path="/about" element={<About />} />
            <Route path="/mybookdryclean" element={<MyDryClean />} />
            <Route path="/mybookassistance" element={<MyAssistance />} />
          </Routes>

          {/* Apply */}
          <Routes>
            <Route path="/applynow" element={<ApplyNow />} />
            <Route path="/drycleanapply" element={<DryCleaningApply />} />
            <Route path="/assistanceapply" element={<AssistanceApply />} />
          </Routes>
        </BrowserRouter>
      </MantineProvider>
    </>
  );
}

export default App;
