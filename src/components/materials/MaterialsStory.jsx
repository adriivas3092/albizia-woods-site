import styles from './MaterialsStory.module.css';

export default function MaterialsStory() {
  return (
    <section className={styles.story}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.imageCol}>
          <img src="/Proyectos/Lat90_BAJA070.webp" alt="Macro detail of natural wood grain" loading="lazy" decoding="async" />
        </div>
        
        <div className={styles.textCol}>
          <span className={styles.label}>Material Authenticity</span>
          <h2>The living record of time, weather, and earth.</h2>
          <div className={styles.editorial}>
            <p>
              Wood is not a static material. It is a living, breathing archive of the tropical environment. Every knot, variation in color, and shift in the grain tells the story of the Guanacaste and Cenizaro trees from which they were sustainably harvested.
            </p>
            <p>
              We do not seek to mask these natural imperfections; we elevate them. Through meticulous hand-sanding and the application of penetrating natural oils, we draw out the deep, tactile warmth inherent in every slab, ensuring it continues to age gracefully over generations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
