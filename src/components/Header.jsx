import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import MobileMenu from './MobileMenu';
import { useLang } from '../i18n/LanguageContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang } = useLang();

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

        <div className={styles.actions}>
          <div className={styles.langSwitch} role="group" aria-label="Language">
            <button
              type="button"
              className={`${styles.langBtn} ${lang === 'en' ? styles.langActive : ''}`}
              onClick={() => setLang('en')}
              aria-pressed={lang === 'en'}
            >
              EN
            </button>
            <span className={styles.langSep}>/</span>
            <button
              type="button"
              className={`${styles.langBtn} ${lang === 'es' ? styles.langActive : ''}`}
              onClick={() => setLang('es')}
              aria-pressed={lang === 'es'}
            >
              ES
            </button>
          </div>

          <button
            className={styles.hamburger}
            onClick={() => setIsMenuOpen(true)}
            aria-label={lang === 'es' ? 'Abrir menú' : 'Open menu'}
          >
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
