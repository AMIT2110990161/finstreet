// src/components/Blog.js
import React from 'react';

const blogs = [
  {
    title: 'Understanding Cryptocurrency',
    description: 'A beginner’s guide to cryptocurrency and how it works.',
    image: 'https://via.placeholder.com/300x200',
  },
  {
    title: 'Blockchain Technology',
    description: 'Learn the fundamentals of blockchain technology.',
    image: 'https://via.placeholder.com/300x200',
  },
  {
    title: 'Investing in Crypto',
    description: 'Tips and strategies for investing in cryptocurrency.',
    image: 'https://via.placeholder.com/300x200',
  },
];

const Blog = () => {
  return (
    <section className="py-20 border-b border-sky-800 px-4">
      <div className="container mx-auto text-center underline">
        <h2 className="text-4xl font-bold mb-12">Latest <spam className = 'text-blue-400'>Blog Posts </spam> </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div key={index} className="border-2 border-sky-500 p-6 rounded-lg shadow-md">
              <img src={blog.image} alt={blog.title} className="w-full h-40 object-cover rounded-md mb-4" />
              <h3 className="text-2xl font-bold mb-2">{blog.title}</h3>
              <p className="text-gray no-underline">{blog.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
