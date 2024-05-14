import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import About from "./components/About";
import View_services from "./components/Services/View_services";
import Prices from "./components/Prices/Prices";
import Dryclean_book from "./components/Drycleaning/Dryclean_book";
import Assistance_book from "./components/Assistance/Assistance_book";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import Dryclean_steps from "./components/Dryclean_steps/Dryclean_steps";
import Debitcard from "./components/Debitcard/Debitcard";
import Paymentsuccess from "./components/Paymentsuccess";
import Notificationsuccess from "./components/notification/Notificationsuccess";
import Notificationoff from "./components/notification/Notificationoff";
import { HomeComponent } from "./components/HomeComponent";
import Dryclean_itemorder from "./components/Dryclean-itemorder/Dryclean-itemorder";
import Cardpage from "./components/Cardpage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ApplyNow from "./components/ApplyNow/ApplyNow";
import LoginRegister from "./components/LoginRegister";
import MyOrder from "./components/MyOrder";
import DryCleaningApply from "./components/ApplyNow/DrycleaningApply";
import AssistanceApply from "./components/ApplyNow/AssistanceApply";

function App() {
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
            <Route path="/dry_clean_steps" element={<Dryclean_steps />} />
            <Route path="/dry-clean-book" element={<Dryclean_book />} />

            <Route
              path="/dryclean_itemorder"
              element={<Dryclean_itemorder />}
            />
            {/* <Route path="/cardpage" element={<Cardpage />} />
            <Route path="/debitcard" element={<Debitcard />} /> */}
            <Route path="/payment-success" element={<Paymentsuccess />} />
            <Route path="/assistance-book" element={<Assistance_book />} />
            <Route
              path="/notification-success"
              element={<Notificationsuccess />}
            />
            <Route path="/notification-off" element={<Notificationoff />} />
            <Route path="/services" element={<View_services />} />
            <Route path="/prices" element={<Prices />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about" element={<About />} />
            <Route path="/myorder" element={<MyOrder />} />
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
