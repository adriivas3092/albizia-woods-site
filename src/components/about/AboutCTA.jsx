import styles from './AboutCTA.module.css';
import { Link } from 'react-router-dom';

export default function AboutCTA() {
  return (
    <section className={styles.cta}>
      <div className={`container ${styles.content}`}>
        <span className={styles.label}>Work With Us</span>
        <h2>Begin the conversation.</h2>
        <p>
          Whether you are an architect sourcing for a luxury project or an individual looking for a timeless heirloom, our studio is ready to collaborate.
        </p>
        <div className={styles.actions}>
          <a href="mailto:studio@albiziawoods.com" className={styles.primaryBtn}>
            Contact the Studio
          </a>
          <Link to="/" className={styles.secondaryBtn}>
            Return to Collections
          </Link>
        </div>
      </div>
    </section>
  );
}
