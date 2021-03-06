import Header from "./Header";
import ReactPlayer from "react-player";

const sendMail = () => {
  const mailto = "mailto:mail@gmail.com?subject=Test subject&body=Body content";
  window.location.href = mailto;
};

const MyProfil = () => {
  const myProfil = JSON.parse(localStorage.getItem("myProfil")) ?? {};
  return (
    <>
      <Header name="My Profil" />
      <section className="cardtitle" />
      <div>
        <div
          className="pb-20 text-lg border-blue-700 border-3 m-6 p-4 rounded-md bg-blue-300 shadow-2xl"
          key={myProfil.id}
        >
          <img src={myProfil.img} alt="" className="w-100 h-80 rounded-md" />
          <div className="text-center text-2xl mt-4 mb-4">
            {myProfil.name} <br />
          </div>
          {myProfil.genre} <br />
          {myProfil.description} <br />
          {myProfil.email} <br />
          <ReactPlayer
            url={myProfil.url}
            className="react-player"
            width="100%"
            height="100%"
          />
          <div className="w-full flex justify-center">
            <button className="border-2 rounded mt-12 w-40" onClick={sendMail}>
              Send Mail
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProfil;
