import styles from './ContactPhilosophy.module.css';

export default function ContactPhilosophy() {
  return (
    <section className={styles.philosophy}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.titleCol}>
          <h2>A Collaborative<br/>Process.</h2>
        </div>
        <div className={styles.textCol}>
          <p>
            Commissioning a piece from Albizia Woods is not a transaction; it is an architectural collaboration. We work closely with homeowners, interior designers, and architects to understand the unique requirements of your space, the flow of light, and your personal aesthetic.
          </p>
          <p>
            Whether you are outfitting a newly constructed coastal residence or seeking a singular, defining dining table for an urban loft, our team is dedicated to guiding you through wood selection, finishes, and custom dimensions.
          </p>
        </div>
      </div>
    </section>
  );
}
