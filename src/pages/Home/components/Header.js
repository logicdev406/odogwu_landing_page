import React from "react";
import backgroundImage from "../../../assets/image/background.png";
import leaf from "../../../assets/image/leaf.png";
import bitters from "../../../assets/image/bitters.png";

const Header = () => {
  return (
    <div
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className=" relative flex items-center justify-center h-[800px] w-full bg-black bg-center bg-no-repeat bg-cover "
    >
      <div className=" absolute top-0 h-full w-full bg-gradient-to-t from-black "></div>
      <div className="z-20 flex flex-col items-start justify-center h-full w-full text-4xl font-poppins font-bold pl-[200px] ">
        <h1 className=" text-white leading-snug ">
          A smooth tasting <br />{" "}
          <span className=" text-lemonGreen ">herbal mixture</span> with a{" "}
          <br /> hint of Ginger & Honey!
        </h1>
        <button className=" focus:outline-none h-[50px] w-[150px] bg-lemonGreen text-black text-sm font-medium mt-[30px] ">
          Contact Us
        </button>
      </div>
      <div
        // style={{ backgroundImage: `url(${leaf})` }}
        className=" relative flex flex-col items-center justify-center h-full w-full bg-no-repeat bg-center bg-origin-content "
      >
        <img className=" absolute top-[12%] h-[550px] " src={leaf} alt="leaf" />
        <img
          className="z-20 absolute top-[12%] h-[550px] "
          src={bitters}
          alt="bitters"
        />
      </div>
    </div>
  );
};

export default Header;
