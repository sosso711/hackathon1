import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserRegistration = () => {
  const [name, setName] = useState("");
  const [numberTel, setNumberTel] = useState("");
  const [email, setEmail] = useState("");
  const [genre, setGenre] = useState("");
  const [description, setDescription] = useState("");
  const [morceau, setMorceau] = useState("");
  const [image, setImage] = useState("");
  let navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const newProfile = {
      name,
      numberTel,
      email,
      genre,
      description,
      url: morceau,
      img: image,
    };

    localStorage.setItem("myProfil", JSON.stringify(newProfile));

    //after submit form redirect user
    navigate("/myProfilPage");
  };

  return (
    <div>
      <h1 className="text-center m-10"> Mon Profil</h1>

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col h-full">
          {" "}
          <div className=" flex flex-row ">
            <div
              className="bg-blue-100 rounded-full h-24 w-24 mx-2 border-2 border-blue-500 text-center"
              onClick={() => setImage(prompt(" URL de ta photo"))}
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
                className="w-2/3 h-15 border-2 border-blue-500 rounded-xl mb-8 mx-6 bg-blue-100 p-1 text-center shadow-xl flex justify-end"
              ></input>
              <input
                type="tel"
                value={numberTel}
                onChange={(e) => {
                  setNumberTel(e.target.value);
                }}
                placeholder="numéro de telephone"
                className="w-2/3 h-15 border-2 border-blue-500 rounded-xl mb-8 mx-6 bg-blue-100 p-1 text-center shadow-xl"
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
            className="w- h-15 border-2 border-blue-500 rounded-xl mb-8 mx-5 bg-blue-100 p-1 text-center shadow-xl"
          ></input>
          <input
            value={genre}
            onChange={(e) => {
              setGenre(e.target.value);
            }}
            placeholder="Que fais tu?"
            type="text"
            className="w-30 h-15 border-2 border-blue-500 rounded-xl mb-8 mx-5 bg-blue-100 p-1 text-center shadow-xl"
          ></input>
          <textarea
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            placeholder="description"
            type="texte"
            className="w-30 h-50 border-2 border-blue-500 rounded-xl mb-8 mx-5 bg-blue-100 p-1 text-center shadow-xl"
          ></textarea>
          <div className="flex justify-around">
            <button
              className="w-20 h-15 border-2 border-blue-500 rounded-xl mb-8 mx-3 bg-blue-100 p-1 text-center shadow-xl"
              type="submit"
              onClick={handleSubmit}
            >
              Valider
            </button>
            <button
              onClick={() => setMorceau(prompt("url de ton morceau"))}
              className="w-30 h-15 border-2 border-blue-500 rounded-xl mb-6 mx-3 bg-blue-100 p-1 text-center shadow-xl"
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
