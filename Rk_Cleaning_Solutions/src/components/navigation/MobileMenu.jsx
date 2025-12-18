import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, X } from 'lucide-react';
import { NAV_ROUTES } from '../../constants/routes';
import Button from '../ui/Button';

const MobileMenu = ({ isOpen, onClose, contactPhone }) => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div 
      className={`fixed inset-0 bg-white z-50 flex flex-col items-center justify-center space-y-8 transition-transform duration-300 md:hidden ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 text-gray-500 hover:text-red-500 transition-colors"
      >
        <X size={32} />
      </button>

      {NAV_ROUTES.map((link) => {
        const href = isHome && link.href !== '/' ? `/#${link.href.substring(1)}` : link.href;
        
        return (
          <Link 
            key={link.name} 
            to={href} 
            onClick={onClose}
            className="text-2xl font-bold text-gray-800 hover:text-brand-teal transition-colors"
          >
            {link.name}
          </Link>
        );
      })}
      
      <a href={`tel:${contactPhone}`} onClick={onClose} className="mt-8">
        <Button variant="primary" className="flex items-center gap-2 px-8 py-3 text-lg">
          <Phone size={20} />
          Call Now
        </Button>
      </a>
    </div>
  );
};

export default MobileMenu;