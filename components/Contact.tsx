import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Contact</h2>
        <div className="w-24 h-1 bg-brand-accent mx-auto mb-12"></div>
        <div className="bg-brand-secondary p-8 sm:p-10 rounded-xl shadow-lg border border-gray-700 max-w-2xl mx-auto">
          <p className="text-lg text-gray-300 mb-8">
            I'm open to new opportunities and collaborations. Feel free to reach out!
          </p>
          <div className="space-y-6">
            <div className="flex items-center justify-center space-x-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-white text-lg">Ali Shri Mali Sheri, Khambhat</span>
            </div>
            <div className="flex items-center justify-center space-x-4">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:het.kachhiya@example.com" className="text-white text-lg hover:text-brand-accent transition-colors">het.kachhiya@example.com</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
