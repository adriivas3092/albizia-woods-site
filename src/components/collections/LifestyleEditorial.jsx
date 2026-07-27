import styles from './LifestyleEditorial.module.css';
import { useLang } from '../../i18n/LanguageContext';

const COPY = {
  en: { title: 'Rooted in the landscape, designed for the modern interior.' },
  es: { title: 'Arraigado en el paisaje, diseñado para el interior moderno.' },
};

export default function LifestyleEditorial() {
  const { lang } = useLang();
  const c = COPY[lang];

  return (
    <section className={styles.lifestyle}>
      <div className={styles.imageContainer}>
        <img
          src="/IMG_7881.webp"
          alt="Warm modern Costa Rican interior"
          className={styles.image}
          loading="lazy"
        decoding="async" />
      </div>
      <div className={`container ${styles.content}`}>
        <h2 className={styles.title}>
          {c.title}
        </h2>
      </div>
    </section>
  );
}
