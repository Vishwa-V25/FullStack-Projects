export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  SERVICES: '/services',
  GALLERY: '/gallery',
  CONTACT: '/contact'
};

export const NAV_LINKS = [
  { path: ROUTES.HOME, label: 'Home' },
  { path: ROUTES.ABOUT, label: 'About' },
  { path: ROUTES.SERVICES, label: 'Services' },
  { path: ROUTES.GALLERY, label: 'Gallery' },
  { path: ROUTES.CONTACT, label: 'Contact' }
];

export const NAV_ROUTES = [
  { name: 'Home', href: ROUTES.HOME },
  { name: 'About', href: ROUTES.ABOUT },
  { name: 'Services', href: ROUTES.SERVICES },
  { name: 'Gallery', href: ROUTES.GALLERY },
  { name: 'Contact', href: ROUTES.CONTACT }
];

