import styles from './CostaRicanIdentity.module.css';
import { useLang } from '../../i18n/LanguageContext';

const COPY = {
  en: {
    label: 'Our Identity',
    title: 'Tropical Modernism',
    text: 'Our roots are undeniably Costa Rican. We draw inspiration from the lush, wild landscapes and the warm, golden light of the tropics. This is reflected in our use of local, sustainable timbers and a design philosophy that embraces organic textures while adhering to strict, modern architectural principles.',
  },
  es: {
    label: 'Nuestra Identidad',
    title: 'Modernismo Tropical',
    text: 'Nuestras raíces son innegablemente costarricenses. Nos inspiramos en los paisajes exuberantes y salvajes y en la cálida luz dorada del trópico. Esto se refleja en el uso de maderas locales y sostenibles y en una filosofía de diseño que abraza las texturas orgánicas mientras se adhiere a estrictos principios arquitectónicos modernos.',
  },
};

export default function CostaRicanIdentity() {
  const { lang } = useLang();
  const c = COPY[lang];

  return (
    <section className={styles.identity}>
      <div className={styles.fullImage}>
         <img
            src="/artboard1.webp"
            alt="Costa Rican tropical modernism architecture"
            className={styles.image}
          loading="lazy" decoding="async" />
      </div>
      <div className={`container ${styles.content}`}>
        <div className={styles.textContent}>
          <span className={styles.label}>{c.label}</span>
          <h2>{c.title}</h2>
          <p>{c.text}</p>
        </div>
      </div>
    </section>
  );
}
