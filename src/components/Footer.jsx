import React, { useEffect, useRef } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { gsap } from 'gsap';
import image from '../assets/Rages-footer.png';

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    // Fade-in animation for the footer
    gsap.fromTo(
      footerRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: 'power3.out',
      }
    );
  }, []);

  return (
    <footer ref={footerRef} className="bg-black text-white py-10 px-6 md:px-20">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-6">
        {/* Left Section */}
        <div className="md:w-1/3">
          <h2 className="text-4xl font-bold mb-2">
            <img src={image} className="w-full h-20 " />
          </h2>
          <p className="text-gray-400">
            Unlock the Future with RagesTech – Your Ultimate Destination for
            Drones, Robots, and More!
          </p>

          {/* Newsletter */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Join Our Newsletter</h3>
            <div className="flex items-center">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="p-2 w-2/3 bg-gray-800 text-white rounded-l-md focus:outline-none"
              />
              <button className="p-2 w-1/3 bg-white text-black font-bold rounded-r-md hover:bg-gray-300 transition">
                Join Now
              </button>
            </div>
          </div>
        </div>

        {/* Site Menu */}
        <div className="md:w-1/6">
          <h3 className="text-lg font-semibold mb-2">Site Menu</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Store
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Blogs
              </a>
            </li>
          </ul>
        </div>

        {/* Information */}
        <div className="md:w-1/6">
          <h3 className="text-lg font-semibold mb-2">Information</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-300">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Site Map
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Cookies Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="md:w-1/3">
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <p className="text-gray-400">contact@ragestech.com</p>
          <p className="text-gray-400">ragestech360@gmail.com</p>

          {/* Social Media */}
          <div className="flex space-x-4 mt-28 text-4xl text-gray-500">
            <a href="#" className="hover:text-gray-300">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-gray-300">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="hover:text-gray-300">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-gray-300">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#" className="hover:text-gray-300">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex justify-between  text-gray-400 text-sm mt-10 text-center pt-4">
        <p>Copyright © 2023 - RagesTech</p>
        <p className="mt-1">
          <a href="#" className="hover:text-gray-300">
            Terms & Conditions
          </a>{' '}
          |{' '}
          <a href="#" className="hover:text-gray-300">
            Privacy Policy
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
