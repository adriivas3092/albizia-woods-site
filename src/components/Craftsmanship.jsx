import styles from './Craftsmanship.module.css';

export default function Craftsmanship() {
  return (
    <section className={styles.craft}>
      <div className={styles.textureBg} style={{ backgroundImage: 'url(/texture.webp)' }}></div>
      <div className={`container ${styles.grid}`}>
        <div className={styles.imageCol}>
           <img src="/artisan_details.webp" alt="Woodworker carving wood with a chisel" className={styles.image} loading="lazy" decoding="async" />
        </div>
        <div className={styles.textCol}>
          <span className={styles.label}>Artisan Details</span>
          <h2>The integrity of the joint, the warmth of the grain.</h2>
          <p>
            We honor the traditions of Costa Rican woodworking, using slow, deliberate techniques that celebrate natural imperfections. Mortise and tenon joinery ensures our pieces last generations.
          </p>
        </div>
      </div>
    </section>
  );
}
