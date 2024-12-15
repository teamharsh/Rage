import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import BackgroundImage from '../assets/bg-4.png';

const ChooseUs = () => {
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);

  if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }

  useEffect(() => {
    // Heading Animation
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 80%',
        },
      }
    );

    // Paragraph Animation
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        delay: 0.2,
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 90%',
        },
      }
    );

    // Button Animation
    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.5,
        scrollTrigger: {
          trigger: buttonRef.current,
          start: 'top 95%',
        },
      }
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className="bg-center bg-no-repeat text-white py-16 px-6 flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: 'cover',
      }}>
      {/* Heading */}
      <h2
        ref={headingRef}
        className="text-4xl md:text-5xl font-bold mb-6 text-center inline-block">
        WHY CHOOSE US ?
      </h2>

      {/* Paragraph */}
      <div
        ref={textRef}
        className=" p-6 md:p-8 rounded-lg border border-gray-700 text-center max-w-4xl">
        <p className="text-lg leading-relaxed mb-4">
          Whether you’re a hobbyist looking for the perfect drone, a business
          owner seeking automation solutions, or a tech enthusiast ready to
          explore limitless possibilities, RagesTech is your ultimate partner in
          progress. Don’t miss out on the future – it’s here, and it’s at
          RagesTech.
        </p>
        <p className="text-lg leading-relaxed">
          Visit our website today and discover the tech revolution you’ve been
          waiting for. Elevate your game with RagesTech and be part of the
          innovation that shapes tomorrow!
        </p>
      </div>

      {/* Contact Us Button */}
      <button
        ref={buttonRef}
        className="mt-6 bg-red-600 text-white font-semibold py-2 px-6 rounded-full hover:bg-red-700 transition duration-300 shadow-lg">
        Contact Us
      </button>
    </div>
  );
};

export default ChooseUs;
