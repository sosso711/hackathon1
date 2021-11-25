import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul className="flex flex-row list-none">
          <li className="p-5">
            <Link to="/"> Home </Link>
          </li>

          <li className="p-5">
            <Link to="/profil"> My profil </Link>
          </li>

          <li className="p-5">
            <Link to="/contact"> My contacts </Link>
          </li>
          <li className="p-5">
            <Link to="/userForm"> Registration </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
