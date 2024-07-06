// src/components/Features.js
import React from 'react';

const Features = () => {
  return (
    <section className="py-20 border-b border-sky-800 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Our Courses</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="border-2 border-sky-400 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4">Course 1</h3>
            <p className="text-gray-300">Description of Course 1.</p>
          </div>
          <div className="border-2 border-sky-400 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4">Course 2</h3>
            <p className="text-gray-300">Description of Course 2.</p>
          </div>
          <div className="border-2 border-sky-400 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4">Course 3</h3>
            <p className="text-gray-300">Description of Course 3.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
