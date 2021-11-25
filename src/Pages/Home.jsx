import React from "react";
import Header from "../components/Header";
import img from '../assets/concert.jpeg';
import img2 from '../assets/artiste.jpeg';
import img3 from '../assets/artistedujour.jpeg';

const Home = () => {
  return (
    <div>
      <Header name="Home" />
     {/* artiste du jour */}
      <div className=" flex-row texte-xs rounded-2xl mx-8 mt-10 p-4  text-center  bg-blue-300 justify-center"><h2>Artiste du jour</h2>
      <ul className="flex">
     
    <img
          className="rounded-full h-24 w-24  justify-center "
          src={img3}
          alt="artiste du jour"
        />
        <h3>Jack Daniels</h3>
        <p className="text-center h-24 w-24 text-xs black"> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        <li className="p-2"> Extrait musique 
          </li>
        </ul>
</div>
{/* artiste */}
<div className=" flex-row texte-xs rounded-2xl mx-8 mt-10 p-4  text-center  bg-blue-300 justify-center"><h2>Artiste du jour</h2>
      <ul className="flex">
     
    <img
          className="rounded-full h-24 w-24  justify-center "
          src={img2}
          alt="artiste "
        />
        <h3>prénom_nom</h3>
        <p className="text-center h-24 w-24 text-xs black"> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
       
        </ul>
</div>
 {/* évènement */}
<div className=" flex-row texte-xs rounded-2xl mx-8 mt-10 p-4 mb-10 text-center  bg-blue-300 justify-center"><h2>Evènement</h2>
      <ul className="flex">
     
    <img
          className="rounded-full h-24 w-24  justify-center "
          src={img}
          alt="évènement"
        />
        <h3>Titre</h3>
        <p className="text-center h-24 w-24 text-xs black"> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        
        </ul>
</div>
</div>


   
  );
};

export default Home;
