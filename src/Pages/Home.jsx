import Header from "../components/Header";
import Apipost from "../components/ApiPost";

const Home = () => {
  return (
    <div>
      <Header name="Home" />

      <div>
        {Apipost.map((post) => (
          <div key={post.id}>
            <h1>{post.name}</h1>
            <img src="{post.img}" alt="photo" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
