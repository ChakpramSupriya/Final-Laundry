import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <>
      <section className="footer">
        <div className="footer_home">
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
            <h1 className="footer_title">Quick Links</h1>
            <p>service_clean@gmail.com</p>
          </div>
        </div>
      </section>
    </>
  );
}
