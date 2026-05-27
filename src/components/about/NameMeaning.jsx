import styles from './NameMeaning.module.css';

export default function NameMeaning() {
  return (
    <section className={styles.meaning}>
      <div className={`container ${styles.layout}`}>
        <div className={styles.textContainer}>
          <span className={styles.label}>Our Name</span>
          <h2>Albizia Niopoides</h2>
          <p>
            Named after the Guanacaste Blanco tree, our studio draws profound inspiration from its symbolism. The Albizia Niopoides represents deep roots, resilience, and a quiet, imposing elegance. 
            It is a reflection of our connection to Costa Rica—grounded in nature, reaching for architectural beauty.
          </p>
        </div>
        <div className={styles.imageContainer}>
          <img 
            src="/albizia_tree_1779816107533.webp" 
            alt="Albizia Niopoides Tree" 
            className={styles.image}
          loading="lazy" decoding="async" />
        </div>
      </div>
    </section>
  );
}
