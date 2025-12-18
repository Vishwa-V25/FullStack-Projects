import React, { useState } from 'react';
import { GALLERY_DATA } from '../../data/gallery.data.js';
import ImageGrid from './ImageGrid.jsx';
import Lightbox from './Lightbox.jsx';

const Gallery = () => {
  const [lightboxState, setLightboxState] = useState({
    isOpen: false,
    currentIndex: 0,
    items: [], // Flattened list of all viewable items (images + videos)
  });

  const { images, videos } = GALLERY_DATA;
  
  // Combine arrays for easier navigation in lightbox
  const allItems = [...images, ...videos];

  const handleSelect = (item, type) => {
    // Find index in the combined array
    const index = allItems.findIndex(i => i.id === item.id && (type === 'video' ? !!i.youtubeId : !i.youtubeId));
    
    setLightboxState({
      isOpen: true,
      currentIndex: index,
      items: allItems
    });
  };

  const handleClose = () => {
    setLightboxState(prev => ({ ...prev, isOpen: false }));
  };

  const handleNext = () => {
    setLightboxState(prev => ({
      ...prev,
      currentIndex: (prev.currentIndex + 1) % prev.items.length
    }));
  };

  const handlePrev = () => {
    setLightboxState(prev => ({
      ...prev,
      currentIndex: (prev.currentIndex - 1 + prev.items.length) % prev.items.length
    }));
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-orange-500 font-bold tracking-widest uppercase text-sm">
            Our Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Recent Projects
          </h2>
          <p className="text-gray-500">
            See the difference we make. From deep cleaning homes to industrial maintenance.
          </p>
        </div>

        {/* Grid Content */}
        <ImageGrid 
          images={images} 
          videos={videos} 
          onSelect={handleSelect} 
        />
        
        {/* View More Button (Optional/Mock) */}
        <div className="mt-12 text-center">
            <button className="text-teal-700 font-semibold hover:text-orange-500 transition-colors underline underline-offset-4">
                View All on Instagram
            </button>
        </div>
      </div>

      {/* Lightbox Overlay */}
      <Lightbox 
        isOpen={lightboxState.isOpen}
        item={lightboxState.items[lightboxState.currentIndex]}
        onClose={handleClose}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </section>
  );
};

export default Gallery;