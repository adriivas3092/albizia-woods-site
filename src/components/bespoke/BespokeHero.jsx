import styles from './BespokeHero.module.css';
import Header from '../Header';
import { useLang } from '../../i18n/LanguageContext';

const COPY = {
  en: { label: 'Custom Furniture Experience', title: ['The Luxury of', 'Personalized Craft.'], subtitle: 'Wood with history, design with a future.' },
  es: { label: 'Experiencia de Mobiliario a Medida', title: ['El Lujo de la', 'Artesanía Personalizada.'], subtitle: 'Madera con historia, diseño con futuro.' },
};

export default function BespokeHero() {
  const { lang } = useLang();
  const c = COPY[lang];

  return (
    <section className={styles.hero}>
      <div className={styles.background}>
        <img
          src="/Proyectos/Lat90_BAJA088.webp"
          alt="Custom architectural woodwork"
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
