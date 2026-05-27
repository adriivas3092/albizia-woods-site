import styles from './BespokePhilosophy.module.css';

export default function BespokePhilosophy() {
  return (
    <section className={styles.philosophy}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.labelCol}>
          <span className={styles.label}>Bespoke Philosophy</span>
        </div>
        <div className={styles.textCol}>
          <h2>A piece of furniture should not merely fill a space; it should anchor the architecture and elevate the ritual of living.</h2>
          
          <div className={styles.editorial}>
            <p>
              Our bespoke service is an invitation to collaborate. We transcend standard catalog offerings to design pieces that respond intimately to your environment, your routines, and your aesthetic sensibilities. 
            </p>
            <p>
              Through a consultative process, we merge our deep understanding of Costa Rican hardwoods with your unique vision. Every dimension is tailored. Every finish is intentional. The result is a tactile, monumental object crafted with uncompromising integrity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
