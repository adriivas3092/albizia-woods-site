import styles from './AboutHero.module.css';
import Header from '../Header';
import { useLang } from '../../i18n/LanguageContext';

const COPY = {
  en: { title: ['The Art of', 'Belonging.'], subtitle: 'Madera con historia, diseño con futuro.' },
  es: { title: ['El Arte de', 'Pertenecer.'], subtitle: 'Madera con historia, diseño con futuro.' },
};

export default function AboutHero() {
  const { lang } = useLang();
  const c = COPY[lang];

  return (
    <section className={styles.hero}>
      <div className={styles.background}>
        <img
          src="/photo3.webp"
          alt="Master woodworker in a luxury studio"
          className={styles.image}
        fetchPriority="high" />
        <div className={styles.overlay}></div>
      </div>

      <Header />

      <div className={styles.content}>
        <h1 className="animate-fade-in">
          {c.title[0]} <br />
          {c.title[1]}
        </h1>
        <p className={`animate-fade-in ${styles.subtitle}`}>
          {c.subtitle}
        </p>
      </div>
    </section>
  );
}
