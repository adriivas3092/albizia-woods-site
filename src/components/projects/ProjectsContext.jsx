import styles from './ProjectsContext.module.css';

export default function ProjectsContext() {
  return (
    <section className={styles.context}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.imageColPrimary}>
          <img src="/Proyectos/Lat90_BAJA093.jpg" alt="Living space with Albizia Woods furniture" loading="lazy" / decoding="async">
        </div>
        
        <div className={styles.contentCol}>
          <div className={styles.textBlock}>
            <h2>Form & Context</h2>
            <p>
              True luxury is quiet. It is found in the way a custom credenza catches the late afternoon light, or how the organic geometry of a coffee table softens the rigid lines of modern architecture.
            </p>
            <p>
              Our pieces do not dominate; they integrate. They are designed as sculptural elements that elevate the atmosphere of the room.
            </p>
          </div>
          <div className={styles.imageColSecondary}>
            <img src="/Proyectos/Lat90_BAJA108.jpg" alt="Architectural integration" loading="lazy" / decoding="async">
          </div>
        </div>
      </div>
    </section>
  );
}
