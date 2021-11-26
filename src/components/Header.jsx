import React from "react";
import Logo from "../Assets/logoLinkMusic.png";
import { Link } from "react-router-dom";
import BurgerMenu from "../components/BurgerMenu";

const Header = (props) => {
  return (
    <div className="flex  ">
      <BurgerMenu />

      <div className="flex flex-row bg-blue-700 justify-end px-5 ">
        <Link to="/">
          <img src={Logo} alt="logo" className="flex h-20" />
        </Link>

        <h4 className="text-2xl text-gray-200 pt-6 px-5"> Link Music</h4>
      </div>
    </div>
  );
};

export default Header;
