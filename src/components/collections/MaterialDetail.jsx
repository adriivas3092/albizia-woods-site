import styles from './MaterialDetail.module.css';
import { useLang } from '../../i18n/LanguageContext';

const COPY = {
  en: {
    label: 'Materiality',
    title: 'The Language of Grain.',
    text: 'We believe that wood possesses its own narrative. Every knot, every variation in tone is a record of time and place. Our role is not to mask these imperfections, but to elevate them through rigorous craftsmanship. The resulting pieces are tactile, honest, and profoundly unique.',
  },
  es: {
    label: 'Materialidad',
    title: 'El Lenguaje de la Veta.',
    text: 'Creemos que la madera posee su propia narrativa. Cada nudo, cada variación de tono es un registro del tiempo y el lugar. Nuestro papel no es ocultar estas imperfecciones, sino elevarlas mediante una artesanía rigurosa. Las piezas resultantes son táctiles, honestas y profundamente únicas.',
  },
};

export default function MaterialDetail() {
  const { lang } = useLang();
  const c = COPY[lang];

  return (
    <section className={styles.material}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.textContent}>
          <span className={styles.label}>{c.label}</span>
          <h2>{c.title}</h2>
          <p>{c.text}</p>
        </div>
        <div className={styles.visualContent}>
          <div className={styles.imageWrapper}>
            <img src="/texture.webp" alt="Close up of natural wood grain" loading="lazy" decoding="async" />
          </div>
        </div>
      </div>
    </section>
  );
}
