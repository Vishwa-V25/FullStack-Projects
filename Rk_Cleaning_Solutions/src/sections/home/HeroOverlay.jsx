import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin } from 'lucide-react';
import { CONTACT_DATA } from '../../data/contact.data.js';
import Button from '../../components/ui/Button.jsx';

const HeroOverlay = () => {
  return (
    <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center md:items-start text-center md:text-left pt-20">
      
      {/* Badge */}
      <div className="inline-block px-4 py-1 mb-6 border border-white/30 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium tracking-wider animate-fade-in-up">
        Professional Cleaning Services in Salem
      </div>

      {/* Main Heading */}
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up delay-100">
        Revive Your Space with <br className="hidden md:block" />
        <span className="text-orange-500">Expert Cleaning</span>
      </h1>

      {/* Subtext */}
      <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl animate-fade-in-up delay-200">
        From deep home cleaning to industrial pest control. We make your environment pristine, healthy, and welcoming.
      </p>

      {/* Contact Details Grid (Desktop) */}
      <div className="hidden md:flex gap-6 mb-8 text-white/90 animate-fade-in-up delay-300">
        <div className="flex items-center gap-2">
           <Phone size={18} className="text-orange-500" />
           <span>{CONTACT_DATA.displayPhone}</span>
        </div>
        <div className="flex items-center gap-2">
           <MapPin size={18} className="text-orange-500" />
           <span>{CONTACT_DATA.address.area}, {CONTACT_DATA.address.city}</span>
        </div>
      </div>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-fade-in-up delay-300">
        <a href={CONTACT_DATA.socials.whatsapp} target="_blank" rel="noopener noreferrer">
          <Button variant="secondary" className="w-full sm:w-auto h-12 px-8">
            Book via WhatsApp
          </Button>
        </a>
        <Link to="/services">
          <Button variant="outline" className="w-full sm:w-auto h-12 px-8 border-white text-white hover:bg-white hover:text-gray-900">
            Explore Services
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HeroOverlay;