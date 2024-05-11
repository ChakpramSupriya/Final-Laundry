import Footer from "./Footer";
import Header from "./Header";
import { useEffect } from "react";
export default function About() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <Header />
      <div className="section-about">
        <h1 className="about_laun">ABOUT US</h1>

        <div className="about">
          <img className="about-img" src="/about1.png" alt="" />
          <div className="about1">
            <p>
              We always ensure the quality of laundry and dry cleaning. Our team
              is ready to satisfied the customer.
            </p>
            <p>
              We ensure making clothes flat and smooth, using an iron to meet
              customer satisfaction.
            </p>
          </div>
        </div>

        <div className="about">
          <p className="about1">
            We ensure the customer for their refreshment and helps them in their
            household needs.
          </p>
          <img className="about-img" src="/about2.png" alt="" />
        </div>
      </div>

      <Footer />
    </>
  );
}
