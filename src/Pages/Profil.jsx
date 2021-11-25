import ApiArtists from "../components/ApiArtists";
import Header from "../components/Header";
import ReactPlayer from "react-player";

const sendMail = () => {
  const mailto: string =
    "mailto:mail@gmail.com?subject=Test subject&body=Body content";
  window.location.href = mailto;
};

const Profil = () => {
  return (
    <>
      <Header name="Profils" />
      <section className="cardtitle" />
      <div>
        {ApiArtists.map((item) => (
          <div
            className="pb-20 text-lg border-gray-600 border-2 m-6 p-4 rounded-md shadow-md bg-gray-400"
            key={item.id}
          >
            <img src={item.img} alt="" className="w-100 h-80 rounded-md" />
            <div className="text-center text-2xl mt-4 mb-4">
              {item.name} <br />
            </div>
            {item.musiquetype} <br />
            {item.detail} <br />
            {item.objectif} <br />
            {item.email} <br />
            <ReactPlayer
              url={item.url}
              className="react-player"
              width="100%"
              height="100%"
            />
            <div className="w-full flex justify-center">
              <button
                className="border-2 rounded mt-12 w-40"
                onClick={sendMail}
              >
                Send Mail
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Profil;
