import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import HelthBenefits from "./components/HelthBenefits";
import WhyOdogwu from "./components/WhyOdogwu";
import MadeOf from "./components/MadeOf";
import WhyChooseUs from "./components/WhyChooseUs";
import Footer from "./components/Footer";
import Menu from "./components/Menu";

const Home = () => {
  const [showMenu, setShowMenu] = useState(true);

  return (
    <div>
      <Menu showMenu={showMenu} setShowMenu={setShowMenu} />
      <Navbar showMenu={showMenu} setShowMenu={setShowMenu} />
      <Header />
      <HelthBenefits />
      <WhyOdogwu />
      <MadeOf />
      <WhyChooseUs />
      <Footer />
    </div>
  );
};

export default Home;
