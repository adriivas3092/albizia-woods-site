import styles from './BrandPhilosophy.module.css';
import ScrollReveal from './ScrollReveal';

export default function BrandPhilosophy() {
  return (
    <section className={styles.philosophy}>
      <div className={styles.textureBg} style={{ backgroundImage: 'url(/texture.png)' }}></div>
      <div className={`container ${styles.grid}`}>
        <ScrollReveal className={styles.textContent}>
          <span className={styles.label}>Our Philosophy</span>
          <h2>We believe in the silent dialogue between raw material and human intention.</h2>
          <p>
            At Albizia Woods, every piece is an exploration of form, function, and the inherent beauty of Costa Rican timber. We strip away the unnecessary to reveal the architectural soul of the wood.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
