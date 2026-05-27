import styles from './CustomExperience.module.css';

export default function CustomExperience() {
  return (
    <section className={styles.custom} id="bespoke">
      <div className={`container ${styles.layout}`}>
        <div className={styles.header}>
          <span className={styles.label}>Bespoke Furniture</span>
          <h2>A collaboration between space, material, and vision.</h2>
        </div>
        
        <div className={styles.content}>
          <div className={styles.processList}>
            <div className={styles.processItem}>
              <span>01</span>
              <h3>Consultation</h3>
              <p>Understanding your architectural space and intent.</p>
            </div>
            <div className={styles.processItem}>
              <span>02</span>
              <h3>Design & Material Selection</h3>
              <p>Curating Costa Rican timbers that speak to your environment.</p>
            </div>
            <div className={styles.processItem}>
              <span>03</span>
              <h3>Artisan Crafting</h3>
              <p>Meticulous shaping and joinery by master woodworkers.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
