import styles from './WorkshopProcess.module.css';

export default function WorkshopProcess() {
  return (
    <section className={styles.workshop}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.textCol}>
          <span className={styles.label}>The Workshop</span>
          <h2>Shaped by human hands.</h2>
          <p>
            Our process is deliberately slow. We celebrate the tactile nature of woodworking—the resistance of the grain against the chisel, the scent of fresh cut timber, the warmth of the final hand-rubbed finish. It is an intimate dialogue between artisan and material.
          </p>
        </div>
        <div className={styles.imageCol}>
           <img 
            src="/workshop_process_1779816120385.webp" 
            alt="Woodworking chisel macro shot" 
            className={styles.image}
          loading="lazy" decoding="async" />
        </div>
      </div>
    </section>
  );
}
