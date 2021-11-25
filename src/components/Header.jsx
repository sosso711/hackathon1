import React from "react";
import Logo from "../assets/logoLinkMusic.png";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div className=" sm:flex bg-blue-700 justify-center items-center">
      <Link to="/">
        <img src={Logo} alt="logo" className="flex h-56" />
      </Link>

      <h4 className="text-4xl text-gray-200 ml-48"> {props.name}</h4>
    </div>
  );
};

export default Header;
<h1> Link Music</h1>;
