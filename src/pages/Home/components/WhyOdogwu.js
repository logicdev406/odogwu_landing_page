import React from "react";
import icecubes from "../../../assets/image/icecubes.png";

const WhyOdogwu = () => {
  return (
    <div
      id="aboutUs"
      className=" relative flex flex-col items-center justify-center h-[800px] w-full bg-black "
    >
      <h1 className=" text-xl md:text-4xl lg:text-4xl text-lemonGreen font-semibold text-center ">
        Why odogwu bitters drink is{" "}
        <br className=" hidden md:hidden lg:inline-block " /> special?
      </h1>
      <p className=" text-sm md:text-lg lg:text-xl text-white font-light mt-[20px] text-center px-5 md:px-20 lg:px-0 ">
        Odogwu bitters helps in the relief of stress and regulation of blood
        sugar level and <br className=" hidden md:hidden lg:inline-block " />{" "}
        promotion of weight loss, it's also a herbal alcoholic drink which
        contains an ancient{" "}
        <br className=" hidden md:hidden lg:inline-block " /> herbal mix which
        also includes honey and ginger. this recipe has been trusted and{" "}
        <br className=" hidden md:hidden lg:inline-block " /> proven to
        guarantee a fast and efficient result in the body.
      </p>
      <div
        style={{ backgroundImage: `url(${icecubes})` }}
        className=" absolute top-0 h-full w-full bg-top bg-no-repeat bg-cover "
      ></div>
    </div>
  );
};

export default WhyOdogwu;
