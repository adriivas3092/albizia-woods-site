import styles from './Materials.module.css';

const MATERIALS = [
  { name: 'Metal', image: '/material_metal.webp' },
  { name: 'Vidrio', image: '/material_vidrio.webp' },
  { name: 'Tapicería', image: '/material_tapiceria.webp' },
  { name: 'Piedra', image: '/material_piedra.webp' },
  { name: 'Iluminación', image: '/material_iluminacion.webp' }
];

export default function Materials() {
  return (
    <section className={styles.materials}>
      <div className={`container ${styles.layout}`}>
        <div className={styles.text}>
          <span className={styles.label}>Materiales Complementarios</span>
          <h2>A harmonious dialogue of elements.</h2>
          <p>
            While Costa Rican timber is our soul, we elevate our architectural furniture by integrating complementary premium materials. From cast metals to fluted glass, each texture is chosen for its structural integrity and tactile warmth.
          </p>
        </div>
        
        <div className={styles.materialGrid}>
          {MATERIALS.map((mat, index) => (
            <div key={index} className={styles.materialCard}>
              <div className={styles.imageWrapper}>
                <<img 
  src={mat.image} 
  alt={`Material: ${mat.name}`} 
  loading="lazy" 
  decoding="async" 
  />
              </div>
              <h3 className={styles.materialName}>{mat.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
