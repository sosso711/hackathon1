import React from "react";

const UserRegistration = () => {
  return (
    <div>
      <h1 className="text-center m-3"> Mon Profil</h1>

      <form>
        <div className="flex flex-col">
          {" "}
          <div className=" flex flex-row ">
            <div className="bg-blue-100 rounded-full h-24 w-24 m-5 border-2 border-blue-500 text-center"></div>
            <div className="flex flex-col">
              {" "}
              <input
                type="text"
                placeholder="name"
                value=""
                className="w-25 h-15 border-2 border-blue-500 rounded-xl m-3 bg-blue-100 p-1 text-center shadow-xl"
              ></input>
              <input
                type="tel"
                placeholder="numéro de telephone"
                className="w-25 h-15 border-2 border-blue-500 rounded-xl m-3 bg-blue-100 p-1 text-center shadow-xl"
              ></input>
            </div>
          </div>
          <input
            type="email"
            placeholder="email"
            className="w- h-15 border-2 border-blue-500 rounded-xl m-2 bg-blue-100 p-1 text-center shadow-xl"
          ></input>
          <input
            placeHolder="Que fais tu?"
            type="text"
            className="w-30 h-15 border-2 border-blue-500 rounded-xl m-2 bg-blue-100 p-1 text-center shadow-xl"
          ></input>
          <textarea
            placeholder="description"
            type="texte"
            className="w-30 h-30 border-2 border-blue-500 rounded-xl m-2 bg-blue-100 p-1 text-center shadow-xl"
          ></textarea>
          <div className="flex justify-around">
            <button
              type="submit"
              className="w-20 h-15 border-2 border-blue-500 rounded-xl m-2 bg-blue-100 p-1 text-center shadow-xl"
            >
              Valider
            </button>
            <button
              type="submit"
              className="w-30 h-15 border-2 border-blue-500 rounded-xl m-2 bg-blue-100 p-1 text-center shadow-xl"
            >
              {" "}
              Ajoutes ton morceau
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UserRegistration;
