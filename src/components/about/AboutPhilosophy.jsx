import styles from './AboutPhilosophy.module.css';

export default function AboutPhilosophy() {
  return (
    <section className={styles.philosophy}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.visualContent}>
          <div className={styles.textureBg} style={{ backgroundImage: 'url(/texture.webp)' }}></div>
        </div>
        <div className={styles.textContent}>
          <span className={styles.label}>Design Philosophy</span>
          <h2>Aesthetic Functionality.</h2>
          <p>
            We strip away the unnecessary. Our approach to design centers on the belief that a piece of furniture should not only serve a purpose but elevate the space it inhabits. We balance the raw, organic beauty of the wood with clean, architectural lines.
          </p>
        </div>
      </div>
    </section>
  );
}
