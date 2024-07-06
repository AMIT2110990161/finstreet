// src/components/FAQ.js
import React from 'react';

const FAQ = () => {
  const faqs = [
    {
      question: 'What is Finstreet?',
      answer: 'Finstreet is India’s first dedicated Crypto Education Platform, providing comprehensive courses on cryptocurrency and blockchain technology.'
    },
    {
      question: 'How can I access the courses?',
      answer: 'You can access the courses by signing up with your mobile number. An OTP will be sent to your number for verification.'
    },
    {
      question: 'Are the courses free?',
      answer: 'Some courses are free while others are paid. Check our course catalog for more details.'
    },
  ];

  return (
    <section className="py-20 border-b border-sky-800 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 underline"> <spam className="text-blue-400">Frequently </spam> Asked Questions</h2>
        <div className="grid md:grid-cols-2 gap-8 p-3">
          {faqs.map((faq, index) => (
            <div key={index} className=" p-6 border-2 border-sky-600 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">{faq.question}</h3>
              <p className="">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
