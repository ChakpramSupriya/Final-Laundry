import { useState } from "react";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
export default function LoginRegister() {
  const [action, setAction] = useState(true);

  const registerLink = () => {
    setAction(false);
  };

  const loginLink = () => {
    setAction(true);
  };
  return (
    <div className="bg-[url('./assets/bgr.jpg')] bg-cover bg-center h-screen flex justify-center items-center">
      {/* wrapper */}
      <div
        className={
          "relative w-[420px] overflow-hidden shadow-[0_0_10_rgba(0,0,0,.2)] h-[450px] transition-height duration-200 ease-in-out backdrop-blur-[30px] transition-all  bg-transparent border border-[2px solid rgb(255,255,255, .1)] rounded-md flex items-center text-white "
        }
      >
        {/* form-box login */}
        <div
          className={`w-full p-[40px] transition-all ${
            action ? "block" : "-translate-x-[480px] "
          } `}
        >
          <form action="">
            <h1 className="font-bold text-[36px] text-center ">Login</h1>
            {/* input-box */}
            <div className=" border border-white rounded-3xl w-full h-[50px] mt-[30px] mb-[30px] flex justify-between px-4 items-center  hover: transition duration-500 hover:scale-110">
              <input
                className="w-full text-white h-full bg-transparent border-none outline-none border-solid-[2px] text-[rgba(255,255,255,.1)] rounded-xl pt-[20px] pr-[45px] pb-[20px] pl-[20px]"
                type="text"
                placeholder="Username"
                required
              />
              <FaUser />
              {/* icon */}
            </div>

            <div className="border border-white rounded-3xl  hover: transition duration-500 hover:scale-110 w-full h-[50px] mt-[30px] mb-[30px] flex justify-between px-4 items-center">
              <input
                className="flex text-white h-full bg-transparent outline-none border-solid-[2px] text-[rgba(255,255,255,.1)] rounded-xl pt-[20px] pr-[45px] pb-[20px] pl-[20px]"
                type="password"
                placeholder="Password"
                required
              />
              <FaLock />
            </div>

            {/* remember-forgot */}
            <div className="flex justify-between font-[14.5px] mt-[-15px] mb-[15px]">
              <label>
                {" "}
                <input
                  type="checkbox"
                  className="accent-white no-underline mr-[4px]"
                />
                Remember me
              </label>
              {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
              <a href="#" className="text-white hover:underline">
                {" "}
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full h-[45px] bg-white border border-none outline-none rounded-lg shadow-[0_0_10px_rgba(0,0,0,.1)] cursor-pointer text-[16px] text-black font-semibold  hover: transition duration-500 hover:scale-110"
            >
              Login
            </button>

            {/* register-link */}

            <div className="text-[14.5px] text-center mt-[20px] mb-[15px]">
              <p>
                Don't have an account?{" "}
                <button
                  type="button"
                  s
                  className="text-white font-semibold hover:underline"
                  href="#"
                  onClick={registerLink}
                >
                  Register
                </button>
              </p>
            </div>
          </form>
        </div>

        {/* form-box register */}
        <div
          className={`w-full p-[40px] ${
            !action ? "block" : "translate-x-[500px]"
          } absolute transition-all`}
        >
          <form action="">
            <h1 className="font-bold text-[36px] text-center ">Registration</h1>
            {/* input-box */}
            <div className=" border border-white  hover: transition duration-500 hover:scale-110 rounded-3xl w-full h-[50px] mt-[30px] mb-[30px] flex justify-between px-4 items-center ">
              <input
                className="w-full text-white h-full bg-transparent border-none outline-none border-solid-[2px] text-[rgba(255,255,255,.1)] rounded-xl pt-[20px] pr-[45px] pb-[20px] pl-[20px]"
                type="text"
                placeholder="Username"
                required
              />
              <FaUser />
              {/* icon */}
            </div>

            <div className="border border-white  hover: transition duration-500 hover:scale-110 rounded-3xl w-full h-[50px] mt-[30px] mb-[30px] flex justify-between px-4 items-center">
              <input
                className="flex flex-grow text-white h-full bg-transparent outline-none border-solid-[2px] text-[rgba(255,255,255,.1)] rounded-xl pt-[20px] pr-[45px] pb-[20px] pl-[20px]"
                type="email"
                placeholder="Email"
                required
              />
              <FaEnvelope />
            </div>

            <div className="border border-white  hover: transition duration-500 hover:scale-110 rounded-3xl w-full h-[50px] mt-[30px] mb-[30px] flex justify-between px-4 items-center">
              <input
                className="flex flex-grow text-white h-full bg-transparent outline-none border-solid-[2px] text-[rgba(255,255,255,.1)] rounded-xl pt-[20px] pr-[45px] pb-[20px] pl-[20px]"
                type="password"
                placeholder="Password"
                required
              />
              <FaLock />
            </div>

            {/* remember-forgot */}
            <div className="flex justify-between font-[14.5px] mt-[-15px] mb-[15px]">
              <label>
                {" "}
                <input
                  type="checkbox"
                  className="accent-white no-underline mr-[4px]"
                />
                I agree to the terms & conditions
              </label>
            </div>

            <button
              type="submit"
              className="w-full h-[45px] bg-white border border-none outline-none rounded-lg shadow-[0_0_10px_rgba(0,0,0,.1)] cursor-pointer text-[16px] text-black font-semibold  hover: transition duration-500 hover:scale-110"
            >
              Register
            </button>

            {/* register-link */}

            <div className="text-[14.5px] text-center mt-[20px] mb-[15px]">
              <p>
                Already have an account?{" "}
                <button
                  type="button"
                  className="text-white font-semibold hover:underline"
                  href="#"
                  onClick={loginLink}
                >
                  Login
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
