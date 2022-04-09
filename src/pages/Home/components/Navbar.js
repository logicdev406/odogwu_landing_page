import React from "react";
import logo from "../../../assets/logo/logo.svg";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

const Header = ({ showMenu, setShowMenu }) => {
  return (
    <div className=" flex items-center justify-center h-[70px] md:h-[85px] lg:h-[85px] w-full bg-black font-montserrat ">
      <div className=" flex items-center justify-between h-full w-[90%] md:w-[700px] lg:w-[90%] ">
        <img
          className=" h-[40px] md:h-[50px] lg:h-[50px] "
          src={logo}
          alt="logo"
        />
        <div className="  items-center text-white text-sm font-medium hidden md:inline-flex lg:inline-flex">
          <p className=" mx-7 md:mx-4 lg:mx-7 text-lemonGreen ">About Us</p>
          <p className=" mx-7 md:mx-4 lg:mx-7 ">Our solution</p>
          <button className=" focus:outline-none h-[45px] w-[145px] bg-lemonGreen text-black font-medium ml-7 md:ml-4 lg:ml-7 ">
            Contact
          </button>
        </div>
        <button
          onClick={() => {
            return setShowMenu(!showMenu);
          }}
          className=" focus:outline-none block md:hidden lg:hidden text-white"
        >
          <MenuRoundedIcon fontSize="large" />
        </button>
      </div>
    </div>
  );
};

export default Header;
