import styles from './BespokeWorkshop.module.css';

export default function BespokeWorkshop() {
  return (
    <section className={styles.workshop}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.textCol}>
          <span className={styles.label}>The Workshop</span>
          <h2>Where raw nature meets deliberate intention.</h2>
          <p>
            Our San José atelier is a sanctuary of craftsmanship. Here, modern precision tools work in harmony with traditional hand tools. Every bespoke piece passes through the hands of master artisans who understand the unique temperament of tropical hardwoods.
          </p>
          <div className={styles.details}>
            <div className={styles.detail}>
              <h4>Hand-Rubbed Finishes</h4>
              <p>We use natural oils that penetrate deep into the grain, offering protection without sacrificing the tactile warmth of the wood.</p>
            </div>
            <div className={styles.detail}>
              <h4>Architectural Joinery</h4>
              <p>Exposed tenons and precise dovetails are not just structural necessities; they are celebrated design elements.</p>
            </div>
          </div>
        </div>
        
        <div className={styles.imageCol}>
          <div className={styles.imageWrapperMain}>
            <img src="/photo3.jpg" alt="Master artisan at work" loading="lazy" / decoding="async">
          </div>
          <div className={styles.imageWrapperSub}>
            <img src="/workshop_process_1779816120385.png" alt="Woodworking details" loading="lazy" / decoding="async">
          </div>
        </div>
      </div>
    </section>
  );
}
