// Shared navigation config used by both the desktop header and the mobile menu.
export const NAV_ITEMS = [
  { to: '/projects', en: 'Projects', es: 'Proyectos' },
  { to: '/collections', en: 'Collections', es: 'Colecciones' },
  { to: '/bespoke', en: 'Bespoke', es: 'A Medida' },
  { to: '/materials', en: 'Materials', es: 'Materiales' },
  { to: '/about', en: 'Our Story', es: 'Nuestra Historia' },
  { to: '/team', en: 'Our Team', es: 'Nuestro Equipo' },
  { to: '/contact', en: 'Contact', es: 'Contacto' },
];

// The desktop header shows a trimmed set (Collections lives in the mobile menu only,
// matching the previous behavior).
export const HEADER_NAV = NAV_ITEMS.filter((item) => item.to !== '/collections');
