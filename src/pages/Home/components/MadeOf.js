import React from "react";
import backgroundImage from "../../../assets/image/background.png";
import lion from "../../../assets/image/lion.png";

const MadeOf = () => {
  return (
    <div
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className=" relative flex flex-col items-start justify-center h-[800px] w-full bg-black bg-center bg-no-repeat bg-cover font-montserrat text-4xl overflow-hidden "
    >
      <div className=" z-30 flex flex-col items-start justify-center pl-[250px] ">
        <h1 className=" font-bold font-garamond text-xl text-lemonGreen ">
          WHAT WE ARE MADE OF
        </h1>
        <p className=" text-2xl text-white font-semibold my-6 ">
          Ingredients that make drink{" "}
          <br className=" hidden md:hidden lg:inline-block " /> authentic
        </p>
        <p className=" text-white text-xl font-medium ">
          Odogwu bitters is a herbal alcoholic drink which contains{" "}
          <br className=" hidden md:hidden lg:inline-block " /> an ancient
          herbal mix which also includes honey and{" "}
          <br className=" hidden md:hidden lg:inline-block " />
          ginger. this recipe has been trusted and proven to{" "}
          <br className=" hidden md:hidden lg:inline-block " /> guarantee a fast
          and efficient result in the body.
        </p>
      </div>
      <div className=" z-0 absolute right-[180px] bottom-[-500px] ">
        <img className=" h-[1250px] opacity-80 " src={lion} alt="lion" />
      </div>
      <div className=" absolute top-0 h-full w-full bg-green-800 bg-opacity-20 "></div>
    </div>
  );
};

export default MadeOf;
