import styles from './ProjectsHero.module.css';
import Header from '../Header';
import { useLang } from '../../i18n/LanguageContext';

const COPY = {
  en: { label: 'Portfolio & Experiences', title: ['Architecture.', 'Materialized.'], subtitle: 'Wood with history, design with a future.' },
  es: { label: 'Portafolio y Experiencias', title: ['Arquitectura.', 'Materializada.'], subtitle: 'Madera con historia, diseño con futuro.' },
};

export default function ProjectsHero() {
  const { lang } = useLang();
  const c = COPY[lang];

  return (
    <section className={styles.hero}>
      <div className={styles.background}>
        <img
          src="/Proyectos/Lat90_BAJA080.webp"
          alt="Architectural space"
          className={styles.image}
        fetchPriority="high" />
        <div className={styles.overlay}></div>
      </div>

      <Header />

      <div className={`container ${styles.content}`}>
        <span className="animate-fade-in" style={{ display: 'block', letterSpacing: '0.15em', textTransform: 'uppercase', fontSize: '0.92rem', marginBottom: '1.5rem', color: 'rgba(255,255,255,0.7)'}}>{c.label}</span>
        <h1 className="animate-fade-in">
          {c.title[0]}<br/>{c.title[1]}
        </h1>
        <p className={`animate-fade-in ${styles.subtitle}`}>
          {c.subtitle}
        </p>
      </div>
    </section>
  );
}
