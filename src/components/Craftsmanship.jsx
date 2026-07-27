import styles from './Craftsmanship.module.css';
import { useLang } from '../i18n/LanguageContext';

const COPY = {
  en: {
    label: 'Artisan Details',
    title: 'The art of creating unique pieces',
    text: 'Every piece of furniture at Albizia Woods comes to life through the dedication, experience, and precision of our cabinetmakers, who transform wood into unique pieces with an exceptional handcrafted finish.',
  },
  es: {
    label: 'Detalles Artesanales',
    title: 'El arte de crear piezas únicas',
    text: 'Cada mueble de Albizia Woods cobra vida gracias a la dedicación, experiencia y precisión de nuestros ebanistas, quienes transforman la madera en piezas únicas con un acabado artesanal excepcional.',
  },
};

export default function Craftsmanship() {
  const { lang } = useLang();
  const c = COPY[lang];

  return (
    <section className={styles.craft}>
      <div className={styles.textureBg} style={{ backgroundImage: 'url(/texture.webp)' }}></div>
      <div className={`container ${styles.inner}`}>
        <div className={styles.textCol}>
          <span className={styles.label}>{c.label}</span>
          <h2>{c.title}</h2>
          <p>{c.text}</p>
        </div>

        <div className={styles.imageRow}>
          <div className={styles.imageCol}>
            <img src="/artisan_details.webp" alt="Woodworker carving wood with a chisel" className={styles.image} loading="lazy" decoding="async" />
          </div>
          <div className={styles.imageCol}>
            <img src="/artisan_finishing.jpg" alt="Artisan hand-sanding a wood panel" className={styles.image} loading="lazy" decoding="async" />
          </div>
        </div>
      </div>
    </section>
  );
}
