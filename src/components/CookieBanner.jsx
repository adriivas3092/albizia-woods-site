import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './CookieBanner.module.css';

export default function CookieBanner() {
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
        <h3>Digital Experience & Privacy</h3>
        <p>
          We use cookies, Google Analytics, and the Meta Pixel to refine our digital architecture, 
          understand your interactions, and provide personalized advertising. By accepting, you 
          allow us to elevate your experience.
        </p>
        <div className={styles.actions}>
          <button onClick={handleAccept} className={styles.btnAccept}>
            Accept All
          </button>
          <button onClick={handleDecline} className={styles.btnDecline}>
            Decline
          </button>
          <Link to="/privacy-policy" className={styles.btnLearn} onClick={closeBanner}>
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}
