import React from 'react';
import { MapPin } from 'lucide-react';
import { CONTACT_DATA } from '../../data/contact.data.js';

const MapEmbed = () => {
  // Google Maps embed URL for Gorimedu, Salem
  // You can replace this with your actual business location
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.092895785!2d78.1681233!3d11.6646987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf3b6c5b5b5b5%3A0x5b5b5b5b5b5b5b5b!2sGorimedu%2C%20Salem%2C%20Tamil%20Nadu%20636008!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin`;

  return (
    <div className="relative w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-lg border border-gray-200">
      <iframe
        src={mapUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="RK Cleaning Experts Location"
        className="absolute inset-0"
      />
      
      {/* Overlay with Address */}
      <div className="absolute bottom-4 left-4 right-4 md:right-auto md:w-auto">
        <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-gray-200">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-teal-50 rounded-lg shrink-0">
              <MapPin size={20} className="text-teal-700" />
            </div>
            <div>
              <div className="font-bold text-gray-900 mb-1">Our Location</div>
              <div className="text-sm text-gray-600">{CONTACT_DATA.address.full}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapEmbed;

