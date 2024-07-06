// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8">
      <div className="container mx-auto text-center">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">About <span className='text-blue-400'>Finstreet</span></h3>
            <p>Finstreet is India’s first dedicated Crypto Education Platform, providing comprehensive courses on cryptocurrency and blockchain technology.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <nav className="space-y-2">
              <a href="#courses" className="block hover:underline">Courses</a>
              <a href="#about" className="block hover:underline">About Us</a>
              <a href="#contact" className="block hover:underline">Contact Us</a>
            </nav>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Connect with Us</h3>
            <p>Follow us on social media for the latest updates:</p>
            <nav className="space-x-4 mt-4">
              <a href="#" className="hover:underline">Twitter</a>
              <a href="#" className="hover:underline">LinkedIn</a>
              <a href="#" className="hover:underline">Facebook</a>
            </nav>
          </div>
        </div>
        <p>© 2024 Finstreet. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
