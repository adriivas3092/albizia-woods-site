import styles from './MaterialsHero.module.css';
import Header from '../Header';

export default function MaterialsHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.background}>
        <img 
          src="/photo3.jpg" 
          alt="Close up of natural wood texture and grain" 
          className={styles.image}
        fetchpriority="high" />
        <div className={styles.overlay}></div>
      </div>

      <Header />

      <div className={`container ${styles.content}`}>
        <span className="animate-fade-in" style={{ display: 'block', letterSpacing: '0.15em', textTransform: 'uppercase', fontSize: '0.8rem', marginBottom: '1.5rem', color: 'rgba(255,255,255,0.7)'}}>Tactile Experience</span>
        <h1 className="animate-fade-in">
          The Origin of<br/>Timelessness.
        </h1>
        <p className={`animate-fade-in ${styles.subtitle}`}>
          Discover the raw, unyielding beauty of tropical hardwoods and the hands that shape them.
        </p>
      </div>
    </section>
  );
}
