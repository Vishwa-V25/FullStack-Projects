import React, { useState, useEffect } from 'react';

const HeroCarousel = ({ images = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Default images if none provided
  const defaultImages = [
    'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=1920',
    'https://www.pluspoint.ae/uploads/Blogs/blog_1719835208.webp',
    'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&q=80&w=1920'
  ];

  const carouselImages = images.length > 0 ? images : defaultImages;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {carouselImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={typeof image === 'string' ? image : image.src}
            alt={`Hero slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        </div>
      ))}
    </div>
  );
};

export default HeroCarousel;

