import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <>
      <section className="footer ">
        <div className="footer_home ">
          <img className=" object-contain " src="/home_footer.png" alt="" />
          <div>
            <h1 className="footer_title">Menu</h1>
            <ul className="cursor-pointer">
              <li
                onClick={() => {
                  navigate("/home");
                }}
              >
                Home
              </li>
              <li
                onClick={() => {
                  navigate("/about");
                }}
              >
                About Us
              </li>
              <li
                onClick={() => {
                  navigate("/services");
                }}
              >
                Services
              </li>
            </ul>
          </div>
          <div>
            <h1 className="footer_title ">Important Links</h1>
            <p className="text-[3px]">household_helper_services@gmail.com</p>
            <h1 className=" text-[18px]">Contact Us</h1>
            <p>+91 9362002083</p>
            <p>+91 6009989957</p>
            <p>+91 9862163299</p>
          </div>
        </div>
      </section>
    </>
  );
}
