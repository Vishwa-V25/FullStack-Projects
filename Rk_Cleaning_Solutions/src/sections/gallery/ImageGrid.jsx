import React from 'react';
import { Play, Image as ImageIcon } from 'lucide-react';

const ImageGrid = ({ images = [], videos = [], onSelect }) => {
  const handleClick = (item, type) => {
    if (onSelect) {
      onSelect(item, type);
    }
  };

  const allItems = [...images, ...videos];

  if (allItems.length === 0) {
    return (
      <div className="text-center py-12">
        <ImageIcon size={48} className="mx-auto text-gray-400 mb-4" />
        <p className="text-gray-500">No gallery items available at the moment.</p>
      </div>
    );
  }

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {allItems.map((item) => {
        const isVideo = !!item.youtubeId;
        
        return (
          <div
            key={item.id}
            onClick={() => handleClick(item, isVideo ? 'video' : 'image')}
            className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            {/* Image or Video Thumbnail */}
            <img
              src={item.thumbnail || item.src || 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=800'}
              alt={item.alt || 'Gallery image'}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
              {isVideo ? (
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                    <Play size={32} className="text-gray-900 ml-1" fill="currentColor" />
                  </div>
                </div>
              ) : (
                <div className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-center px-4">
                  <p className="font-semibold">{item.alt || item.title}</p>
                </div>
              )}
            </div>

            {/* Category Badge */}
            {item.category && (
              <div className="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-900">
                {item.category}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ImageGrid;

