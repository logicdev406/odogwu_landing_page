import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import HelthBenefits from "./components/HelthBenefits";
import WhyOdogwu from "./components/WhyOdogwu";
import MadeOf from "./components/MadeOf";
import WhyChooseUs from "./components/WhyChooseUs";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <HelthBenefits />
      <WhyOdogwu />
      <MadeOf />
      <WhyChooseUs />
    </div>
  );
};

export default Home;
