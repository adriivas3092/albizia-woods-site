import styles from './MissionVision.module.css';

export default function MissionVision() {
  return (
    <section className={styles.mission}>
      <div className={`container ${styles.layout}`}>
        <div className={styles.statement}>
          <span className={styles.label}>Our Mission</span>
          <h2>To craft heirloom furniture that anchors the spaces where life unfolds, honoring Costa Rican materials with absolute integrity.</h2>
        </div>
        <div className={styles.statement}>
          <span className={styles.label}>Our Vision</span>
          <h2>To be a globally recognized studio that defines the standard for tropical modern luxury and artisanal woodworking.</h2>
        </div>
      </div>
    </section>
  );
}
