import styles from './LifestyleEditorial.module.css';

export default function LifestyleEditorial() {
  return (
    <section className={styles.lifestyle}>
      <div className={styles.imageContainer}>
        <img 
          src="/IMG_7881.jpg" 
          alt="Warm modern Costa Rican interior" 
          className={styles.image}
          loading="lazy"
        />
      </div>
      <div className={`container ${styles.content}`}>
        <h2 className={styles.title}>
          Rooted in the landscape, designed for the modern interior.
        </h2>
      </div>
    </section>
  );
}
