import styles from './MaterialsStory.module.css';
import { useLang } from '../../i18n/LanguageContext';

const COPY = {
  en: {
    label: 'Material Authenticity',
    title: 'The living record of time, weather, and earth.',
    paragraphs: [
      'Wood is not a static material. It is a living, breathing archive of the tropical environment. Every knot, variation in color, and shift in the grain tells the story of the Guanacaste and Cenizaro trees from which they were sustainably harvested.',
      'We do not seek to mask these natural imperfections; we elevate them. Through meticulous hand-sanding and the application of penetrating natural oils, we draw out the deep, tactile warmth inherent in every slab, ensuring it continues to age gracefully over generations.',
    ],
  },
  es: {
    label: 'Autenticidad del Material',
    title: 'El registro vivo del tiempo, el clima y la tierra.',
    paragraphs: [
      'La madera no es un material estático. Es un archivo vivo que respira el entorno tropical. Cada nudo, variación de color y giro en la veta cuenta la historia de los árboles de Guanacaste y Cenízaro de los que fue cosechada de forma sostenible.',
      'No buscamos ocultar estas imperfecciones naturales; las elevamos. Mediante un meticuloso lijado a mano y la aplicación de aceites naturales penetrantes, resaltamos la profunda calidez táctil inherente a cada tablón, asegurando que envejezca con gracia a lo largo de generaciones.',
    ],
  },
};

export default function MaterialsStory() {
  const { lang } = useLang();
  const c = COPY[lang];

  return (
    <section className={styles.story}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.imageCol}>
          <img src="/Proyectos/Lat90_BAJA070.webp" alt="Macro detail of natural wood grain" loading="lazy" decoding="async" />
        </div>

        <div className={styles.textCol}>
          <span className={styles.label}>{c.label}</span>
          <h2>{c.title}</h2>
          <div className={styles.editorial}>
            {c.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
