import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import HelthBenefits from "./components/HelthBenefits";
import WhyOdogwu from "./components/WhyOdogwu";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <HelthBenefits />
      <WhyOdogwu />
    </div>
  );
};

export default Home;
