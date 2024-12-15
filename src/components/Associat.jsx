import React from 'react';
import Associates from './Associates';
import News from './News';
import BackgroundImage from '../assets/bg-3.png';

const Associat = () => {
  return (
    <div
      className="bg-center bg-no-repeat text-white py-16 px-6 flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: 'cover',
      }}>
      <Associates />
      <News />
    </div>
  );
};

export default Associat;
