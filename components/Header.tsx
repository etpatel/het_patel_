import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-brand-secondary/50 backdrop-blur-sm sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold text-white tracking-wider">
              Het Kachhiya
            </a>
          </div>
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#about" className="text-gray-300 hover:text-brand-accent transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium">About</a>
              <a href="#education" className="text-gray-300 hover:text-brand-accent transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium">Education</a>
              <a href="#contact" className="text-gray-300 hover:text-brand-accent transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
