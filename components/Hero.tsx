import React from 'react';
import { profileImage } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="py-24 sm:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-in-up text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Hi, I'm Het
            <br />
            <span className="text-brand-accent">KamalKumar Kachhiya</span>
          </h1>
          <p className="mt-6 text-lg text-gray-300 max-w-xl mx-auto lg:mx-0">
            A passionate and driven third-year Bachelor of Computer Applications student with a keen interest in web development and software engineering.
          </p>
          <div className="mt-10">
            <a
              href="#contact"
              className="inline-block bg-brand-accent text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-blue-500 transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
        </div>
        <div className="flex justify-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="relative w-80 h-80 sm:w-96 sm:h-96">
            <div className="absolute inset-0 bg-brand-accent rounded-full transform -rotate-12"></div>
            <div className="absolute inset-0 bg-brand-secondary rounded-full transform rotate-12"></div>
            <img
              src={profileImage}
              alt="Het KamalKumar Kachhiya"
              className="relative object-cover w-full h-full rounded-full border-4 border-brand-primary"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
