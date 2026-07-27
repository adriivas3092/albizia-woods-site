import styles from './NameMeaning.module.css';
import { useLang } from '../../i18n/LanguageContext';

const COPY = {
  en: {
    label: 'Our Name',
    text: 'Named after the Guanacaste Blanco tree, our studio draws profound inspiration from its symbolism. The Albizia Niopoides represents deep roots, resilience, and a quiet, imposing elegance. It is a reflection of our connection to Costa Rica—grounded in nature, reaching for architectural beauty.',
  },
  es: {
    label: 'Nuestro Nombre',
    text: 'Nombrado en honor al árbol de Guanacaste Blanco, nuestro estudio se inspira profundamente en su simbolismo. La Albizia Niopoides representa raíces profundas, resiliencia y una elegancia serena e imponente. Es un reflejo de nuestra conexión con Costa Rica: arraigados en la naturaleza, aspirando a la belleza arquitectónica.',
  },
};

export default function NameMeaning() {
  const { lang } = useLang();
  const c = COPY[lang];

  return (
    <section className={styles.meaning}>
      <div className={`container ${styles.layout}`}>
        <div className={styles.textContainer}>
          <span className={styles.label}>{c.label}</span>
          <h2>Albizia Niopoides</h2>
          <p>{c.text}</p>
        </div>
        <div className={styles.imageContainer}>
          <img
            src="/albizia_tree_1779816107533.webp"
            alt="Albizia Niopoides Tree"
            className={styles.image}
          loading="lazy" decoding="async" />
        </div>
      </div>
    </section>
  );
}
