import styles from './Footer.module.css';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.layout}`}>
        <div className={styles.brand}>
          <img src="/logo.png" alt="Albizia Woods" className={styles.logo} loading="lazy" />
          <p>Rooted in Nature.<br/>Crafted for Timelessness.</p>
        </div>
        
        <div className={styles.links}>
          <div className={styles.column}>
            <h4>Explore</h4>
            <Link to="/about">Our Story</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/bespoke">Bespoke</Link>
            <Link to="/materials">Materials</Link>
          </div>
          <div className={styles.column}>
            <h4>Connect</h4>
            <a href="#">Instagram</a>
            <a href="#">Pinterest</a>
            <a href="#">Journal</a>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>
      
      <div className={styles.bottom}>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Albizia Woods. All rights reserved.</p>
          <div className={styles.legal}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
