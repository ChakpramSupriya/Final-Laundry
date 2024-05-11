import { IoPersonSharp } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
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
            <NavLink to="/home" className="navbar">
              Home
            </NavLink>
            <NavLink to="/prices" className="navbar">
              Prices
            </NavLink>
            <NavLink to="/about" className="navbar">
              About Us
            </NavLink>
            <Link to="/notification-off">
              <IoIosNotifications className="person" />
            </Link>
            <Link to="/login">
              <IoPersonSharp className="person" />
            </Link>
            <NavLink to="/applynow" className="navbar">
              Apply
            </NavLink>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
