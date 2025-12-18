import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Play } from 'lucide-react';

const Lightbox = ({ isOpen, item, onClose, onNext, onPrev }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || !item) return null;

  const isVideo = !!item.youtubeId;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/95 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
        aria-label="Close lightbox"
      >
        <X size={24} />
      </button>

      {/* Navigation Buttons */}
      <button
        onClick={onPrev}
        className="absolute left-4 z-10 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
        aria-label="Previous"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={onNext}
        className="absolute right-4 z-10 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
        aria-label="Next"
      >
        <ChevronRight size={24} />
      </button>

      {/* Content */}
      <div className="relative z-10 max-w-7xl w-full max-h-[90vh] flex items-center justify-center">
        {isVideo ? (
          <div className="w-full aspect-video">
            <iframe
              src={`https://www.youtube.com/embed/${item.youtubeId}?autoplay=1`}
              className="w-full h-full rounded-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={item.title || 'Video'}
            />
          </div>
        ) : (
          <img
            src={item.src || item.thumbnail || 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=1200'}
            alt={item.alt || item.title || 'Gallery image'}
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
          />
        )}

        {/* Caption */}
        {(item.alt || item.title) && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 backdrop-blur-sm px-6 py-3 rounded-lg text-white text-center max-w-2xl">
            <p className="font-semibold">{item.title || item.alt}</p>
            {item.description && (
              <p className="text-sm text-gray-300 mt-1">{item.description}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Lightbox;

