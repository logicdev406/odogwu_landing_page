import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import logo from "../../../assets/logo/logo.svg";
import facebook from "../../../assets/image/facebook.svg";
import twitter from "../../../assets/image/twitter.svg";
import instagram from "../../../assets/image/instagram.svg";
import gmail from "../../../assets/image/gmail.svg";
import MailIcon from "@mui/icons-material/Mail";

const Footer = () => {
  return (
    <div className=" flex flex-col md:flex-col lg:flex-row items-center justify-between h-auto md:h-auto lg:h-[600px] w-full font-montserrat text-white bg-black px-[10%] py-20 md:py-[80px] lg:py-0">
      <div className=" flex flex-col items-center md:items-center lg:items-start text-sm md:text-base lg:text-base pb-[50px] md:pb-[80px] lg:pb-0 ">
        {" "}
        <img
          className=" h-[70px] md:h-[80px] lg:h-[80px] "
          src={logo}
          alt="logo"
        />
        <p className=" text-base mt-[30px] ">
          {" "}
          <span className=" mr-2 ">
            <LocationOnIcon fontSize="large" />
          </span>{" "}
          Location
        </p>
        <p className=" text-base my-4 pl-1 ">
          {" "}
          <span className=" mr-2 ">
            <MailIcon fontSize="medium" />
          </span>{" "}
          Ouremail@gmail.com
        </p>
        <div className=" flex items-center mt-4 ">
          <img className=" mr-3 " src={facebook} alt="facebook" />
          <img className=" mx-3 " src={twitter} alt="twitter" />
          <img className=" mx-3 " src={instagram} alt="instagram" />
          <img className=" mx-3 " src={gmail} alt="gmail" />
        </div>
      </div>{" "}
      <div className=" flex flex-col items-center text-sm md:text-base lg:text-base pb-[50px] md:pb-[80px] lg:pb-0 ">
        <p>
          <a href="/#">Our solution</a>
        </p>
        <p>
          <a href="/#">About Us</a>
        </p>
      </div>
      <div className=" flex flex-col items-center md:items-center lg:items-start ">
        <p className=" text-center md:text-center lg:text-left text-sm md:text-base lg:text-base ">
          Join Our Newsletter And Get Update <br /> About Odogwu Bitters
        </p>
        <div className=" flex items-center h-[45px] md:h-[50px] lg:h-[50px] w-[330px] md:w-[380px] lg:w-[380px] bg-white mt-6 ">
          <input
            className=" h-full w-full outline-none text-black px-2 "
            type="text"
            placeholder="Email Address"
          />
          <button className=" h-full w-[180px] bg-lemonGreen text-sm text-black ">
            Subscribe Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
