import styles from './Footer.module.css';
import { Link } from 'react-router-dom';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.layout}`}>
        <div className={styles.brand}>
          <img src="/logo.webp" alt="Albizia Woods" className={styles.logo} loading="lazy" decoding="async" />
          <p className={styles.philosophy}>Rooted in Nature.<br/>Crafted for Timelessness.</p>
        </div>
        
        <div className={styles.links}>
          <div className={styles.column}>
            <h4>Studio</h4>
            <Link to="/about">Our Story</Link>
            <Link to="/bespoke">Bespoke Services</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
          <div className={styles.column}>
            <h4>Portfolio</h4>
            <Link to="/projects">Architecture</Link>
            <Link to="/collections">Collections</Link>
            <Link to="/materials">Materials</Link>
          </div>
          <div className={styles.column}>
            <h4>Connect</h4>
            <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="#" target="_blank" rel="noopener noreferrer">Pinterest</a>
            <a href="#" target="_blank" rel="noopener noreferrer">Journal</a>
          </div>
        </div>
      </div>
      
      <div className={`container`}>
        <div className={styles.bottomRow}>
          <p className={styles.copyright}>&copy; {new Date().getFullYear()} Albizia Woods. Costa Rica.</p>
          <div className={styles.legal}>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-of-service">Terms of Service</Link>
          </div>
          <button onClick={scrollToTop} className={styles.backToTop} aria-label="Back to top">
            Top &uarr;
          </button>
        </div>
      </div>
    </footer>
  );
}
