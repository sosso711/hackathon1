import React from "react";
import Header from "../components/Header";
import UserRegistration from "../components/UserRegistration";

const UserForm = () => {
  return (
    <div>
      <Header name="Registration" />

      <UserRegistration />
    </div>
  );
};

export default UserForm;
