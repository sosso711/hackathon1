import Header from "../components/Header";
// import img from '../assets/concert.jpeg';
// import img2 from '../assets/artiste.jpeg';
// import img3 from '../assets/artistedujour.jpeg';
import { Link } from "react-router-dom";
import ApiPost from "../components/ApiPost";
import ReactPlayer from "react-player";

const Home = () => {
  return (
    <div>
      <Header name="Home" />
      {/* artiste du jour */}
      <div className="flex-row texte-xs rounded-2xl mx-8 mt-10 p-4  text-center  bg-blue-300 justify-center">
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
            <Link to="/profil" className="text-white">
              {" "}
              Your profil{" "}
            </Link>
          </div>

          <li className="p-2"></li>
        </ul>
      </div>
      <section />
      <div className=" flex-col  text-center   justify-center">
        {ApiPost.map((post) => {
          return (
            <>
              <div
                className="bg-blue-300 flex flex-wrap rounded-2xl p-1 m-5 shadow-2xl border-1 border-blue-700"
                key={post.id}
              >
                <img
                  className="rounded-full h-10 w-10 m-2"
                  src={post.img}
                  alt="p"
                />
                <h2 className="mt-2 text-blue-900 text-center">{post.name}</h2>
                <p className=" text-xs black mx-10 pb-3">{post.content}</p>
                <ReactPlayer
                  url={post.video}
                  className="react-player mx-12 pb-5 "
                  width="80%"
                  height="70%"
                />
              </div>
            </>
          );
        })}
      </div>{" "}
    </div>
  );
};

export default Home;
