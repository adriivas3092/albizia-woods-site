import styles from './ProjectsDetails.module.css';
import { useLang } from '../../i18n/LanguageContext';

const COPY = {
  en: {
    title: 'Tactile Moments',
    text: 'Photography often captures the grand scale of a space, but true luxury resides in the details. The seamless joinery, the soft bevel of an edge, the way a natural wood grain flows uninterrupted across a surface—these are the hallmarks of our workshop.',
  },
  es: {
    title: 'Momentos Táctiles',
    text: 'La fotografía suele capturar la gran escala de un espacio, pero el verdadero lujo reside en los detalles. El ensamble impecable, el suave bisel de un borde, la manera en que la veta natural de la madera fluye sin interrupción sobre una superficie: estos son los sellos de nuestro taller.',
  },
};

export default function ProjectsDetails() {
  const { lang } = useLang();
  const c = COPY[lang];

  return (
    <section className={styles.details}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.textCol}>
          <h2>{c.title}</h2>
          <p>{c.text}</p>
        </div>

        <div className={styles.imageGrid}>
          <div className={styles.imageBox}>
            <img src="/Proyectos/Lat90_BAJA070.webp" alt="Wood grain detail" loading="lazy" decoding="async" />
          </div>
          <div className={styles.imageBox}>
            <img src="/Proyectos/Lat90_BAJA080.webp" alt="Craftsmanship detail" loading="lazy" decoding="async" />
          </div>
        </div>
      </div>
    </section>
  );
}
