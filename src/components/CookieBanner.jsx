import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './CookieBanner.module.css';
import { useLang } from '../i18n/LanguageContext';

const COPY = {
  en: {
    title: 'Digital Experience & Privacy',
    body: 'We use cookies, Google Analytics, and the Meta Pixel to refine our digital architecture, understand your interactions, and provide personalized advertising. By accepting, you allow us to elevate your experience.',
    accept: 'Accept All', decline: 'Decline', learn: 'Learn More',
  },
  es: {
    title: 'Experiencia Digital y Privacidad',
    body: 'Usamos cookies, Google Analytics y el Meta Pixel para refinar nuestra arquitectura digital, comprender tus interacciones y ofrecer publicidad personalizada. Al aceptar, nos permites elevar tu experiencia.',
    accept: 'Aceptar Todo', decline: 'Rechazar', learn: 'Más Información',
  },
};

export default function CookieBanner() {
  const { lang } = useLang();
  const c = COPY[lang];
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('albizia_cookie_consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('albizia_cookie_consent', 'accepted');
    closeBanner();
    // Here you would theoretically initialize Google Analytics & Meta Pixel
  };

  const handleDecline = () => {
    localStorage.setItem('albizia_cookie_consent', 'declined');
    closeBanner();
    // Here you would ensure tracking scripts are disabled
  };

  const closeBanner = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 600); // Wait for the slideDown animation to finish
  };

  if (!isVisible) return null;

  return (
    <div className={`${styles.overlay} ${isClosing ? styles.closing : ''}`}>
      <div className={styles.content}>
        <h3>{c.title}</h3>
        <p>{c.body}</p>
        <div className={styles.actions}>
          <button onClick={handleAccept} className={styles.btnAccept}>
            {c.accept}
          </button>
          <button onClick={handleDecline} className={styles.btnDecline}>
            {c.decline}
          </button>
          <Link to="/privacy-policy" className={styles.btnLearn} onClick={closeBanner}>
            {c.learn}
          </Link>
        </div>
      </div>
    </div>
  );
}
