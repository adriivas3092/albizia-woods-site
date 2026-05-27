import styles from './FinalCTA.module.css';

export default function FinalCTA() {
  return (
    <section className={styles.cta} id="studio">
      <div className={`container ${styles.content}`}>
        <h2>Commission a Piece</h2>
        <p>
          We take on a limited number of bespoke commissions and architectural projects each year to ensure uncompromising quality.
        </p>
        <a href="mailto:studio@albiziawoods.com" className={styles.button}>
          Contact the Studio
        </a>
      </div>
    </section>
  );
}
