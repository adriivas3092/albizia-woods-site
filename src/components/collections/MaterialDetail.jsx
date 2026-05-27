import styles from './MaterialDetail.module.css';

export default function MaterialDetail() {
  return (
    <section className={styles.material}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.textContent}>
          <span className={styles.label}>Materiality</span>
          <h2>The Language of Grain.</h2>
          <p>
            We believe that wood possesses its own narrative. Every knot, every variation in tone is a record of time and place. Our role is not to mask these imperfections, but to elevate them through rigorous craftsmanship. The resulting pieces are tactile, honest, and profoundly unique.
          </p>
        </div>
        <div className={styles.visualContent}>
          <div className={styles.imageWrapper}>
            <img src="/texture.png" alt="Close up of natural wood grain" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}
