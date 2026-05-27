import styles from './Header.module.css';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import MobileMenu from './MobileMenu';

export default function Header() {
  const location = useLocation();
  const path = location.pathname;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.logo}>
        <Link to="/">
          <img src="/logo.webp" alt="Albizia Woods" className={styles.logoImg} loading="lazy" decoding="async" />
        </Link>
      </div>
      <nav className={styles.nav}>
        <Link to="/projects" className={path === '/projects' ? styles.activeLink : ''}>Projects</Link>
        <Link to="/bespoke" className={path === '/bespoke' ? styles.activeLink : ''}>Bespoke</Link>
        <Link to="/materials" className={path === '/materials' ? styles.activeLink : ''}>Materials</Link>
        <Link to="/about" className={path === '/about' ? styles.activeLink : ''}>Our Story</Link>
        <Link to="/contact" className={path === '/contact' ? styles.activeLink : ''}>Contact</Link>
      </nav>
      
      <button className={styles.hamburger} onClick={() => setIsMenuOpen(true)} aria-label="Open Menu">
        <span></span>
        <span></span>
      </button>
    </header>
    
    <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
  </>
  );
}
