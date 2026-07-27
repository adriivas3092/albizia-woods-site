import styles from './BespokeInspiration.module.css';
import { useLang } from '../../i18n/LanguageContext';

const COPY = {
  en: {
    title: 'Architectural Context',
    text: 'Furniture designed not just for a room, but for the life lived within it.',
  },
  es: {
    title: 'Contexto Arquitectónico',
    text: 'Mobiliario diseñado no solo para una habitación, sino para la vida que transcurre en ella.',
  },
};

export default function BespokeInspiration() {
  const { lang } = useLang();
  const c = COPY[lang];

  return (
    <section className={styles.inspiration}>
      <div className={styles.textureOverlay} style={{ backgroundImage: 'url(/texture.webp)' }}></div>
      <div className="container">
        <div className={styles.header}>
          <h2>{c.title}</h2>
          <p>{c.text}</p>
        </div>

        <div className={styles.grid}>
          <div className={styles.mainImage}>
            <img src="/bespoke_inspiration.webp" alt="Luxurious moody architectural space" loading="lazy" decoding="async" />
          </div>
          <div className={styles.sideImages}>
            <div className={styles.smallImage}>
              <img src="/Proyectos/Lat90_BAJA079.webp" alt="Interior detail" loading="lazy" decoding="async" />
            </div>
            <div className={styles.smallImageAlt}>
              <img src="/Proyectos/Lat90_BAJA088.webp" alt="Design detail" loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
