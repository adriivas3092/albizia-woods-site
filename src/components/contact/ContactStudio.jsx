import styles from './ContactStudio.module.css';
import { useLang } from '../../i18n/LanguageContext';

const COPY = {
  en: {
    title: 'The Atelier',
    text: 'Located in the heart of Costa Rica, our workshop is a space dedicated to the slow, meticulous art of woodworking. Every piece is designed, milled, and finished by our master artisans under one roof.',
    locationLabel: 'Location', location: ['San José, Costa Rica', 'By Appointment Only'],
    contactLabel: 'Direct Contact',
    socialLabel: 'Social',
  },
  es: {
    title: 'El Taller',
    text: 'Ubicado en el corazón de Costa Rica, nuestro taller es un espacio dedicado al arte lento y meticuloso de la ebanistería. Cada pieza es diseñada, labrada y acabada por nuestros maestros artesanos bajo un mismo techo.',
    locationLabel: 'Ubicación', location: ['San José, Costa Rica', 'Solo con Cita Previa'],
    contactLabel: 'Contacto Directo',
    socialLabel: 'Redes Sociales',
  },
};

export default function ContactStudio() {
  const { lang } = useLang();
  const c = COPY[lang];

  return (
    <section className={styles.studio}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.imageCol}>
          <img src="/photo3.webp" alt="Albizia Woods Studio" loading="lazy" decoding="async" />
        </div>

        <div className={styles.infoCol}>
          <div className={styles.infoBlock}>
            <h3>{c.title}</h3>
            <p>{c.text}</p>
          </div>

          <div className={styles.detailsGrid}>
            <div className={styles.detailItem}>
              <h4>{c.locationLabel}</h4>
              <p>{c.location[0]}</p>
              <p>{c.location[1]}</p>
            </div>
            <div className={styles.detailItem}>
              <h4>{c.contactLabel}</h4>
              <p><a href="mailto:info@albiziawoods.com">info@albiziawoods.com</a></p>
              <p><a href="tel:+50600000000">+506 0000 0000</a></p>
            </div>
            <div className={styles.detailItem}>
              <h4>{c.socialLabel}</h4>
              <p><a href="#">Instagram</a></p>
              <p><a href="#">Pinterest</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
