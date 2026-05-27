import styles from './OriginStory.module.css';

export default function OriginStory() {
  return (
    <section className={styles.origin}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.visualContent}>
          <img 
            src="/photo5.jpg" 
            alt="Vintage woodworking tools" 
            className={styles.image}
          />
        </div>
        <div className={styles.textContent}>
          <span className={styles.label}>The Origin</span>
          <h2>A passion project that became a legacy.</h2>
          <div className={styles.paragraphs}>
            <p>
              Albizia Woods was born in 2018 from a simple family initiative: to design and build custom furniture for our own home. What started as a personal quest for authentic, meaningful pieces soon evolved into a profound dedication to the craft.
            </p>
            <p>
              As we learned to listen to the wood, our passion deepened. Today, Albizia Woods is a premium woodworking studio committed to aesthetic functionality, where every piece honors its Costa Rican roots and natural materials.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
