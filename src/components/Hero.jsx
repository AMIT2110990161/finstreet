// src/components/Hero.js
import React from 'react';

const Hero = () => {
  return (
    <section className="py-40 text-center border-b border-sky-800">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold mb-4">Welcome to <span className='text-blue-400'>Finstreet</span> </h2>
        <p className="text-l mb-8">India’s first dedicated Crypto Education Platform</p>
        <div className="inline-flex justify-center items-center border-2 border-sky-400 rounded-md">
          <input type="text" placeholder="Enter your mobile number" className="p-3 rounded-l outline-none text-black" />
          <button className="bg-white text-blue-800 px-5 py-3 rounded-r">Get OTP</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
