import styles from './MaterialsInspiration.module.css';

export default function MaterialsInspiration() {
  return (
    <section className={styles.inspiration}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.imageCol}>
          <img src="/projects_hero.png" alt="Materials in architectural context" loading="lazy" />
        </div>
        <div className={styles.textCol}>
          <div className={styles.card}>
            <h2>Contextual Harmony</h2>
            <p>
              When placed within a curated architectural interior, our woods do not merely occupy space—they interact with the ambient light, the acoustics, and the temperature of the room.
            </p>
            <p>
              Whether bathed in the golden hour sun of a Guanacaste coastline or absorbing the soft, diffuse light of an urban apartment, the material responds dynamically to its environment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
