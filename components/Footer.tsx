import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-secondary border-t border-gray-800 mt-20">
      <div className="container mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Het KamalKumar Kachhiya. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
