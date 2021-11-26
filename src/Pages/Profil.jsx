import ApiArtists from "../components/ApiArtists";
import Header from "../components/Header";
import ReactPlayer from "react-player";

const sendMail = () => {
  const mailto = "mailto:mail@gmail.com?subject=Test subject&body=Body content";
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
            className="pb-20 text-lg border-blue-700 border-3 m-6 p-4 rounded-md bg-blue-300 shadow-2xl"
            key={item.id}
          >
            <img src={item.img} alt="" className="w-100 h-80 rounded-md" />
            <div className="text-center text-2xl mt-4 mb-4 text-white">
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
                className="border-2 rounded mt-12 w-40 text-white border-blue-700"
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
