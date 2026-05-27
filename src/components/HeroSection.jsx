import { useState, useEffect } from 'react';
import styles from './HeroSection.module.css';
import { Link } from 'react-router-dom';
import Header from './Header';

const CAROUSEL_IMAGES = [
  '/Proyectos/Lat90_BAJA070.webp',
  '/Proyectos/Lat90_BAJA079.webp',
  '/Proyectos/Lat90_BAJA080.webp',
  '/Proyectos/Lat90_BAJA088.webp',
  '/Proyectos/Lat90_BAJA093.webp',
  '/Proyectos/Lat90_BAJA108.webp',
  '/Proyectos/photo1.webp',
  '/Proyectos/photo2.webp',
  '/Proyectos/photo3.webp'
];

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
    }, 6000); // Change image every 6 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.carousel}>
        {CAROUSEL_IMAGES.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Hero ${index + 1}`}
            className={`${styles.image} ${index === currentImageIndex ? styles.active : ''}`}
          fetchpriority="high" />
        ))}
        <div className={styles.overlay}></div>
      </div>

      <Header />

      <div className={styles.content}>
        <h1 className={styles.title}>
          <span>Rooted in Nature.</span>
          <span>Crafted for Timelessness.</span>
        </h1>
        <p className={styles.subtitle}>
          A Costa Rican woodworking studio dedicated to architectural furniture and natural elegance.
        </p>
        <Link to="/projects" className={styles.cta}>
          Explore the Portfolio
        </Link>
      </div>

      <div className={styles.indicators}>
        {CAROUSEL_IMAGES.map((_, index) => (
          <button 
            key={index} 
            className={`${styles.dot} ${index === currentImageIndex ? styles.dotActive : ''}`}
            onClick={() => setCurrentImageIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className={styles.scrollIndicator} onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
        <span className={styles.scrollText}>Scroll</span>
        <svg width="12" height="24" viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.scrollIcon}>
          <path d="M6 0V23M6 23L1 18M6 23L11 18" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
}
