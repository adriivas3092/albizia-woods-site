import styles from './TeamHero.module.css';
import Header from '../Header';
import { useLang } from '../../i18n/LanguageContext';

const COPY = {
  en: { label: 'The People Behind the Craft', title: 'Our Team', subtitle: 'Wood with history, design with a future.' },
  es: { label: 'Las Personas Detrás del Oficio', title: 'Nuestro Equipo', subtitle: 'Madera con historia, diseño con futuro.' },
};

export default function TeamHero() {
  const { lang } = useLang();
  const c = COPY[lang];

  return (
    <section className={styles.hero}>
      <div className={styles.background}>
        <img
          src="/team/equipo-hero.jpg"
          alt="Albizia Woods full team"
          className={styles.image}
        fetchPriority="high" />
        <div className={styles.overlay}></div>
      </div>

      <Header />

      <div className={`container ${styles.content}`}>
        <span className="animate-fade-in" style={{ display: 'block', letterSpacing: '0.15em', textTransform: 'uppercase', fontSize: '0.8rem', marginBottom: '1.5rem', color: 'rgba(255,255,255,0.7)' }}>{c.label}</span>
        <h1 className="animate-fade-in">{c.title}</h1>
        <p className={`animate-fade-in ${styles.subtitle}`}>{c.subtitle}</p>
      </div>
    </section>
  );
}
