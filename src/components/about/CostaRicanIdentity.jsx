import styles from './CostaRicanIdentity.module.css';

export default function CostaRicanIdentity() {
  return (
    <section className={styles.identity}>
      <div className={styles.fullImage}>
         <img 
            src="/artboard1.webp" 
            alt="Costa Rican tropical modernism architecture" 
            className={styles.image}
          loading="lazy" decoding="async" />
      </div>
      <div className={`container ${styles.content}`}>
        <div className={styles.textContent}>
          <span className={styles.label}>Our Identity</span>
          <h2>Tropical Modernism</h2>
          <p>
            Our roots are undeniably Costa Rican. We draw inspiration from the lush, wild landscapes and the warm, golden light of the tropics. This is reflected in our use of local, sustainable timbers and a design philosophy that embraces organic textures while adhering to strict, modern architectural principles.
          </p>
        </div>
      </div>
    </section>
  );
}
