import styles from './InquiryCTA.module.css';

export default function InquiryCTA() {
  return (
    <section className={styles.cta}>
      <div className={`container ${styles.content}`}>
        <span className={styles.label}>Acquire a Piece</span>
        <h2>Commission the Extraordinary.</h2>
        <p>
          Our pieces are made to order, ensuring each object receives the time and attention it demands. Reach out to our studio to request pricing, material samples, or to discuss custom architectural adaptations.
        </p>
        <div className={styles.actions}>
          <a href="mailto:studio@albiziawoods.com" className={styles.primaryBtn}>
            Request Catalog & Pricing
          </a>
          <button className={styles.secondaryBtn}>
            Schedule a Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
