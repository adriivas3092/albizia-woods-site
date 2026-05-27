import styles from './AboutHero.module.css';
import { Link } from 'react-router-dom';

import Header from '../Header';

export default function AboutHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.background}>
        <img 
          src="/photo3.webp" 
          alt="Master woodworker in a luxury studio" 
          className={styles.image}
        fetchpriority="high" />
        <div className={styles.overlay}></div>
      </div>
      
      <Header />

      <div className={styles.content}>
        <h1 className="animate-fade-in">
          The Art of <br />
          Belonging.
        </h1>
        <p className={`animate-fade-in ${styles.subtitle}`}>
          Rooted in family, designed for generations.
        </p>
      </div>
    </section>
  );
}
