// src/App.js
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeatureOverview from './components/FeatureOverview';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import FAQ from './components/FAQ';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='bg-gradient-to-r from-slate-800 to-slate-950 text-white'>
      <Header />
      <Hero />
      <FeatureOverview />
      <Features/>
      <Testimonials />
      <Blog />
      <FAQ />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default App;
