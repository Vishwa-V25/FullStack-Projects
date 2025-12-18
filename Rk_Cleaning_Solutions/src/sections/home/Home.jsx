import React from 'react';
import HeroCarousel from './HeroCarousel.jsx';
import HeroOverlay from './HeroOverlay.jsx';

const Home = () => {
  return (
    <section id="home" className="relative w-full h-screen min-h-[600px] bg-gray-900 overflow-hidden">
      <HeroCarousel />
      <HeroOverlay />
    </section>
  );
};

export default Home;