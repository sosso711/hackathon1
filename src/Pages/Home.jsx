import React from "react";
import Header from "../components/Header";
// import img from '../assets/concert.jpeg';
// import img2 from '../assets/artiste.jpeg';
// import img3 from '../assets/artistedujour.jpeg';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Header name="Home" />
     {/* artiste du jour */}
      <div className=" flex-row texte-xs rounded-2xl mx-8 mt-10 p-4  text-center  bg-blue-300 justify-center">
      <ul className="flex">
     
    <img
          className="rounded-full h-24 w-24  justify-center "
          src="./artiste1.jpg"
          alt="artiste du jour"
        />
        <div className="">
        <h2>Artist of the Day</h2>
        <h3 className="text-white">Jack Daniels</h3>
        <p>Jack is the fabulous singer</p>
        <Link to="/profil" className="text-white"> Your profil </Link>
        </div>
        
        {/* <p className="text-center h-24 w-24 text-xs black">
        </p> */}
        <li className="p-2"> 
          </li>
        </ul>
        
</div>
{/* artiste */}
<div className=" flex-row texte-xs rounded-2xl mx-8 mt-10 p-4  text-center  bg-blue-300 justify-center"><h2>Artist of the Day</h2>
      <ul className="flex">
     
    <img
          className="rounded-full h-24 w-24  justify-center "
          src="./chanteuse.jpg"
          alt="artiste"
        />
   
        <p className="text-center h-24 w-24 text-xs black"> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
       
        </ul>
</div>
 {/* évènement */}
<div className=" flex-row texte-xs rounded-2xl mx-8 mt-10 p-4 mb-10 text-center  bg-blue-300 justify-center"><h2>Evènement</h2>
      <ul className="flex">
     
    <img
          className="rounded-full h-24 w-24  justify-center "
          src="./violoniste.jpg"
          alt="évènement"
        />
  
        <p className="text-center h-24 w-24 text-xs black"> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        
        </ul>
</div>
</div>


   
  );
};

export default Home;
