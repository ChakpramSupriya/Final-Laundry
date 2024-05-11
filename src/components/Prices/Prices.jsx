import React, { useState } from "react";
import "./Prices.css";
import Header from "../Header";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import casual_wear from "./casual_wear.json";
import { Accordion } from "@mantine/core";
import Footer from "../Footer";
import { useEffect } from "react";

export default function Prices() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <div className="prices">
        <Header />
        <div className="price">
          <div
            style={{
              width: "max-content",
            }}
          >
            <h1>PRICING</h1>
            <p>
              We can save your time and enjoy doing things you love. Our prices
              are simple and affordable.
            </p>
            <br />
            <h2>DRY CLEANING SERVICES PRICES</h2>

            <Accordion
              style={{
                minWidth: "20rem",
              }}
            >
              {casual_wear.map((item) => (
                <Accordion.Item key={item.id} value={item.groupName}>
                  <Accordion.Control>{item.groupName}</Accordion.Control>
                  <Accordion.Panel>
                    {item.data.map((casualItem) => (
                      <>
                        <div
                          style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(2, 1fr)",
                            width: "100%",
                          }}
                        >
                          <div>{casualItem.casual}</div>
                          <div
                            style={{
                              justifySelf: "flex-end",
                            }}
                          >
                            Rs. {casualItem.money}
                          </div>
                        </div>
                      </>
                    ))}
                  </Accordion.Panel>
                </Accordion.Item>
              ))}
            </Accordion>
            <br />
            <h2>ASSISTANCE SERVICES PRICES</h2>
            <div className="span">
              SWEEPER <span> Rs.400/hour</span>
            </div>
            <div className="span">
              COOKING <span>Rs.400/hour</span>{" "}
            </div>
            <div className="span">
              PLUMBER <span> Rs.400/hour</span>{" "}
            </div>
            <div className="span">
              DISH WASHING <span> Rs.400/hour</span>{" "}
            </div>
            <div className="span">
              CARE TAKING <span> Rs.400/hour</span>{" "}
            </div>
            <div className="span">
              ELECTRICIAN <span> Rs.400/hour</span>{" "}
            </div>
            <div className="span">
              OTHERS more <span> Rs.400/hour</span>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
