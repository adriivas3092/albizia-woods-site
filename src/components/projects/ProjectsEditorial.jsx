import styles from './ProjectsEditorial.module.css';

export default function ProjectsEditorial() {
  return (
    <section className={styles.editorial}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.textCol}>
          <span className={styles.label}>Featured Space</span>
          <h2>The Papagayo Residence</h2>
          <div className={styles.description}>
            <p>
              Situated on the Guanacaste coastline, this residence required a careful balance between the dramatic surrounding landscape and the serenity of the interior architecture.
            </p>
            <p>
              We designed an expansive, solid Guanacaste dining table to anchor the open-plan living area, allowing the natural grain to dialogue with the sweeping ocean views and minimalist concrete finishes.
            </p>
          </div>
        </div>
        
        <div className={styles.imageCol}>
          <img src="/Proyectos/Lat90_BAJA088.jpg" alt="Papagayo Residence interior" className={styles.mainImage} loading="lazy" decoding="async">
        </div>
      </div>
      
      <div className={styles.fullWidthImage}>
        <img src="/Proyectos/Lat90_BAJA079.jpg" alt="Dining area details" loading="lazy" decoding="async">
      </div>
    </section>
  );
}
