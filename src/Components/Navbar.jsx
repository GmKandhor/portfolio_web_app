import React, { useState } from "react";
import { navLinks } from "../index";
import { close, menu } from "../../../ui_ux web app/src/assets";
// import { useStateContext } from "../contexts/ContextProvider";

const Navbar = ({darkMode,setDarkMode}) => {
  const [toggle, setToggle] = useState(false);
  // const { darkMode } = useStateContext();
  // const darkMode = false
  return (
    <>
      <nav
        className={`w-full h-[70px]  flex py-6 justify-between  ${
          darkMode ? "bg-[#1b2e38]" : "bg-[#97b6c4]"
        }  md:px-20 items-center border-b-2 border-[#302c66] px-5`}
      >
        <h1 className={`w-[124px] text-[32px] ${darkMode ? "text-[#fff]" : "text-[#000]"} `}>Gm </h1>

        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
          {navLinks.map((link, index) => (
            <li
              key={index}
              className={`font-poppins font-normal cursor-pointer text-[16px] 
          ${index === navLinks.length - 1 ? "mr-0" : "mr-10"} ${darkMode ? "text-[#fff]" : "text-[#000]"}`}
            >
              <a href={`#${link.link}`}>{link.link}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            onClick={() => setToggle((pre) => !pre)}
            alt=""
          />

          <div
            className={`${
              toggle ? "flex" : "hidden"
            } absolute top-[80px] z-[10] bg-blue-950 p-3 w-[140px] text-[#fff] justify-center items-center rounded-2xl`}
          >
            <ul className="list-none  justify-end items-center flex-1">
              {navLinks.map((link, index) => (
                <li
                  key={index}
                  className={`font-poppins font-normal cursor-pointer text-[16px] text-white 
          ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
                >
                  <a href={`#${link.link}`}>{link.link}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
            <button className={`ml-4 p-4 ${darkMode ? "text-[#fff]" : "text-[#000]"}`} onClick={()=> setDarkMode((prev) => !prev) }>{darkMode ? "Enble Light Mode" : 'Enble Dark Mode'}</button>
      </nav>
    </>
  );
};

export default Navbar;
