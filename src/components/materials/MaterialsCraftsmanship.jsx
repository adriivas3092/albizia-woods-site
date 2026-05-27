import styles from './MaterialsCraftsmanship.module.css';

export default function MaterialsCraftsmanship() {
  return (
    <section className={styles.craftsmanship}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.contentCol}>
          <h2>The Hand of the Maker</h2>
          <p>
            Machine precision gives our furniture its structural integrity, but it is the human hand that gives it a soul. We believe that true luxury must be felt before it is seen.
          </p>
          <div className={styles.features}>
            <div className={styles.feature}>
              <h4>Tactile Finishing</h4>
              <p>Every piece undergoes rigorous hand-sanding protocols, graduating through micro-grits until the surface feels akin to polished stone, yet remains fundamentally warm to the touch.</p>
            </div>
            <div className={styles.feature}>
              <h4>Natural Patina</h4>
              <p>We reject synthetic lacquers that trap the wood under plastic. Our botanical oil blends allow the wood to breathe, guaranteeing that your furniture will develop a rich, authentic patina over decades of use.</p>
            </div>
          </div>
        </div>
        
        <div className={styles.imageCol}>
          <div className={styles.mainImage}>
            <img src="/photo3.jpg" alt="Artisan hand-finishing wood" loading="lazy" / decoding="async">
          </div>
          <div className={styles.detailImage}>
            <img src="/Proyectos/Lat90_BAJA080.jpg" alt="Joinery and finish detail" loading="lazy" / decoding="async">
          </div>
        </div>
      </div>
    </section>
  );
}
