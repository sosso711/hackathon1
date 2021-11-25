import React, { useState } from "react";

const UserRegistration = () => {
  const [name, setName] = useState("");
  const [numberTel, setNumberTel] = useState("");
  const [email, setEmail] = useState("");
  const [genre, setGenre] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProfile = {
      name,
      numberTel,
      email,
      genre,
      description,
    };
    const profils = JSON.parse(localStorage.getItem("profils")) ?? [];
    profils.push(newProfile);
    localStorage.setItem("profils", JSON.stringify(profils));
  };

  return (
    <div>
      <h1 className="text-center m-3"> Mon Profil</h1>

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col">
          {" "}
          <div className=" flex flex-row ">
            <div
              className="bg-blue-100 rounded-full h-24 w-24 m-5 border-2 border-blue-500 text-center"
              onClick={() => prompt(" URL de ta photo")}
            ></div>
            <div className="flex flex-col">
              {" "}
              <input
                type="text"
                placeholder="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                className="w-25 h-15 border-2 border-blue-500 rounded-xl m-3 bg-blue-100 p-1 text-center shadow-xl"
              ></input>
              <input
                type="tel"
                value={numberTel}
                onChange={(e) => {
                  setNumberTel(e.target.value);
                }}
                placeholder="numéro de telephone"
                className="w-25 h-15 border-2 border-blue-500 rounded-xl m-3 bg-blue-100 p-1 text-center shadow-xl"
              ></input>
            </div>
          </div>
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            placeholder="email"
            className="w- h-15 border-2 border-blue-500 rounded-xl m-2 bg-blue-100 p-1 text-center shadow-xl"
          ></input>
          <input
            value={genre}
            onChange={(e) => {
              setGenre(e.target.value);
            }}
            placeholder="Que fais tu?"
            type="text"
            className="w-30 h-15 border-2 border-blue-500 rounded-xl m-2 bg-blue-100 p-1 text-center shadow-xl"
          ></input>
          <textarea
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            placeholder="description"
            type="texte"
            className="w-30 h-30 border-2 border-blue-500 rounded-xl m-2 bg-blue-100 p-1 text-center shadow-xl"
          ></textarea>
          <div className="flex justify-around">
            <button
              className="w-20 h-15 border-2 border-blue-500 rounded-xl m-2 bg-blue-100 p-1 text-center shadow-xl"
              type="submit"
              onClick={handleSubmit}
            >
              Valider
            </button>
            <button
              onClick={() => prompt("url de ton morceau")}
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