import styles from './BespokeMaterials.module.css';
import { useLang } from '../../i18n/LanguageContext';

const COPY = {
  en: {
    title: 'Materials & Finishes',
    paragraphs: [
      'The essence of our bespoke service lies in the uncompromised selection of materials. We source the finest Costa Rican hardwoods—Guanacaste, Cenizaro, and Teak—each slab chosen for its unique grain character and structural integrity.',
      'To elevate the organic warmth of the wood, we integrate premium complementary finishes: brushed brass, fluted architectural glass, natural travertine, and tactile bouclé upholstery.',
    ],
  },
  es: {
    title: 'Materiales y Acabados',
    paragraphs: [
      'La esencia de nuestro servicio a medida reside en una selección de materiales sin concesiones. Obtenemos las mejores maderas duras costarricenses —Guanacaste, Cenízaro y Teca—, cada tablón elegido por el carácter único de su veta y su integridad estructural.',
      'Para elevar la calidez orgánica de la madera, integramos acabados premium complementarios: latón cepillado, vidrio arquitectónico estriado, travertino natural y tapicería táctil de bouclé.',
    ],
  },
};

export default function BespokeMaterials() {
  const { lang } = useLang();
  const c = COPY[lang];

  return (
    <section className={styles.materials}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.imageCol}>
          <img src="/material_metal.webp" alt="Brushed metal texture" className={styles.image} loading="lazy" decoding="async" />
          <img src="/material_piedra.webp" alt="Travertine stone texture" className={`${styles.image} ${styles.offsetImage}`} loading="lazy" decoding="async" />
        </div>

        <div className={styles.textCol}>
          <h2>{c.title}</h2>
          {c.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
