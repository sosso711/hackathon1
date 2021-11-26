import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Footer = () => {
  return (
    <div className="flex-col flex-end justify-around items-center bg-blue-700 w-full h-auto sm:flex-row">
      <div className="flex items-center justify-center m-10">
        <p className="text-gray-200 mx-4 text-lg  ">Login</p>
        <AccountCircleIcon />
      </div>
      <div className="px-10 p-10">
        <h2 className="text-gray-200 text-lg mb-2"> Social Media</h2>
        <FacebookIcon />
        <TwitterIcon />
        <InstagramIcon />
        <LinkedInIcon />
      </div>
    </div>
  );
};

export default Footer;
