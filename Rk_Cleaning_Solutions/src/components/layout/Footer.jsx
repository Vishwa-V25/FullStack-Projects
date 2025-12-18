import { Link } from 'react-router-dom';
import { CONTACT_DATA } from '../../data/contact.data.js';
import { ROUTES } from '../../constants/routes.js';
import ContactInfo from '../shared/ContactInfo.jsx';
import SocialLinks from '../shared/SocialLinks.jsx';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-teal-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">RK</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white leading-tight">
                  RK Cleaning
                </span>
                <span className="text-xs text-gray-400 leading-tight">
                  Experts
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Professional cleaning services in Salem. We make your environment pristine, healthy, and welcoming.
            </p>
            <SocialLinks />
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to={ROUTES.HOME} className="text-sm hover:text-teal-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to={ROUTES.ABOUT} className="text-sm hover:text-teal-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to={ROUTES.SERVICES} className="text-sm hover:text-teal-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to={ROUTES.GALLERY} className="text-sm hover:text-teal-400 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to={ROUTES.CONTACT} className="text-sm hover:text-teal-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-4">Contact Us</h3>
            <ContactInfo />
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="text-white font-bold mb-4">Working Hours</h3>
            <div className="space-y-2 text-sm">
              <div>
                <div className="text-gray-400">Weekdays</div>
                <div className="font-semibold">{CONTACT_DATA.workingHours.weekdays}</div>
              </div>
              <div>
                <div className="text-gray-400">Weekends</div>
                <div className="font-semibold">{CONTACT_DATA.workingHours.weekends}</div>
              </div>
              <div className="pt-2">
                <div className="text-teal-400 font-semibold">{CONTACT_DATA.workingHours.emergency}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>
            © {currentYear} RK Cleaning Experts. All rights reserved.
          </p>
          <p className="mt-2">
            Designed & Developed with ❤️ for Salem
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
