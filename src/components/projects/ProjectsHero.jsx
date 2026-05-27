import styles from './ProjectsHero.module.css';
import Header from '../Header';

export default function ProjectsHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.background}>
        <img 
          src="/Proyectos/Lat90_BAJA080.jpg" 
          alt="Architectural space" 
          className={styles.image}
        fetchpriority="high" />
        <div className={styles.overlay}></div>
      </div>

      <Header />

      <div className={`container ${styles.content}`}>
        <span className="animate-fade-in" style={{ display: 'block', letterSpacing: '0.15em', textTransform: 'uppercase', fontSize: '0.8rem', marginBottom: '1.5rem', color: 'rgba(255,255,255,0.7)'}}>Portfolio & Experiences</span>
        <h1 className="animate-fade-in">
          Architecture.<br/>Materialized.
        </h1>
        <p className={`animate-fade-in ${styles.subtitle}`}>
          Exploring the interplay between bespoke furniture and curated interior environments.
        </p>
      </div>
    </section>
  );
}
