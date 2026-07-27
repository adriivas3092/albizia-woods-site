import styles from './MaterialsCraftsmanship.module.css';
import { useLang } from '../../i18n/LanguageContext';

const COPY = {
  en: {
    title: 'The Hand of the Maker',
    text: 'Machine precision gives our furniture its structural integrity, but it is the human hand that gives it a soul. We believe that true luxury must be felt before it is seen.',
    features: [
      { title: 'Tactile Finishing', text: 'Every piece undergoes rigorous hand-sanding protocols, graduating through micro-grits until the surface feels akin to polished stone, yet remains fundamentally warm to the touch.' },
      { title: 'Natural Patina', text: 'We reject synthetic lacquers that trap the wood under plastic. Our botanical oil blends allow the wood to breathe, guaranteeing that your furniture will develop a rich, authentic patina over decades of use.' },
    ],
  },
  es: {
    title: 'La Mano del Artesano',
    text: 'La precisión de la máquina le da a nuestro mobiliario su integridad estructural, pero es la mano humana la que le da alma. Creemos que el verdadero lujo debe sentirse antes de verse.',
    features: [
      { title: 'Acabado Táctil', text: 'Cada pieza atraviesa rigurosos protocolos de lijado a mano, avanzando por micro-granos hasta que la superficie se siente similar a la piedra pulida, pero permanece fundamentalmente cálida al tacto.' },
      { title: 'Pátina Natural', text: 'Rechazamos las lacas sintéticas que atrapan la madera bajo el plástico. Nuestras mezclas de aceites botánicos permiten que la madera respire, garantizando que tu mobiliario desarrolle una pátina rica y auténtica a lo largo de décadas de uso.' },
    ],
  },
};

export default function MaterialsCraftsmanship() {
  const { lang } = useLang();
  const c = COPY[lang];

  return (
    <section className={styles.craftsmanship}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.contentCol}>
          <h2>{c.title}</h2>
          <p>{c.text}</p>
          <div className={styles.features}>
            {c.features.map((f, i) => (
              <div key={i} className={styles.feature}>
                <h4>{f.title}</h4>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.imageCol}>
          <div className={styles.mainImage}>
            <img src="/photo3.webp" alt="Artisan hand-finishing wood" loading="lazy" decoding="async" />
          </div>
          <div className={styles.detailImage}>
            <img src="/Proyectos/Lat90_BAJA080.webp" alt="Joinery and finish detail" loading="lazy" decoding="async" />
          </div>
        </div>
      </div>
    </section>
  );
}
