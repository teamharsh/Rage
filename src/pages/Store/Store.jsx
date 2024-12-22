import Navbar from "../../components/Navbar";
import Product from "../../components/Product";
import BackgroundImage from "../../assets/bg-1.png";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <>
      <div
        className="relative flex flex-col transparent"
        style={{
          backgroundImage: `url(${BackgroundImage})`,
          backgroundSize: "cover",
        }}
      >
        <Navbar />
      </div>
      <Product />
      <Footer />
    </>
  );
};

export default Home;
