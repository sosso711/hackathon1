import React from "react";

const UserRegistration = () => {
  return (
    <div>
      <h1 className="text-center m-3"> Mon Profil</h1>
      <div className="bg-blue-100 rounded-full h-16 w-16 m-4">photo</div>
      <form>
        <div className="flex flex-col ">
          <input
            type="text"
            placeholder="name"
            value=""
            className="w-1/3 h-15 border-2 border-blue-500 rounded-xl m-2 bg-blue-100 p-1"
          ></input>
          <input
            type="tel"
            placeholder="numéro de telephone"
            className="w-12.5 h-15 border-2 border-blue-500 rounded-xl m-2 bg-blue-100 p-1"
          ></input>
          <input
            type="email"
            placeholder="email"
            className="w-12.5 h-15 border-2 border-blue-500 rounded-xl m-2 bg-blue-100 p-1"
          ></input>
          <input
            placeHolder="Que fais tu?"
            type="text"
            className="w-12.5 h-15 border-2 border-blue-500 rounded-xl m-2 bg-blue-100 p-1"
          ></input>

          <textarea
            placeholder="description"
            type="texte"
            className="w-12.5 h-15 border-2 border-blue-500 rounded-xl m-2 bg-blue-100 p-1"
          ></textarea>
          <button
            type="submit"
            className="w-12.5 h-15 border-2 border-blue-500 rounded-xl m-2 bg-blue-100 p-1"
          >
            Valider
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserRegistration;
