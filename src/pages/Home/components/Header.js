import React from "react";
import backgroundImage from "../../../assets/image/background.png";
import leaf from "../../../assets/image/leaf.png";
import bitters from "../../../assets/image/bitters.png";

const Header = () => {
  return (
    <div
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className=" relative flex flex-col-reverse md:flex-col-reverse lg:flex-row items-center justify-center h-auto md:h-auto lg:h-[800px] w-full bg-black bg-center bg-no-repeat bg-cover py-20 "
    >
      <div className=" absolute top-0 h-full w-full bg-gradient-to-t from-black "></div>
      <div className="z-20 flex flex-col items-center md:items-center lg:items-start justify-center h-full w-full text-xl md:text-4xl lg:text-4xl font-poppins font-bold pl-0 md:pl-0 lg:pl-[200px] ">
        <h1 className=" text-white leading-snug text-center md:text-center lg:text-left px-5 md:px-28 lg:px-0 ">
          A smooth tasting <br className=" hidden md:hidden lg:inline-block " />{" "}
          <span className=" text-lemonGreen ">herbal mixture</span> with a{" "}
          <br className=" hidden md:hidden lg:inline-block " /> hint of Ginger &
          Honey!
        </h1>
        <button className=" focus:outline-none h-[45px] md:h-[50px] lg:h-[50px] w-[140px] md:w-[150px] lg:w-[150px] bg-lemonGreen text-black text-sm font-medium mt-[30px] ">
          Contact Us
        </button>
      </div>
      <div
        style={{ backgroundImage: `url(${leaf})` }}
        className=" relative flex flex-col items-center justify-end h-[260px] md:h-[450px] lg:h-full w-[260px] md:w-[450px] lg:w-full bg-no-repeat bg-center bg-contain mb-[40px] md:mb-[100px] lg:mb-0 "
      >
        <img
          className=" h-[270px] md:h-[420px] lg:h-[600px] "
          src={bitters}
          alt="bitters"
        />
      </div>
    </div>
  );
};

export default Header;
