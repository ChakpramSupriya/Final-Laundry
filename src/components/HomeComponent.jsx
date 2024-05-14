import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Footer from "./Footer";
export function HomeComponent() {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <section className="banner">
        <div className="laundry">
          <img className="image" src="home.png" alt="" />
        </div>
      </section>

      {/* services */}
      <section className="services">
        <h1 className="section_title"> OUR SERVICES</h1>
        <div className="services_content">
          <div className="service">
            <div className="service_img">
              <img src="/dryclean.png" alt="dry clean" />
            </div>
            <div className="service_details">
              <h3>DRY CLEANING</h3>
              {/* <Link className="" to={"/home/dry-clean-book"}>
                Click
              </Link> */}
              <button
                type="button"
                onClick={() => {
                  navigate("/dry_clean_steps");
                }}
              >
                Click
              </button>
            </div>
          </div>

          <div className="service">
            <div className="service_img">
              <img src="/assistance.png" alt="helper" />
            </div>
            <div className="service_details">
              <h3>ASSISTANCE</h3>
              <button
                type="button"
                onClick={() => {
                  navigate("/assistance-book");
                }}
              >
                Click
              </button>
            </div>
          </div>
        </div>
        <button
          type="button"
          className="view_services"
          onClick={() => {
            navigate("/services");
          }}
        >
          View all Services
        </button>
      </section>

      {/* about us */}
      <section className="services">
        <h1 className="section_title"> ABOUT US</h1>
        <div className="service_home">
          <img src="/about_home.svg" alt="" />
          <div>
            <p>
              Welcome to our services for service cleaning. Providing- dry
              cleaning and other assistance services for the unemployment people
              who search or seek for their part time jobs.
            </p>
          </div>
        </div>
        <button
          type="button"
          className="view_services"
          onClick={() => {
            navigate("/prices");
          }}
        >
          View Price List
        </button>
      </section>

      {/* footer */}
      <Footer />
    </>
  );
}
