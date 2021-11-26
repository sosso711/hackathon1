import React from "react";
import Logo from "../Assets/logoLinkMusic.png";
import { Link } from "react-router-dom";
import BurgerMenu from "../components/BurgerMenu";

const Header = (props) => {
  return (
    <div className="sm:flex  ">
      <BurgerMenu />

      <div className="flex flex-col bg-blue-700 justify-center items-center w-full flex-start">
        <Link to="/">
          <img src={Logo} alt="logo" className="flex h-20" />
        </Link>

        <h4 className="text-4xl text-gray-200 pb-6"> Link Music</h4>
      </div>
    </div>
  );
};

export default Header;
