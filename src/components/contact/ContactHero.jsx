import styles from './ContactHero.module.css';
import Header from '../Header';

export default function ContactHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.background}>
        <img 
          src="/Proyectos/Lat90_BAJA093.webp" 
          alt="Warm architectural living space" 
          className={styles.image}
        fetchpriority="high" />
        <div className={styles.overlay}></div>
      </div>

      <Header />

      <div className={`container ${styles.content}`}>
        <span className="animate-fade-in" style={{ display: 'block', letterSpacing: '0.15em', textTransform: 'uppercase', fontSize: '0.8rem', marginBottom: '1.5rem', color: 'rgba(255,255,255,0.7)'}}>Start a Dialogue</span>
        <h1 className="animate-fade-in">
          Envision Your<br/>Space.
        </h1>
        <p className={`animate-fade-in ${styles.subtitle}`}>
          We invite you to begin a collaborative journey to create furniture that resonates with your architecture and lifestyle.
        </p>
      </div>
    </section>
  );
}
