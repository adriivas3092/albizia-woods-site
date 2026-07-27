import styles from './CollectionsHero.module.css';
import Header from '../Header';
import { useLang } from '../../i18n/LanguageContext';

const COPY = {
  en: { title: 'The Art of Living.', subtitle: 'Madera con historia, diseño con futuro.' },
  es: { title: 'El Arte de Habitar.', subtitle: 'Madera con historia, diseño con futuro.' },
};

export default function CollectionsHero() {
  const { lang } = useLang();
  const c = COPY[lang];

  return (
    <section className={styles.hero}>
      <div className={styles.background}>
        <img
          src="/photo4.webp"
          alt="Premium architectural spaces by Albizia Woods"
          className={styles.image}
        fetchPriority="high" />
        <div className={styles.overlay}></div>
      </div>

      <Header />

      <div className={styles.content}>
        <h1 className="animate-fade-in">
          {c.title}
        </h1>
        <p className={`animate-fade-in ${styles.subtitle}`}>
          {c.subtitle}
        </p>
      </div>
    </section>
  );
}
