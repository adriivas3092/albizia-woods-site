import styles from './MaterialsInquiryCTA.module.css';
import { Link } from 'react-router-dom';

export default function MaterialsInquiryCTA() {
  return (
    <section className={styles.cta}>
      <div className={`container ${styles.content}`}>
        <span className={styles.label}>Material Consultation</span>
        <h2>Feel the difference.</h2>
        <p>
          We invite architects, interior designers, and our bespoke clients to schedule a private consultation to experience the weight, texture, and warmth of our materials firsthand.
        </p>
        <div className={styles.actions}>
          <Link to="/bespoke" className={styles.btnPrimary}>Discuss a Commission</Link>
          <a href="mailto:contact@albiziawoods.com" className={styles.btnSecondary}>Request Samples</a>
        </div>
      </div>
    </section>
  );
}
