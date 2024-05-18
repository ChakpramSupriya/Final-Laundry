import { IoPersonSharp } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import { FaBox } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";

const DropdownLink = [
  {
    id: 1,
    name: "Mydryclean",
    link: "/mybookdryclean",
  },
  {
    id: 2,
    name: "Myassistance",
    link: "/mybookassistance",
  },
];
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
            <li className="relative cursor-pointer group  ">
              <a href="" className=" navbar text-[18px] flex ">
                Mybook
                <span>
                  <IoMdArrowDropdown className=" navbar text-[18px] mt-1" />
                </span>
              </a>
              <div className="absolute z-[9999] hidden group-hover:block">
                <ul className="space-y-1">
                  {DropdownLink.map((data, index) => (
                    <li>
                      <a
                        className="text-[14px] inline-block w-full p-1 hover:bg-white rounded-md"
                        href={data.link}
                      >
                        {data.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
