import styles from './Materials.module.css';
import { useLang } from '../i18n/LanguageContext';

const MATERIALS = [
  { en: 'Metal', es: 'Metal', image: '/material_metal.webp' },
  { en: 'Glass', es: 'Vidrio', image: '/material_vidrio.webp' },
  { en: 'Upholstery', es: 'Tapicería', image: '/material_tapiceria.webp' },
  { en: 'Stone', es: 'Piedra', image: '/material_piedra.webp' },
  { en: 'Lighting', es: 'Iluminación', image: '/material_iluminacion.jpg' },
];

const COPY = {
  en: {
    label: 'Complementary Materials',
    title: 'A harmonious dialogue of elements.',
    text: 'While Costa Rican timber is our soul, we elevate our architectural furniture by integrating complementary premium materials. From cast metals to fluted glass, each texture is chosen for its structural integrity and tactile warmth.',
  },
  es: {
    label: 'Materiales Complementarios',
    title: 'Un diálogo armonioso de elementos.',
    text: 'Si bien la madera costarricense es nuestra alma, elevamos nuestro mobiliario arquitectónico integrando materiales premium complementarios. Desde metales fundidos hasta vidrio estriado, cada textura se elige por su integridad estructural y su calidez táctil.',
  },
};

export default function Materials() {
  const { lang } = useLang();
  const c = COPY[lang];

  return (
    <section className={styles.materials}>
      <div className={`container ${styles.layout}`}>
        <div className={styles.text}>
          <span className={styles.label}>{c.label}</span>
          <h2>{c.title}</h2>
          <p>{c.text}</p>
        </div>

        <div className={styles.materialGrid}>
          {MATERIALS.map((mat, index) => (
            <div key={index} className={styles.materialCard}>
              <div className={styles.imageWrapper}>
                <img
  src={mat.image}
  alt={`Material: ${mat[lang]}`}
  loading="lazy"
  decoding="async"
  />
              </div>
              <h3 className={styles.materialName}>{mat[lang]}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
