import styles from './ContactStudio.module.css';

export default function ContactStudio() {
  return (
    <section className={styles.studio}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.imageCol}>
          <img src="/photo3.webp" alt="Albizia Woods Studio" loading="lazy" decoding="async" />
        </div>
        
        <div className={styles.infoCol}>
          <div className={styles.infoBlock}>
            <h3>The Atelier</h3>
            <p>
              Located in the heart of Costa Rica, our workshop is a space dedicated to the slow, meticulous art of woodworking. Every piece is designed, milled, and finished by our master artisans under one roof.
            </p>
          </div>
          
          <div className={styles.detailsGrid}>
            <div className={styles.detailItem}>
              <h4>Location</h4>
              <p>San José, Costa Rica</p>
              <p>By Appointment Only</p>
            </div>
            <div className={styles.detailItem}>
              <h4>Direct Contact</h4>
              <p><a href="mailto:contact@albiziawoods.com">contact@albiziawoods.com</a></p>
              <p><a href="tel:+50600000000">+506 0000 0000</a></p>
            </div>
            <div className={styles.detailItem}>
              <h4>Social</h4>
              <p><a href="#">Instagram</a></p>
              <p><a href="#">Pinterest</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
