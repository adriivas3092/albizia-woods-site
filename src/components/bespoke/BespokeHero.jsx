import styles from './BespokeHero.module.css';
import Header from '../Header';

export default function BespokeHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.background}>
        <img 
          src="/Proyectos/Lat90_BAJA088.jpg" 
          alt="Custom architectural woodwork" 
          className={styles.image}
        />
        <div className={styles.overlay}></div>
      </div>

      <Header />

      <div className={`container ${styles.content}`}>
        <span className="animate-fade-in" style={{ display: 'block', letterSpacing: '0.15em', textTransform: 'uppercase', fontSize: '0.8rem', marginBottom: '1.5rem', color: 'rgba(255,255,255,0.7)'}}>Custom Furniture Experience</span>
        <h1 className="animate-fade-in">
          The Luxury of<br/>Personalized Craft.
        </h1>
        <p className={`animate-fade-in ${styles.subtitle}`}>
          A collaborative journey to create architectural furniture that is undeniably yours.
        </p>
      </div>
    </section>
  );
}
