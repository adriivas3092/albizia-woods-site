import styles from './ProjectsInquiryCTA.module.css';
import { Link } from 'react-router-dom';

export default function ProjectsInquiryCTA() {
  return (
    <section className={styles.cta}>
      <div className={styles.textureOverlay} style={{ backgroundImage: 'url(/texture.webp)' }}></div>
      <div className={`container ${styles.content}`}>
        <span className={styles.label}>Next Steps</span>
        <h2>Envision your space.</h2>
        <p>
          Whether you are an architect seeking custom fabrication or a homeowner looking for that defining signature piece, our design team is ready to collaborate.
        </p>
        <div className={styles.actions}>
          <Link to="/bespoke" className={styles.btnPrimary}>Begin a Commission</Link>
          <a href="mailto:contact@albiziawoods.com" className={styles.btnSecondary}>General Inquiry</a>
        </div>
      </div>
    </section>
  );
}
