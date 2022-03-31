import React from "react";
import logo from "../../../assets/logo/logo.svg";

const Header = () => {
  return (
    <div className=" flex items-center justify-center h-[85px] w-full bg-black font-montserrat ">
      <div className=" flex items-center justify-between h-full w-[80%] ">
        <img className=" h-[50px] " src={logo} alt="logo" />
        <div className=" flex items-center text-white text-sm font-medium ">
          <p className=" mx-7 text-lemonGreen ">About Us</p>
          <p className=" mx-7 ">Our solution</p>
          <button className=" focus:outline-none h-[50px] w-[150px] bg-lemonGreen text-black font-medium ml-7 ">
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
