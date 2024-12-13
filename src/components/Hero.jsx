import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DroneImage from "../assets/drone.svg";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.5,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          end: "top 50%",
        },
      }
    );
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.5 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        delay: 1,
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
          end: "top 50%",
        },
      }
    );
  }, []);

  return (
    <div className="relative flex-1 flex flex-col justify-center items-center">
      {/* Background text */}
      <div
        ref={textRef}
        className="absolute inset-0 flex items-center justify-center text-center text-[6rem] sm:text-[8rem] md:text-[10rem] lg:text-[12rem] xl:text-[15rem] font-bold text-transparent opacity-10"
        style={{ WebkitTextStroke: "2px white" }}
      >
        DRONE <br />
        TECH
      </div>

      {/* Drone image */}
      <div className="relative flex justify-center items-center h-full w-full">
        <img
          ref={imageRef}
          src={DroneImage}
          alt="Drone"
          className="relative z-10 max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-5xl h-auto"
        />
      </div>

      {/* Bottom-left text */}
      <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 text-left">
        <p className="text-white text-base sm:text-md md:text-xl font-semibold">
          Elevating Tomorrow&apos;s <br />
          <span className="text-red-500 sm:text-xl md:text-3xl">
            TECHNOLOGY
          </span>
          <br /> Today.
        </p>
      </div>
    </div>
  );
};

export default Hero;
