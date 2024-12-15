import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import Service from '../../components/Service';
import Product from '../../components/Product';

import BackgroundImage from '../../assets/bg-1.png';
import ChooseUs from '../../components/ChooseUs';
import Footer from '../../components/Footer';
import Associat from '../../components/Associat';

const Home = () => {
  return (
    <>
      <div
        className="relative flex flex-col h-screen"
        style={{
          backgroundImage: `url(${BackgroundImage})`,
          backgroundSize: 'cover',
        }}>
        <Navbar />
        <Hero />
      </div>
      <Service />
      <Product />
      <Associat />
      <ChooseUs />
      <Footer />
    </>
  );
};

export default Home;
