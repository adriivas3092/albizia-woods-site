import styles from './MaterialsGallery.module.css';

const MATERIALS = [
  { name: 'Guanacaste', type: 'Solid Wood', image: '/photo2.jpg', desc: 'Renowned for its dramatic, sweeping grain patterns and rich interplay of honey and deep chocolate tones.' },
  { name: 'Brushed Brass', type: 'Metal Finish', image: '/material_metal.png', desc: 'A warm, tactile metal finish that develops a unique, subtle patina over time.' },
  { name: 'Travertine', type: 'Natural Stone', image: '/material_piedra.png', desc: 'An organic, porous stone that grounds our lighter pieces with architectural mass.' },
  { name: 'Bouclé', type: 'Textile', image: '/material_tapiceria.png', desc: 'A highly textured, sensory fabric that introduces softness against rigid wooden forms.' }
];

export default function MaterialsGallery() {
  return (
    <section className={styles.gallery}>
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <h2>A Curated Palette</h2>
          <p>Materials selected not just for their durability, but for their sensory dialogue.</p>
        </div>
        
        <div className={styles.grid}>
          {MATERIALS.map((material, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.imageBox}>
                <img src={material.image} alt={material.name} loading="lazy" />
                <div className={styles.overlay}>
                  <p>{material.desc}</p>
                </div>
              </div>
              <div className={styles.info}>
                <h3>{material.name}</h3>
                <span>{material.type}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
