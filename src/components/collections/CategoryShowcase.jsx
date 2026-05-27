import styles from './CategoryShowcase.module.css';

const CATEGORIES = [
  {
    title: 'The Living Room',
    description: 'Anchor the spaces where life unfolds with sculptural seating and solid architectural tables.',
    image: '/photo1.jpg',
    align: 'left'
  },
  {
    title: 'The Dining Experience',
    description: 'Handcrafted heirlooms designed for gathering, merging organic textures with geometric precision.',
    image: '/photo2.jpg',
    align: 'right'
  },
  {
    title: 'Rest & Sanctuary',
    description: 'Minimalist bedroom furnishings that cultivate calm, rooted deeply in natural materiality.',
    image: '/IMG_7872.jpg',
    align: 'left'
  },
  {
    title: 'Statement Objects',
    description: 'One-of-a-kind bespoke creations that blur the line between furniture and art.',
    image: '/IMG_7835.jpg',
    align: 'right'
  }
];

export default function CategoryShowcase() {
  return (
    <section className={styles.showcase}>
      <div className={`container ${styles.layout}`}>
        {CATEGORIES.map((cat, idx) => (
          <div key={idx} className={`${styles.row} ${cat.align === 'right' ? styles.rowReverse : ''}`}>
            <div className={styles.imageBlock}>
              <div className={styles.imageWrapper}>
                <img src={cat.image} alt={cat.title} loading="lazy" decoding="async" />
              </div>
            </div>
            <div className={styles.textBlock}>
              <span className={styles.number}>0{idx + 1}</span>
              <h2>{cat.title}</h2>
              <p>{cat.description}</p>
              <button className={styles.exploreBtn}>Explore Category</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
