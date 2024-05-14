import { IoPersonSharp } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import { FaBox } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      {" "}
      <header className="header">
        <div className="logo">
          <img src="title.png" alt="" />
        </div>
        <nav className="nav">
          <ul>
            <NavLink to="/home" className=" navbar text-[18px]">
              Home
            </NavLink>
            <NavLink to="/prices" className=" navbar text-[18px]">
              Prices
            </NavLink>
            <NavLink to="/about" className="  navbar text-[18px]">
              About Us
            </NavLink>
            <NavLink to="/notification-off">
              <IoIosNotifications className="navbarlogo text-[18px]" />
            </NavLink>
            <NavLink to="/">
              <IoPersonSharp className="navbarlogo text-[18px]" />
            </NavLink>
            <NavLink to="/applynow" className="  navbar text-[18px]">
              Apply
            </NavLink>
            <NavLink to="/myorder">
              <FaBox className=" navbarlogo text-[18px]" />
            </NavLink>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
