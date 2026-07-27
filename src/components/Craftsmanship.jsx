import styles from './Craftsmanship.module.css';
import { useLang } from '../i18n/LanguageContext';

const COPY = {
  en: {
    label: 'Artisan Details',
    title: 'The integrity of the joint, the warmth of the grain.',
    text: 'We honor the traditions of Costa Rican woodworking, using slow, deliberate techniques that celebrate natural imperfections. Mortise and tenon joinery ensures our pieces last generations.',
  },
  es: {
    label: 'Detalles Artesanales',
    title: 'La integridad de la unión, la calidez de la veta.',
    text: 'Honramos las tradiciones de la ebanistería costarricense, con técnicas lentas y deliberadas que celebran las imperfecciones naturales. El ensamble de caja y espiga garantiza que nuestras piezas perduren por generaciones.',
  },
};

export default function Craftsmanship() {
  const { lang } = useLang();
  const c = COPY[lang];

  return (
    <section className={styles.craft}>
      <div className={styles.textureBg} style={{ backgroundImage: 'url(/texture.webp)' }}></div>
      <div className={`container ${styles.grid}`}>
        <div className={styles.imageCol}>
           <img src="/artisan_details.webp" alt="Woodworker carving wood with a chisel" className={styles.image} loading="lazy" decoding="async" />
        </div>
        <div className={styles.textCol}>
          <span className={styles.label}>{c.label}</span>
          <h2>{c.title}</h2>
          <p>{c.text}</p>
        </div>
      </div>
    </section>
  );
}
