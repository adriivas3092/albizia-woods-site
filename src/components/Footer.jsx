import styles from './Footer.module.css';
import { Link } from 'react-router-dom';
import { useLang } from '../i18n/LanguageContext';

const COPY = {
  en: {
    philosophy: ['Rooted in Nature.', 'Crafted for Timelessness.'],
    studio: 'Studio', ourStory: 'Our Story', bespoke: 'Bespoke Services', contact: 'Contact Us',
    portfolio: 'Portfolio', architecture: 'Architecture', collections: 'Collections', materials: 'Materials',
    connect: 'Connect', journal: 'Journal',
    privacy: 'Privacy Policy', terms: 'Terms of Service', top: 'Top',
  },
  es: {
    philosophy: ['Enraizados en la naturaleza.', 'Creados para perdurar.'],
    studio: 'Estudio', ourStory: 'Nuestra Historia', bespoke: 'Servicios a Medida', contact: 'Contactanos',
    portfolio: 'Portafolio', architecture: 'Arquitectura', collections: 'Colecciones', materials: 'Materiales',
    connect: 'Conectar', journal: 'Diario',
    privacy: 'Política de Privacidad', terms: 'Términos de Servicio', top: 'Arriba',
  },
};

export default function Footer() {
  const { lang } = useLang();
  const c = COPY[lang];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.layout}`}>
        <div className={styles.brand}>
          <img src="/logo.webp" alt="Albizia Woods" className={styles.logo} loading="lazy" decoding="async" />
          <p className={styles.philosophy}>{c.philosophy[0]}<br/>{c.philosophy[1]}</p>
        </div>

        <div className={styles.links}>
          <div className={styles.column}>
            <h4>{c.studio}</h4>
            <Link to="/about">{c.ourStory}</Link>
            <Link to="/bespoke">{c.bespoke}</Link>
            <Link to="/contact">{c.contact}</Link>
          </div>
          <div className={styles.column}>
            <h4>{c.portfolio}</h4>
            <Link to="/projects">{c.architecture}</Link>
            <Link to="/materials">{c.materials}</Link>
          </div>
          <div className={styles.column}>
            <h4>{c.connect}</h4>
            <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="#" target="_blank" rel="noopener noreferrer">Pinterest</a>
            <a href="#" target="_blank" rel="noopener noreferrer">{c.journal}</a>
          </div>
        </div>
      </div>

      <div className={`container`}>
        <div className={styles.bottomRow}>
          <p className={styles.copyright}>&copy; {new Date().getFullYear()} Albizia Woods. Costa Rica.</p>
          <div className={styles.legal}>
            <Link to="/privacy-policy">{c.privacy}</Link>
            <Link to="/terms-of-service">{c.terms}</Link>
          </div>
          <button onClick={scrollToTop} className={styles.backToTop} aria-label="Back to top">
            {c.top} &uarr;
          </button>
        </div>
      </div>
    </footer>
  );
}
