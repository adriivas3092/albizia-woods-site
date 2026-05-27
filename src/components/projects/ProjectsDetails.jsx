import styles from './ProjectsDetails.module.css';

export default function ProjectsDetails() {
  return (
    <section className={styles.details}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.textCol}>
          <h2>Tactile Moments</h2>
          <p>
            Photography often captures the grand scale of a space, but true luxury resides in the details. The seamless joinery, the soft bevel of an edge, the way a natural wood grain flows uninterrupted across a surface—these are the hallmarks of our workshop.
          </p>
        </div>
        
        <div className={styles.imageGrid}>
          <div className={styles.imageBox}>
            <img src="/Proyectos/Lat90_BAJA070.jpg" alt="Wood grain detail" loading="lazy" decoding="async">
          </div>
          <div className={styles.imageBox}>
            <img src="/Proyectos/Lat90_BAJA080.jpg" alt="Craftsmanship detail" loading="lazy" decoding="async">
          </div>
        </div>
      </div>
    </section>
  );
}
