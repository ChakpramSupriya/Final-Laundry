import { IoPersonSharp } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import { FaBox } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import { useDisclosure } from "@mantine/hooks";
import { Burger } from "@mantine/core";

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
  const [opened, { toggle }] = useDisclosure();

  return (
    <div>
      <header className="header">
        <div className="logo">
          <img className="w-[120px] h-[90px] pt-2 pb-1" src="logo.png" alt="" />
        </div>
        <div className="sm:hidden">
          <Burger
            opened={opened}
            onClick={toggle}
            aria-label="Toggle navigation"
          />
        </div>
        <nav className="nav hidden sm:block">
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
            {/* <NavLink to="/notification-off">
              <IoIosNotifications className="navbarlogo text-[18px]" />
            </NavLink> */}

            <NavLink to="/applynow" className="  navbar text-[18px]">
              Apply
            </NavLink>
            <li className="relative cursor-pointer group  ">
              <a className=" navbar text-[18px] flex ">
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
            <NavLink to="/">
              <IoPersonSharp className="navbarlogo text-[18px]" />
            </NavLink>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
