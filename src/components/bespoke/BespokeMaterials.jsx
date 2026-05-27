import styles from './BespokeMaterials.module.css';

export default function BespokeMaterials() {
  return (
    <section className={styles.materials}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.imageCol}>
          <img src="/material_metal.png" alt="Brushed metal texture" className={styles.image} loading="lazy" / decoding="async">
          <img src="/material_piedra.png" alt="Travertine stone texture" className={`${styles.image} ${styles.offsetImage}`} loading="lazy" / decoding="async">
        </div>
        
        <div className={styles.textCol}>
          <h2>Materials & Finishes</h2>
          <p>
            The essence of our bespoke service lies in the uncompromised selection of materials. We source the finest Costa Rican hardwoods—Guanacaste, Cenizaro, and Teak—each slab chosen for its unique grain character and structural integrity.
          </p>
          <p>
            To elevate the organic warmth of the wood, we integrate premium complementary finishes: brushed brass, fluted architectural glass, natural travertine, and tactile bouclé upholstery. 
          </p>
        </div>
      </div>
    </section>
  );
}
