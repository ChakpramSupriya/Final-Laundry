import { useEffect } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    let isLogin = localStorage.getItem("isLogin");
    if (isLogin) {
      navigate("/home");
    } else {
      navigate("/home");
    }
  });
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
