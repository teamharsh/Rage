import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SURVEILLANCE_DRONE from "../assets/survival-dronw.svg";
import QUADCOPTER from "../assets/quadcopter.svg";
import MINI_DRONES from "../assets/minidrone.svg";
import AGRICULTURE_AND_MAPPING_DRONES from "../assets/pic1.svg";
import FPV_DRONES from "../assets/pic2.svg";
import VIDEOGRAPHY_DRONES from "../assets/pic3.svg";
import BackgroundImage from "../assets/bg-2.png";

gsap.registerPlugin(ScrollTrigger);

export default function ProductShowcase() {
  const largeProductsRef = useRef([]);
  const smallProductsRef = useRef([]);

  useEffect(() => {
    largeProductsRef.current.forEach((product, index) => {
      gsap.fromTo(product, 
        { opacity: 0, x: index % 2 === 0 ? -100 : 100 }, 
        { 
          opacity: 1, 
          x: 0, 
          duration: 3, 
          scrollTrigger: {
            trigger: product,
            start: "top 80%",
            end: "top 20%",
            scrub: true,
          }
        }
      );
    });

    smallProductsRef.current.forEach((product) => {
      gsap.fromTo(product, 
        { opacity: 0, y: 50 }, 
        { 
          opacity: 1, 
          y: 0, 
          duration: 3, 
          scrollTrigger: {
            trigger: product,
            start: "top 80%",
            end: "top 20%",
            scrub: true,
          }
        }
      );
    });
  }, []);

  const largeProducts = [
    {
      title: "SURVEILLANCE DRONE",
      image: SURVEILLANCE_DRONE,
    },
    {
      title: "QUADCOPTER",
      image: QUADCOPTER,
    },
    {
      title: "MINI DRONES",
      image: MINI_DRONES,
    },
  ];

  const smallProducts = [
    {
      title: "AGRICULTURE AND MAPPING DRONES",
      image: AGRICULTURE_AND_MAPPING_DRONES,
    },
    {
      title: "FPV DRONES",
      image: FPV_DRONES,
    },
    {
      title: "VIDEOGRAPHY DRONES",
      image: VIDEOGRAPHY_DRONES,
    },
  ];

  return (
    <div
      className="min-h-screen  bg-cover bg-center text-white p-8 md:p-32 flex items-center justify-center"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-[#39c4d4] text-center">
          Some Of Our Products
        </h2>

        <div className="mb-12">
          <div className="grid gap-8 justify-center">
            {largeProducts.map((product, index) => (
              <div
                key={index}
                ref={el => largeProductsRef.current[index] = el}
                className={`relative flex items-center justify-center flex-col sm:flex-row ${
                  index % 2 === 0 ? "sm:flex-row-reverse" : ""
                }`}
              >
                <h4 className="text-md sm:text-lg md:text-xl lg:text-2xl mt-2 text-center font-bold">
                  {product.title}
                </h4>
                <img
                  src={product.image}
                  alt={product.title}
                  className="object-contain w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
                  style={{ height: 'auto', width: '100%' }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {smallProducts.map((product, index) => (
              <div 
                key={index} 
                ref={el => smallProductsRef.current[index] = el}
                className="relative"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="object-contain mx-auto"
                  style={{ height: 'auto', width: '50%' }}
                />
                <h4 className="text-xs sm:text-sm md:text-lg lg:text-xl mt-2 font-semibold text-center">
                  {product.title}
                </h4>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <a
            href="#"
            className="text-[#39c4d4] hover:text-[#4cdbec] transition-colors duration-300"
          >
            View All Products
          </a>
        </div>
      </div>
    </div>
  );
}
