import React from "react";
import Header from "../components/Header";
import FakeUser from "../Assets/fakeuser.png";

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

      <div>
        <p>Bill Sanders</p>
      </div>
    </div>
  );
};

export default Contact;
