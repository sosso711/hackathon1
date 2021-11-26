import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul className="flex flex-row list-none h-18">
          <li className="pl-10 pt-2">
            <Link to="/"> Home </Link>
          </li>

          <li className="pl-10 pt-2">
            <Link to="/profil"> My profil </Link>
          </li>

          <li className="pl-10 pt-2">
            <Link to="/contact"> My contacts </Link>
          </li>
          <li className="pl-10 pt-2">
            <Link to="/userForm"> Registration </Link>
          </li>
          <div className="flex justify-end pl-96">
            <input
              type="text"
              placeholder="    🔎"
              className=" w-48 rounded-xl m-2 border-2"
            />
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
