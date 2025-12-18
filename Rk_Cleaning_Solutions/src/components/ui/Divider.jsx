import React from 'react';

const Divider = ({ orientation = 'horizontal', className = '', label }) => {
  if (orientation === 'vertical') {
    return (
      <div className={`w-px h-full bg-gray-200 ${className}`} role="separator" />
    );
  }

  // Horizontal divider
  if (label) {
    return (
      <div className={`relative flex items-center w-full py-4 ${className}`}>
        <div className="flex-grow border-t border-gray-200"></div>
        <span className="flex-shrink-0 mx-4 text-gray-400 text-xs font-medium uppercase tracking-wider">{label}</span>
        <div className="flex-grow border-t border-gray-200"></div>
      </div>
    );
  }

  return (
    <hr className={`border-t border-gray-200 w-full my-4 ${className}`} />
  );
};

export default Divider;