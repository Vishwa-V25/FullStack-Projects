import React from 'react';

const IconButton = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = "inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-200 px-4 py-2 text-sm";
  
  const variants = {
    primary: "bg-teal-700 text-white hover:bg-teal-800",
    secondary: "bg-gray-100 text-gray-700 hover:bg-gray-200",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-50"
  };

  const variantStyles = variants[variant] || variants.primary;

  return (
    <button 
      className={`${baseStyles} ${variantStyles} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};

export default IconButton;

