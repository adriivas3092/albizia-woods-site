import { useState, useEffect } from 'react';
import styles from './HeroSection.module.css';
import { Link } from 'react-router-dom';
import Header from './Header';

const CAROUSEL_IMAGES = [
  '/Proyectos/Lat90_BAJA070.jpg',
  '/Proyectos/Lat90_BAJA079.jpg',
  '/Proyectos/Lat90_BAJA080.jpg',
  '/Proyectos/Lat90_BAJA088.jpg',
  '/Proyectos/Lat90_BAJA093.jpg',
  '/Proyectos/Lat90_BAJA108.jpg',
  '/Proyectos/photo1.jpg',
  '/Proyectos/photo2.jpg',
  '/Proyectos/photo3.jpg'
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
    </section>
  );
}
