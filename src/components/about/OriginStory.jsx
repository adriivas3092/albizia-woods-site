import styles from './OriginStory.module.css';
import { useLang } from '../../i18n/LanguageContext';

const COPY = {
  en: {
    label: 'The Origin',
    title: 'A passion project that became a legacy.',
    paragraphs: [
      'Albizia Woods was born in 2018 from a simple family initiative: to design and build custom furniture for our own home. What started as a personal quest for authentic, meaningful pieces soon evolved into a profound dedication to the craft.',
      'As we learned to listen to the wood, our passion deepened. Today, Albizia Woods is a premium woodworking studio committed to aesthetic functionality, where every piece honors its Costa Rican roots and natural materials.',
    ],
  },
  es: {
    label: 'El Origen',
    title: 'Un proyecto de pasión que se convirtió en legado.',
    paragraphs: [
      'Albizia Woods nació en 2018 de una simple iniciativa familiar: diseñar y construir mobiliario a medida para nuestro propio hogar. Lo que comenzó como una búsqueda personal de piezas auténticas y con significado pronto se convirtió en una profunda dedicación al oficio.',
      'A medida que aprendimos a escuchar la madera, nuestra pasión se profundizó. Hoy, Albizia Woods es un estudio de ebanistería premium comprometido con la funcionalidad estética, donde cada pieza honra sus raíces costarricenses y sus materiales naturales.',
    ],
  },
};

export default function OriginStory() {
  const { lang } = useLang();
  const c = COPY[lang];

  return (
    <section className={styles.origin}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.visualContent}>
          <img
            src="/the_origin_desk.webp"
            alt="Albizia Woods custom desk design"
            className={styles.image}
          loading="lazy" decoding="async" />
        </div>
        <div className={styles.textContent}>
          <span className={styles.label}>{c.label}</span>
          <h2>{c.title}</h2>
          <div className={styles.paragraphs}>
            {c.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
