import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../../constants/routes.js';

const NavLinks = ({ className = '', onLinkClick }) => {
  const location = useLocation();

  return (
    <nav className={className}>
      <ul className="flex flex-col md:flex-row gap-6 md:gap-8">
        {NAV_LINKS.map((link) => {
          const isActive = location.pathname === link.path;
          return (
            <li key={link.path}>
              <Link
                to={link.path}
                onClick={onLinkClick}
                className={`text-base font-medium transition-colors duration-200 ${
                  isActive
                    ? 'text-teal-700 border-b-2 border-teal-700 pb-1'
                    : 'text-gray-700 hover:text-teal-700'
                }`}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavLinks;

