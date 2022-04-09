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
            className=" absolute top-8 left-8 "
          >
            <CloseRoundedIcon />
          </button>

          <a
            href="/"
            className=" my-2 text-lg text-white hover:text-lemonGreen "
          >
            About Us
          </a>
          <a
            href="/"
            className=" my-2 text-lg text-white hover:text-lemonGreen "
          >
            Our solution
          </a>
        </div>
      )}
    </>
  );
};

export default Menu;
