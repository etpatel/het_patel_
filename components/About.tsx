import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-brand-secondary rounded-3xl">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">About Me</h2>
        <div className="w-24 h-1 bg-brand-accent mx-auto mb-10"></div>
        <p className="text-lg text-gray-300 leading-relaxed">
          I am a dedicated and curious student currently in my final year of the Bachelor of Computer Applications (BCA) program at Shri DNICA. My passion lies in creating efficient, scalable, and user-friendly web applications. I am always eager to learn about new technologies and apply them to solve real-world problems. I am actively seeking opportunities to contribute to exciting projects and grow as a developer.
        </p>
      </div>
    </section>
  );
};

export default About;
