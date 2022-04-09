import React from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const Menu = ({ showMenu, setShowMenu }) => {
  return (
    <>
      {showMenu && (
        <div className=" z-40 fixed top-0 flex flex-col items-center justify-center h-screen w-full bg-black text-white ">
          <button
            onClick={() => {
              return setShowMenu(!showMenu);
            }}
            className=" absolute top-5 right-5 "
          >
            <CloseRoundedIcon fontSize="large" />
          </button>

          <a
            href="#aboutUs"
            onClick={() => {
              setShowMenu(!showMenu);
            }}
            className=" my-2 text-lg text-white hover:text-lemonGreen "
          >
            About Us
          </a>
          <a
            href="#ourSolution"
            onClick={() => {
              setShowMenu(!showMenu);
            }}
            className=" my-2 text-lg text-white hover:text-lemonGreen "
          >
            Our solution
          </a>
          <a
            href="#whyChooseUs"
            onClick={() => {
              setShowMenu(!showMenu);
            }}
            className=" my-2 text-lg text-white hover:text-lemonGreen "
          >
            Why choose us
          </a>
        </div>
      )}
    </>
  );
};

export default Menu;
