import styles from './MaterialsGallery.module.css';
import { useLang } from '../../i18n/LanguageContext';

const MATERIALS = [
  {
    name: 'Guanacaste', image: '/photo2.webp',
    en: { type: 'Solid Wood', desc: 'Renowned for its dramatic, sweeping grain patterns and rich interplay of honey and deep chocolate tones.' },
    es: { type: 'Madera Maciza', desc: 'Reconocida por sus patrones de veta dramáticos y amplios, y el rico juego entre tonos miel y chocolate profundo.' },
  },
  {
    name: 'Brushed Brass', image: '/material_metal.webp',
    en: { type: 'Metal Finish', desc: 'A warm, tactile metal finish that develops a unique, subtle patina over time.' },
    es: { type: 'Acabado en Metal', desc: 'Un acabado metálico cálido y táctil que desarrolla una pátina única y sutil con el paso del tiempo.' },
  },
  {
    name: 'Travertine', image: '/material_piedra.webp',
    en: { type: 'Natural Stone', desc: 'An organic, porous stone that grounds our lighter pieces with architectural mass.' },
    es: { type: 'Piedra Natural', desc: 'Una piedra orgánica y porosa que ancla nuestras piezas más ligeras con masa arquitectónica.' },
  },
  {
    name: 'Bouclé', image: '/material_tapiceria.webp',
    en: { type: 'Textile', desc: 'A highly textured, sensory fabric that introduces softness against rigid wooden forms.' },
    es: { type: 'Textil', desc: 'Una tela muy texturizada y sensorial que aporta suavidad frente a las formas rígidas de la madera.' },
  },
];

const COPY = {
  en: { title: 'A Curated Palette', text: 'Materials selected not just for their durability, but for their sensory dialogue.' },
  es: { title: 'Una Paleta Curada', text: 'Materiales seleccionados no solo por su durabilidad, sino por su diálogo sensorial.' },
};

export default function MaterialsGallery() {
  const { lang } = useLang();
  const c = COPY[lang];

  return (
    <section className={styles.gallery}>
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <h2>{c.title}</h2>
          <p>{c.text}</p>
        </div>

        <div className={styles.grid}>
          {MATERIALS.map((material, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.imageBox}>
                <img src={material.image} alt={material.name} loading="lazy" decoding="async" />
                <div className={styles.overlay}>
                  <p>{material[lang].desc}</p>
                </div>
              </div>
              <div className={styles.info}>
                <h3>{material.name}</h3>
                <span>{material[lang].type}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
