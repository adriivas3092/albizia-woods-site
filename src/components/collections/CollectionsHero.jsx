import styles from './CollectionsHero.module.css';
import { Link } from 'react-router-dom';

import Header from '../Header';

export default function CollectionsHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.background}>
        <img 
          src="/photo4.jpg" 
          alt="Premium architectural spaces by Albizia Woods" 
          className={styles.image}
        />
        <div className={styles.overlay}></div>
      </div>
      
      <Header />

      <div className={styles.content}>
        <h1 className="animate-fade-in">
          The Art of Living.
        </h1>
        <p className={`animate-fade-in ${styles.subtitle}`}>
          Sculptural objects and architectural furnishings crafted from natural materials.
        </p>
      </div>
    </section>
  );
}
