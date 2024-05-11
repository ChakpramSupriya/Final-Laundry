import { useState } from "react";
import { Link } from "react-router-dom";
export default function Login() {
  const [userCreds, setUserCreds] = useState({
    email: "",
    password: "",
  });

  function handleInput(event) {
    setUserCreds((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(userCreds);
  }

  return (
    <>
      <section className="w-full h-screen bg-[rgb(216, 217, 221)] text-slate-600 flex justify-center items-center">
        <div className="box">
          <form className="form" onSubmit={handleSubmit}>
            <h3>Login to Services </h3>

            <input
              className="inp"
              type="email"
              required
              onChange={handleInput}
              placeholder="Enter Email"
              name="email"
              value={userCreds.email}
            />

            <input
              className="inp"
              type="password"
              required
              maxLength={8}
              onChange={handleInput}
              placeholder="Enter Password"
              name="password"
              value={userCreds.password}
            />

            <div>
              <button className="btn">
                <Link className="ln" to="/home">
                  Log In
                </Link>
              </button>
            </div>

            <p>
              Dont Have an Account ?{" "}
              <Link className="register" to="/register">
                Register Now
              </Link>
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
