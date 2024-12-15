import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import techfestLogo from '../assets/techfest.png';
import lnctLogo from '../assets/lnct.png';
import technoxianLogo from '../assets/technoxian.png';
import iiitdmLogo from '../assets/iiitdm.png';
import vitsLogo from '../assets/vits.png';
import dpsLogo from '../assets/dps.png';
import apieroLogo from '../assets/apiero.png';

const Associates = () => {
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);
  const logoRefs = useRef([]);

  if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }

  useEffect(() => {
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

    gsap.fromTo(
      descriptionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: descriptionRef.current,
          start: 'top 80%',
        },
      }
    );

    logoRefs.current.forEach((logo, index) => {
      gsap.fromTo(
        logo,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: logo,
            start: 'top 80%',
          },
        }
      );
    });
  }, []);

  return (
    <div className=" text-white h-max py-12 px-16 flex justify-center items-center gap-5">
      {/* Title Section */}
      <div className="text-center mb-8">
        <h1 ref={headingRef} className="text-4xl font-bold mb-4">
          OUR ASSOCIATES
        </h1>
        <p ref={descriptionRef} className="text-gray-400 max-w-2xl mx-auto">
          At RagesTech, we believe in the power of collaboration and strategic
          partnerships to drive innovation and deliver exceptional value to our
          customers. Our network of trusted partners includes industry leaders,
          technology innovators, and organizations that share our commitment to
          pushing the boundaries of what technology can achieve.
        </p>
      </div>

      {/* Logos Section */}
      <div className="flex flex-wrap justify-center gap-8 px-4">
        {[
          techfestLogo,
          lnctLogo,
          technoxianLogo,
          iiitdmLogo,
          vitsLogo,
          dpsLogo,
          apieroLogo,
        ].map((logo, index) => (
          <img
            key={index}
            ref={(el) => (logoRefs.current[index] = el)}
            src={logo}
            alt={`Associate ${index + 1}`}
            className="h-20 object-contain"
          />
        ))}
      </div>
    </div>
  );
};

export default Associates;
