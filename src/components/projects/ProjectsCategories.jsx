import styles from './ProjectsCategories.module.css';
import ScrollReveal from '../ScrollReveal';
import { useLang } from '../../i18n/LanguageContext';

// Auto-import every image dropped into each category folder (no code change needed
// when adding photos — just drop files in the folder and rebuild).
const residImgs = import.meta.glob(
  '../../assets/projects/residenciales/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}',
  { eager: true, import: 'default' }
);
const comerImgs = import.meta.glob(
  '../../assets/projects/comerciales/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}',
  { eager: true, import: 'default' }
);

const toSortedArray = (obj) =>
  Object.entries(obj)
    .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
    .map(([, src]) => src);

const CATEGORIES = [
  { key: 'residenciales', en: 'Residential', es: 'Residenciales', images: toSortedArray(residImgs) },
  { key: 'comerciales', en: 'Commercial', es: 'Comerciales', images: toSortedArray(comerImgs) },
];

const COPY = {
  en: { label: 'By Category', empty: 'Photos coming soon' },
  es: { label: 'Por Categoría', empty: 'Fotografías pendientes' },
};

export default function ProjectsCategories() {
  const { lang } = useLang();
  const c = COPY[lang];

  return (
    <section className={styles.section}>
      <div className="container">
        {CATEGORIES.map((cat) => (
          <div key={cat.key} className={styles.category}>
            <ScrollReveal className={styles.header}>
              <span className={styles.label}>{c.label}</span>
              <h2>{cat[lang]}</h2>
            </ScrollReveal>

            {cat.images.length > 0 ? (
              <div className={styles.grid}>
                {cat.images.map((src, i) => (
                  <ScrollReveal key={i} className={styles.item}>
                    <img src={src} alt={`${cat[lang]} ${i + 1}`} loading="lazy" decoding="async" />
                  </ScrollReveal>
                ))}
              </div>
            ) : (
              <div className={styles.placeholder}>
                <span>{c.empty}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
