import styles from './CategoryShowcase.module.css';
import { useLang } from '../../i18n/LanguageContext';

const CATEGORIES = [
  {
    image: '/photo1.webp', align: 'left',
    en: { title: 'The Living Room', description: 'Anchor the spaces where life unfolds with sculptural seating and solid architectural tables.' },
    es: { title: 'La Sala de Estar', description: 'Ancle los espacios donde transcurre la vida con asientos escultóricos y mesas arquitectónicas macizas.' },
  },
  {
    image: '/photo2.webp', align: 'right',
    en: { title: 'The Dining Experience', description: 'Handcrafted heirlooms designed for gathering, merging organic textures with geometric precision.' },
    es: { title: 'La Experiencia del Comedor', description: 'Piezas de herencia hechas a mano, diseñadas para reunir, fusionando texturas orgánicas con precisión geométrica.' },
  },
  {
    image: '/IMG_7872.webp', align: 'left',
    en: { title: 'Rest & Sanctuary', description: 'Minimalist bedroom furnishings that cultivate calm, rooted deeply in natural materiality.' },
    es: { title: 'Descanso y Santuario', description: 'Mobiliario de dormitorio minimalista que cultiva la calma, profundamente arraigado en la materialidad natural.' },
  },
  {
    image: '/IMG_7835.webp', align: 'right',
    en: { title: 'Statement Objects', description: 'One-of-a-kind bespoke creations that blur the line between furniture and art.' },
    es: { title: 'Objetos con Carácter', description: 'Creaciones a medida únicas que difuminan la línea entre el mobiliario y el arte.' },
  },
];

const COPY = {
  en: { explore: 'Explore Category' },
  es: { explore: 'Explorar Categoría' },
};

export default function CategoryShowcase() {
  const { lang } = useLang();
  const c = COPY[lang];

  return (
    <section className={styles.showcase}>
      <div className={`container ${styles.layout}`}>
        {CATEGORIES.map((cat, idx) => (
          <div key={idx} className={`${styles.row} ${cat.align === 'right' ? styles.rowReverse : ''}`}>
            <div className={styles.imageBlock}>
              <div className={styles.imageWrapper}>
                <img src={cat.image} alt={cat[lang].title} loading="lazy" decoding="async" />
              </div>
            </div>
            <div className={styles.textBlock}>
              <span className={styles.number}>0{idx + 1}</span>
              <h2>{cat[lang].title}</h2>
              <p>{cat[lang].description}</p>
              <button className={styles.exploreBtn}>{c.explore}</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
