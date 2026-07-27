import styles from './InquiryCTA.module.css';
import { useLang } from '../../i18n/LanguageContext';

const COPY = {
  en: {
    label: 'Acquire a Piece',
    title: 'Commission the Extraordinary.',
    text: 'Our pieces are made to order, ensuring each object receives the time and attention it demands. Reach out to our studio to request pricing, material samples, or to discuss custom architectural adaptations.',
    primary: 'Request Catalog & Pricing',
    secondary: 'Schedule a Consultation',
  },
  es: {
    label: 'Adquiera una Pieza',
    title: 'Encargue lo Extraordinario.',
    text: 'Nuestras piezas se hacen por encargo, asegurando que cada objeto reciba el tiempo y la atención que exige. Contactá a nuestro estudio para solicitar precios, muestras de materiales o para conversar adaptaciones arquitectónicas a medida.',
    primary: 'Solicitar Catálogo y Precios',
    secondary: 'Agendar una Consulta',
  },
};

export default function InquiryCTA() {
  const { lang } = useLang();
  const c = COPY[lang];

  return (
    <section className={styles.cta}>
      <div className={`container ${styles.content}`}>
        <span className={styles.label}>{c.label}</span>
        <h2>{c.title}</h2>
        <p>{c.text}</p>
        <div className={styles.actions}>
          <a href="mailto:studio@albiziawoods.com" className={styles.primaryBtn}>
            {c.primary}
          </a>
          <button className={styles.secondaryBtn}>
            {c.secondary}
          </button>
        </div>
      </div>
    </section>
  );
}
