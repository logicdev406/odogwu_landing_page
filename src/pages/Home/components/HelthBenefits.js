import React from "react";

const HelthBenefits = () => {
  return (
    <div className=" flex flex-col items-center justify-center h-auto md:h-auto lg:h-[400px] w-full bg-black font-poppins py-10 md:py-20 lg:py-0 ">
      <h1 className=" text-xl md:text-4xl lg:text-4xl text-lemonGreen font-semibold ">
        Health benefits
      </h1>
      <p className=" text-sm md:text-lg lg:text-xl text-white font-light mt-[20px] text-center px-5 md:px-20 lg:px-0 ">
        Odogwu bitters aids in boosting the immune system helps in the relief of
        stress <br className=" hidden md:hidden lg:inline-block " /> and
        regulation of blood sugar level and promotion of weight loss..
      </p>
    </div>
  );
};

export default HelthBenefits;
