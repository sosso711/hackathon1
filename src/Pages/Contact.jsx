import React from "react";
import Header from "../components/Header";
import Slide from "../components/Slide";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <Header name="My contacts" />

      <div className="flex justify-center m-10">
        <Slide />
      </div>
    </div>
  );
};

export default Contact;
