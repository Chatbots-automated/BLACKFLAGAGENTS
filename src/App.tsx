import React from 'react';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import WhatWeDoSection from './components/WhatWeDoSection';
import ResultsSection from './components/ResultsSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <ParticleBackground />
      <Navbar />
      <div id="home">
        <HeroSection />
      </div>
      <div id="services">
        <WhatWeDoSection />
      </div>
      <div id="vision">
        <ResultsSection />
      </div>
      <div id="initialize">
        <CTASection />
      </div>
      <div id="contact">
        <Footer />
      </div>
    </div>
  );
}

export default App;