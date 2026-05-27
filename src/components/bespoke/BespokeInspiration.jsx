import styles from './BespokeInspiration.module.css';

export default function BespokeInspiration() {
  return (
    <section className={styles.inspiration}>
      <div className={styles.textureOverlay} style={{ backgroundImage: 'url(/texture.png)' }}></div>
      <div className="container">
        <div className={styles.header}>
          <h2>Architectural Context</h2>
          <p>Furniture designed not just for a room, but for the life lived within it.</p>
        </div>
        
        <div className={styles.grid}>
          <div className={styles.mainImage}>
            <img src="/bespoke_inspiration.png" alt="Luxurious moody architectural space" loading="lazy" />
          </div>
          <div className={styles.sideImages}>
            <div className={styles.smallImage}>
              <img src="/Proyectos/Lat90_BAJA079.jpg" alt="Interior detail" loading="lazy" />
            </div>
            <div className={styles.smallImageAlt}>
              <img src="/Proyectos/Lat90_BAJA088.jpg" alt="Design detail" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
