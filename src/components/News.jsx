import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import News1 from '../assets/news-1.png';
import News2 from '../assets/news-2.png';
import News3 from '../assets/news-3.png';

const News = () => {
  const titleRef = useRef(null);
  const cardsRef = useRef([]);
  const viewMoreRef = useRef(null);

  if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }

  useEffect(() => {
    // Title Animation
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
        },
      }
    );

    // Cards Animation
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
          },
        }
      );
    });

    // View More Animation
    gsap.fromTo(
      viewMoreRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: viewMoreRef.current,
          start: 'top 90%',
        },
      }
    );
  }, []);

  const newsData = [
    {
      image: News1,
      title: 'Flying on the Edge: The Thrill of FPV Drone Races',
    },
    {
      image: News2,
      title: 'Soaring High: The Thrilling World of Drone Competitions',
    },
    {
      image: News3,
      title: 'Flying on the Edge: The Thrill of FPV Drone Races',
    },
  ];

  return (
    <div className="text-white py-12 px-4">
      {/* Title */}
      <div ref={titleRef} className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">NEWS</h1>
      </div>

      {/* News Cards */}
      <div className="flex flex-wrap justify-center gap-6">
        {newsData.map((news, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="rounded-lg shadow-lg overflow-hidden w-72 transform hover:scale-105 transition-transform duration-300">
            {/* Rounded Image */}
            <div className="relative w-full h-96 rounded-t-lg overflow-hidden">
              <img
                src={news.image}
                alt={news.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/0"></div>
            </div>

            {/* News Title BELOW the Image */}
            <div className="p-4 bg-transparent rounded-b-lg">
              <h3 className="text-lg font-bold text-center hover:underline transition duration-300">
                {news.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div ref={viewMoreRef} className="text-center mt-8">
        <button className="text-lg font-semibold text-gray-300 hover:text-white hover:underline transition duration-300">
          View More
        </button>
      </div>
    </div>
  );
};

export default News;
