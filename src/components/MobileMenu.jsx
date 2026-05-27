import styles from './MobileMenu.module.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function MobileMenu({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <button className={styles.closeBtn} onClick={onClose} aria-label="Close Menu">
        CLOSE
      </button>
      <nav className={styles.nav}>
        <Link to="/projects" onClick={onClose} style={{ animationDelay: '0.1s' }}>Projects</Link>
        <Link to="/collections" onClick={onClose} style={{ animationDelay: '0.2s' }}>Collections</Link>
        <Link to="/bespoke" onClick={onClose} style={{ animationDelay: '0.3s' }}>Bespoke</Link>
        <Link to="/materials" onClick={onClose} style={{ animationDelay: '0.4s' }}>Materials</Link>
        <Link to="/about" onClick={onClose} style={{ animationDelay: '0.5s' }}>Our Story</Link>
        <Link to="/contact" onClick={onClose} style={{ animationDelay: '0.6s' }}>Contact</Link>
      </nav>
      <div className={styles.footer} style={{ animationDelay: '0.7s' }}>
        <p>Albizia Woods</p>
        <p>San José, Costa Rica</p>
      </div>
    </div>
  );
}
