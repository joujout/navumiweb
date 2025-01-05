import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/home/Process';
import Stats from './components/home/Stats';
import Work from './components/Work';
import Testimonials from './components/home/Testimonials';
import Contact from './components/Contact';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Process />
      <Work />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;