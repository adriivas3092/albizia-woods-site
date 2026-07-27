import styles from './ProjectsEditorial.module.css';
import { useLang } from '../../i18n/LanguageContext';

const COPY = {
  en: {
    label: 'Featured Space',
    title: 'The Papagayo Residence',
    paragraphs: [
      'Situated on the Guanacaste coastline, this residence required a careful balance between the dramatic surrounding landscape and the serenity of the interior architecture.',
      'We designed an expansive, solid Guanacaste dining table to anchor the open-plan living area, allowing the natural grain to dialogue with the sweeping ocean views and minimalist concrete finishes.',
    ],
  },
  es: {
    label: 'Espacio Destacado',
    title: 'La Residencia Papagayo',
    paragraphs: [
      'Ubicada en la costa de Guanacaste, esta residencia exigía un equilibrio cuidadoso entre el dramático paisaje circundante y la serenidad de la arquitectura interior.',
      'Diseñamos una amplia mesa de comedor de Guanacaste macizo para anclar el área social de planta abierta, permitiendo que la veta natural dialogue con las vistas al océano y los acabados minimalistas de concreto.',
    ],
  },
};

export default function ProjectsEditorial() {
  const { lang } = useLang();
  const c = COPY[lang];

  return (
    <section className={styles.editorial}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.textCol}>
          <span className={styles.label}>{c.label}</span>
          <h2>{c.title}</h2>
          <div className={styles.description}>
            {c.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>

        <div className={styles.imageCol}>
          <img src="/Proyectos/Lat90_BAJA088.webp" alt="Papagayo Residence interior" className={styles.mainImage} loading="lazy" decoding="async" />
        </div>
      </div>

      <div className={styles.fullWidthImage}>
        <img src="/Proyectos/Lat90_BAJA079.webp" alt="Dining area details" loading="lazy" decoding="async" />
      </div>
    </section>
  );
}
