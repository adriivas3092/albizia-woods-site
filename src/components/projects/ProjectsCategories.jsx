import { useState, useEffect } from 'react';
import styles from './ProjectsCategories.module.css';
import ScrollReveal from '../ScrollReveal';
import { useLang } from '../../i18n/LanguageContext';

// Auto-import every image dropped into each category folder (no code change needed
// when adding photos — just drop files in the folder and rebuild). The first image
// (alphabetically) is used as the category cover; all of them fill the gallery.
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
  en: { label: 'Projects', empty: 'Photos coming soon', close: 'Close', view: 'View gallery' },
  es: { label: 'Proyectos', empty: 'Fotografías pendientes', close: 'Cerrar', view: 'Ver galería' },
};

export default function ProjectsCategories() {
  const { lang } = useLang();
  const c = COPY[lang];
  const [open, setOpen] = useState(null);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setOpen(null); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <section className={styles.section}>
      <div className={`container ${styles.cards}`}>
        {CATEGORIES.map((cat) => {
          const hasImages = cat.images.length > 0;
          const cover = hasImages ? cat.images[0] : null;
          return (
            <ScrollReveal key={cat.key} className={styles.card}>
              <button
                type="button"
                className={styles.cardBtn}
                onClick={() => hasImages && setOpen(cat)}
                disabled={!hasImages}
              >
                {cover ? (
                  <img src={cover} alt={cat[lang]} className={styles.cover} loading="lazy" decoding="async" />
                ) : (
                  <div className={styles.coverPlaceholder} />
                )}
                <div className={styles.cardOverlay}>
                  <span className={styles.cardLabel}>{c.label}</span>
                  <h2>{cat[lang]}</h2>
                  <span className={styles.cardCta}>{hasImages ? c.view : c.empty}</span>
                </div>
              </button>
            </ScrollReveal>
          );
        })}
      </div>

      {open && (
        <div className={styles.lightbox} role="dialog" aria-modal="true" aria-label={open[lang]}>
          <div className={styles.lightboxBar}>
            <h3>{open[lang]}</h3>
            <button className={styles.closeBtn} onClick={() => setOpen(null)} aria-label={c.close}>
              {c.close}
            </button>
          </div>
          <div className={styles.gallery}>
            {open.images.map((src, i) => (
              <div key={i} className={styles.galleryItem}>
                <img src={src} alt={`${open[lang]} ${i + 1}`} loading="lazy" decoding="async" />
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
