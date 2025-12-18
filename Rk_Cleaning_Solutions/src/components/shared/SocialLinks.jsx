import { Facebook, Instagram, Youtube, MessageCircle } from 'lucide-react';
import { CONTACT_DATA } from '../../data/contact.data.js';

const SocialLinks = ({ className = '' }) => {
  const socials = [
    { name: 'WhatsApp', icon: MessageCircle, href: CONTACT_DATA.socials.whatsapp, color: 'text-green-600 hover:bg-green-50' },
    { name: 'Facebook', icon: Facebook, href: CONTACT_DATA.socials.facebook, color: 'text-blue-600 hover:bg-blue-50' },
    { name: 'Instagram', icon: Instagram, href: CONTACT_DATA.socials.instagram, color: 'text-pink-600 hover:bg-pink-50' },
    { name: 'Youtube', icon: Youtube, href: CONTACT_DATA.socials.youtube, color: 'text-red-600 hover:bg-red-50' }
  ];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`p-2 rounded-lg transition-colors ${social.color}`}
          aria-label={social.name}
        >
          <social.icon size={20} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;

