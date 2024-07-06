// src/components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="shadow-md fixed w-full z-10 border-b border-sky-800 bg-gradient-to-r from-slate-800 to-slate-950">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-3xl font-bold text-blue-400">Fin<span className='text-white'>street</span></h1>
        <nav className="space-x-6">
          <a href="#courses" className="text-gray-300 hover:text-blue-400">Courses</a>
          <a href="#about" className="text-gray-300 hover:text-blue-400">About</a>
          <a href="#contact" className="text-gray-300 hover:text-blue-400">Contact</a>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">Login</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
