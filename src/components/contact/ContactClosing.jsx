import styles from './ContactClosing.module.css';

export default function ContactClosing() {
  return (
    <section className={styles.closing}>
      <div className={styles.textureOverlay} style={{ backgroundImage: 'url(/texture.webp)' }}></div>
      <div className={`container ${styles.content}`}>
        <h2>We look forward to building your legacy.</h2>
      </div>
    </section>
  );
}
