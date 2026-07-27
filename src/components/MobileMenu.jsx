import styles from './MobileMenu.module.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useLang } from '../i18n/LanguageContext';
import { NAV_ITEMS } from '../i18n/nav';

export default function MobileMenu({ isOpen, onClose }) {
  const { lang, setLang } = useLang();

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
        {lang === 'es' ? 'CERRAR' : 'CLOSE'}
      </button>
      <nav className={styles.nav}>
        {NAV_ITEMS.map((item, idx) => (
          <Link
            key={item.to}
            to={item.to}
            onClick={onClose}
            style={{ animationDelay: `${0.1 * (idx + 1)}s` }}
          >
            {item[lang]}
          </Link>
        ))}
      </nav>
      <div className={styles.langSwitch} style={{ animationDelay: '0.9s' }} role="group" aria-label="Language">
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
      <div className={styles.footer} style={{ animationDelay: '1s' }}>
        <p>Albizia Woods</p>
        <p>San José, Costa Rica</p>
      </div>
    </div>
  );
}
