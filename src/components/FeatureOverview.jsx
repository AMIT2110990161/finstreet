// src/components/FeatureOverview.js
import React from 'react';

const features = [
  {
    title: 'Comprehensive Courses',
    description: 'Learn everything from basics to advanced topics in cryptocurrency and blockchain.',
    icon: '📚',
  },
  {
    title: 'Expert Instructors',
    description: 'Courses led by industry experts with years of experience.',
    icon: '👨‍🏫',
  },
  {
    title: 'Flexible Learning',
    description: 'Access courses on any device, anytime, anywhere.',
    icon: '📱',
  },
];

const FeatureOverview = () => {
  return (
    <section className="py-20 border-b border-sky-800 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Why Choose <span className='text-blue-400'>Finstreet?</span></h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-light p-6 rounded-lg shadow-md border-2 border-sky-400">
              <div className="text-6xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureOverview;
