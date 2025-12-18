import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Phone } from 'lucide-react';
import NavLinks from '../navigation/NavLinks.jsx';
import MobileMenu from '../navigation/MobileMenu.jsx';
import { CONTACT_DATA } from '../../data/contact.data.js';
import IconButton from '../ui/IconButton.jsx';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-teal-700 rounded-lg flex items-center justify-center group-hover:bg-teal-800 transition-colors">
                <span className="text-white font-bold text-xl">RK</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-gray-900 leading-tight">
                  RK Cleaning
                </span>
                <span className="text-xs text-gray-500 leading-tight">
                  Experts
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <NavLinks />
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-4">
              {/* Phone Number - Desktop */}
              <a
                href={`tel:${CONTACT_DATA.phone}`}
                className="hidden lg:flex items-center gap-2 text-gray-700 hover:text-teal-700 transition-colors"
              >
                <Phone size={18} />
                <span className="font-medium">{CONTACT_DATA.displayPhone}</span>
              </a>

              {/* WhatsApp CTA - Desktop */}
              <a
                href={CONTACT_DATA.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:block"
              >
                <IconButton
                  variant="primary"
                  className="bg-green-600 hover:bg-green-700 text-white"
                >
                  Book Now
                </IconButton>
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Open menu"
              >
                <Menu size={24} className="text-gray-700" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
};

export default Header;
