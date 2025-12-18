import React from 'react';

const Button = ({ children, variant = 'primary', size = 'md', className = '', ...props }) => {
  const baseStyles = "inline-flex items-center justify-center rounded-full font-bold transition-all duration-300 transform active:scale-95 disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    primary: "bg-teal-700 text-white hover:bg-teal-800 shadow-lg shadow-teal-700/30",
    secondary: "bg-orange-500 text-white hover:bg-orange-600 shadow-lg shadow-orange-500/30",
    outline: "border-2 border-teal-700 text-teal-700 hover:bg-teal-700 hover:text-white",
    ghost: "text-gray-600 hover:text-teal-700 hover:bg-teal-50",
    white: "bg-white text-teal-900 hover:bg-gray-100 shadow-md"
  };

  const sizes = {
    sm: "text-xs px-4 py-1.5",
    md: "text-sm px-6 py-2.5",
    lg: "text-base px-8 py-3.5"
  };

  const variantStyles = variants[variant] || variants.primary;
  const sizeStyles = sizes[size] || sizes.md;

  return (
    <button 
      className={`${baseStyles} ${variantStyles} ${sizeStyles} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;