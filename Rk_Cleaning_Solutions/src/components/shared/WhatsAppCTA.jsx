import { MessageCircle } from 'lucide-react';
import { CONTACT_DATA } from '../../data/contact.data.js';

const WhatsAppCTA = () => {
  return (
    <a
      href={CONTACT_DATA.socials.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 animate-bounce-subtle"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} fill="currentColor" />
    </a>
  );
};

export default WhatsAppCTA;

