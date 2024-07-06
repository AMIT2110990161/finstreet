// src/components/CallToAction.js
import React from 'react';

const CallToAction = () => {
  return (
    <section className="py-20 border-b border-sky-800">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Join <span className='text-blue-400'>Finstreet</span> Today</h2>
        <p className="text-xl mb-8">Unlock the potential of cryptocurrency and blockchain technology with our expert-led courses.</p>
        <button className="border border-white bg-blue-600 px-6 py-3 rounded-md">Get Started</button>
      </div>
    </section>
  );
};

export default CallToAction;
