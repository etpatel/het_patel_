import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-brand-primary text-brand-light font-sans antialiased">
      <Header />
      <main className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Hero />
        <About />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
