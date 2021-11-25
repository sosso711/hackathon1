import React from "react";
import Header from "../components/Header";
// import img from "../assets/concert.jpeg";
//import img2 from "../assets/artiste.jpeg";
// import img3 from "../assets/artistedujour.jpeg";
import ApiPost from "../components/ApiPost";

const Home = () => {
  return (
    <>
      <div>
        <Header name="Home" />
        {/* artiste du jour */}
        <div className=" flex-row texte-xs rounded-2xl mx-8 mt-10 p-4  text-center  bg-blue-300 justify-center">
          <h2>Artiste du jour</h2>
          <ul className="flex">
            <img
              className="rounded-full h-24 w-24  justify-center "
              // src={img3}
              alt="artiste du jour"
            />
            <h3>Jack Daniels</h3>
            <p className="text-center h-24 w-24 text-xs black">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
            </p>
            <li className="p-2"></li>
          </ul>
        </div>
        {/* artiste */}
        {/* <div className=" flex-row texte-xs rounded-2xl mx-8 mt-10 p-4  text-center  bg-blue-300 justify-center"></div>
        <h2>Artiste du jour</h2>
        <ul className="flex">
          <img
            className="rounded-full h-24 w-24  justify-center "
            // src={img2}
            alt="artiste "
          />
          <p className="text-center h-24 w-24 text-xs black">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
          </p>
        </ul>*/}
        {/* évènement */}
        <div className=" flex-row texte-xs rounded-2xl mx-8 mt-10 p-4 mb-10 text-center  bg-blue-300 justify-center">
          {ApiPost.map((post) => {
            return (
              <div>
                <h2 key={post.id}>{post.name}</h2>
                <img
                  className="rounded-full h-24 w-24  justify-center "
                  // src={post.img}
                  alt="évènement"
                />
                <p className="text-center h-24 w-24 text-xs black">
                  {post.content}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
