import React from "react";
import leaf from "../../../assets/image/leafOpacity.png";

const WhyChooseUs = () => {
  return (
    <div
      id="whyChooseUs"
      className=" relative flex flex-col items-center justify-center h-[600px] md:h-[800px] lg:h-[800px] w-full bg-darkblack text-white font-montserrat "
    >
      <h1 className=" text-xl md:text-2xl lg:text-3xl text-faintYellow font-normal font-garamond ">
        WHY CHOOSE US
      </h1>
      <p className=" text-lg md:text-xl lg:text-2xl text-white font-semibold my-4 text-center ">
        Joyful moments with every sip you take
      </p>
      <p className="  md:w-[90%] lg:w-[70%] text-white text-sm md:text-xl lg:text-xl font-medium text-center px-5 md:px-10 lg:px-0  ">
        Odogwu bitters helps in the relief of stress and regulation of blood
        sugar level and promotion of weight loss, it’s also a herbal alcoholic
        drink which contains an ancient herbal mix which also includes honey and
        ginger. this recipe has been trusted and proven to guarantee a fast and
        efficient result in the body.
      </p>
      <div className=" z-0 absolute top-[30px] md:top-14 lg:top-0 right-0 ">
        <img
          className=" w-[200px] md:w-[400px] lg:w-[450px] "
          src={leaf}
          alt="leaf"
        />
      </div>
    </div>
  );
};

export default WhyChooseUs;
