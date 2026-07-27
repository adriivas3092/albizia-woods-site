import styles from './WorkshopProcess.module.css';
import { useLang } from '../../i18n/LanguageContext';

const COPY = {
  en: {
    label: 'The Workshop',
    title: 'Shaped by human hands.',
    text: 'Our process is deliberately slow. We celebrate the tactile nature of woodworking—the resistance of the grain against the chisel, the scent of fresh cut timber, the warmth of the final hand-rubbed finish. It is an intimate dialogue between artisan and material.',
  },
  es: {
    label: 'El Taller',
    title: 'Moldeado por manos humanas.',
    text: 'Nuestro proceso es deliberadamente lento. Celebramos la naturaleza táctil de la ebanistería: la resistencia de la veta ante el cincel, el aroma de la madera recién cortada, la calidez del acabado final pulido a mano. Es un diálogo íntimo entre el artesano y el material.',
  },
};

export default function WorkshopProcess() {
  const { lang } = useLang();
  const c = COPY[lang];

  return (
    <section className={styles.workshop}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.textCol}>
          <span className={styles.label}>{c.label}</span>
          <h2>{c.title}</h2>
          <p>{c.text}</p>
        </div>
        <div className={styles.imageCol}>
           <img
            src="/workshop_process_1779816120385.webp"
            alt="Woodworking chisel macro shot"
            className={styles.image}
          loading="lazy" decoding="async" />
        </div>
      </div>
    </section>
  );
}
