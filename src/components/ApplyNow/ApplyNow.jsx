import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
export default function ApplyNow() {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <div className="new_bg h-screen pt-[60px] ">
        <h1 className="font-bold  text-[#078e93]  w-full text-[30px] text-center underline">
          Our Services
        </h1>
        {/* services */}
        <div className="p-[20px] w-[100%] flex justify-center gap-12 items-center m-[75px auto] text-center flex-wrap  rounded-md">
          {/* card */}
          <div className="p-[20px] transition duration-500 hover:scale-110 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] w-[300px] max-h-[900px] flex justify-between items-center flex-col  bg-white rounded-lg cursor-pointer">
            <div>
              <img
                className="rounded-2xl p-[10px] h-[200px] aspect-video object-cover"
                src="https://img.freepik.com/free-vector/laundry-isometric-dry-cleaning-composition_1284-17729.jpg?w=900&t=st=1714463187~exp=1714463787~hmac=ecf1020aa3942a4704cc349c99208dc59c14d88f1eeb202f2f5f00560f696eef"
                alt=""
              />
            </div>
            <h2 className="font-bold text-[#078e93] underline">DRY CLEANING</h2>

            <p className="font-[17px] mb-[30px] leading-6 text-[#5e5e5e] text-wrap">
              {" "}
              Join our team as a skilled laundryman,where your expertise in
              garment care will shine.
            </p>
            <button
              type="button"
              onClick={() => navigate("/drycleanapply")}
              className=" w-[180px] h-[30px] font-[15px] text-white rounded-lg bg-[#129aac] hover:bg-[#0d696c] "
            >
              Apply Now
            </button>
          </div>

          <div className=" w-[300px] transition duration-500 hover:scale-110 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] flex justify-between items-center flex-col mt-0-mb-0 mr-[20px] ml-[20px] p-[20px] bg-white  rounded-lg cursor-pointer">
            <div>
              <img
                className="rounded-2xl object-fill p-[10px] h-[200px] aspect-video"
                src="https://img.freepik.com/free-vector/cleaning-service-concept_1284-39253.jpg?w=740&t=st=1714468541~exp=1714469141~hmac=635d6038484e6d498dcf96a4ab7b63a43fa3dc9fa549feac79278122150f8756"
                alt=""
              />
            </div>
            <h2 className="font-bold text-[#078e93] underline">ASSISTANCE</h2>

            <p className="font-[17px] mb-[30px] leading-6 text-[#5e5e5e] text-wrap">
              We are looking for hardworking individuals to join our team as an
              assistance.
            </p>
            <button
              type="button"
              onClick={() => navigate("/assistanceapply")}
              className=" w-[180px] h-[30px] font-[15px] text-white rounded-lg bg-[#129aac] hover:bg-[#0d696c] "
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}
