import React from "react";
import Header from "../components/Header";
import FakeUser from "../Assets/fakeuser.png";
import VerticalCarousel from "../components/VerticalCarousel";

const Contact = () => {
  return (
    <div>
      <Header name="My contacts" />
      <div className="flex justify-center items-center">
        <img
          src={FakeUser}
          alt="fake user"
          className="rounded-full shadow-lg m-6 w-48"
        />
      </div>
      <VerticalCarousel />
      <div className="border-2 border-gray-500 w-2/5 text-center rounded-xl flex justify-center flex-col">
        <p>Bill Sanders</p>
        <p>bill.sanders@wild.com</p>
        <p>Maanger de tournée</p>
        <p>+33 12345678</p>
      </div>
    </div>
  );
};

export default Contact;
