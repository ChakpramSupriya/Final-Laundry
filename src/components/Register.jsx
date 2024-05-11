import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
export default function Register() {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    password: "",
    current_password: "",
  });

  function handleInput(event) {
    setUserDetails((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/user/registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: userDetails.name,
          email: userDetails.email,
          password: userDetails.password,
        }),
      });
      const data = await response.json();
      console.log(data);
      console.log(userDetails);
      toast.success("user registered successfully");
      navigate("/login");
    } catch (err) {
      console.log(err);
      toast.err(err.message);
    }
  }

  return (
    <>
      <section className="w-full h-screen bg-[rgb(216, 217, 221)] text-slate-600 flex justify-center items-center">
        <div className="box">
          <form className="form" onSubmit={handleSubmit}>
            <h3>Start your Services </h3>
            <input
              className="inp"
              type="text"
              required
              onChange={handleInput}
              placeholder="Enter Name"
              name="name"
              value={userDetails.name}
            />

            <input
              className="inp"
              type="email"
              required
              onChange={handleInput}
              placeholder="Enter Email"
              name="email"
              value={userDetails.email}
            />

            <input
              className="inp"
              type="password"
              required
              maxLength={8}
              onChange={handleInput}
              placeholder="Enter Password"
              name="password"
              value={userDetails.password}
            />

            <input
              className="inp"
              type="password"
              required
              maxLength={8}
              onChange={handleInput}
              placeholder="Enter Confirm Password"
              name="confirm_password"
              value={userDetails.confirm_password}
            />

            <button type="submit" className="btn">
              Register
            </button>

            <p>
              Already Registered ?{" "}
              <Link className="register" to="/login">
                {" "}
                Login
              </Link>
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
