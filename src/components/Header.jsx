import React from "react";

const Header = (props) => {
  return (
    <div className="flex justify-end items-center bg-blue-500 w-full h-48 ">
      <h1 className="text-3xl text-center">Link Music</h1>
      <h4> {props.name}</h4>
    </div>
  );
};

export default Header;
<h1> Link Music</h1>;
