import React from 'react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 sm:py-28">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Education</h2>
        <div className="w-24 h-1 bg-brand-accent mx-auto mb-12"></div>
        <div className="bg-brand-secondary p-8 rounded-xl shadow-lg border border-gray-700 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-brand-accent mb-2">Bachelor of Computer Applications (BCA)</h3>
          <p className="text-lg font-semibold text-white mb-4">Shri D. N. Institute of Computer Applications (DNICA)</p>
          <p className="text-md text-gray-400">Currently pursuing the third and final year.</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
