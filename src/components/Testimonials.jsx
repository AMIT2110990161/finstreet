// src/components/Testimonials.js
import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'John Doe',
      role: 'Crypto Enthusiast',
      content: 'Finstreet has completely changed my understanding of cryptocurrency. The courses are very detailed and easy to follow.',
      image: 'https://ntrepidcorp.com/wp-content/uploads/2016/06/team-1-640x640.jpg'
    },
    {
      name: 'Jane Smith',
      role: 'Blockchain Developer',
      content: 'The best platform for learning about crypto and blockchain technology. Highly recommended!',
      image: 'https://cdn.pixabay.com/photo/2019/07/13/11/45/black-professional-4334648_1280.jpg'
    },
    {
      name: 'Sam Wilson',
      role: 'Investor',
      content: 'The mobile login and OTP system makes it very easy to access courses on the go. Great user experience!',
      image: 'https://media.istockphoto.com/id/1485546774/photo/bald-man-smiling-at-camera-standing-with-arms-crossed.jpg?s=2048x2048&w=is&k=20&c=lOzPMobIPDUrcWRa1JRl4lyhIHBt8H18SB6sC9YXoys='
    },
  ];

  return (
    <section className="py-20 border-b border-sky-800 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Testimonials</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="border-2 border-sky-400 p-6 rounded-lg shadow-md">
              <img src={testimonial.image} alt={testimonial.name} className="w-20 h-20 mx-auto border-2 border-sky-400 rounded-full mb-4" />
              <h3 className="text-xl font-bold mb-2">{testimonial.name}</h3>
              <p className="text-blue-600 mb-2">{testimonial.role}</p>
              <p className="text-gray-600">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
