import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
// import Product from "../../components/Product";
// import Service from "../../components/Service";

import BackgroundImage from "../../assets/bg-1.png";

const Home = () => {
  return (
    <div
      className="relative flex flex-col h-screen"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
      }}
    >
      <Navbar />
      <Hero />
    </div>
  );
};

export default Home;