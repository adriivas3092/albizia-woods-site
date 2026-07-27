import styles from './AboutCTA.module.css';
import { Link } from 'react-router-dom';
import { useLang } from '../../i18n/LanguageContext';

const COPY = {
  en: {
    label: 'Work With Us',
    title: 'Begin the conversation.',
    text: 'Whether you are an architect sourcing for a luxury project or an individual looking for a timeless heirloom, our studio is ready to collaborate.',
    primary: 'Contact the Studio',
    secondary: 'Return to Home',
  },
  es: {
    label: 'Trabaje Con Nosotros',
    title: 'Comencemos la conversación.',
    text: 'Ya sea que usted sea un arquitecto en busca de piezas para un proyecto de lujo o una persona que busca una herencia atemporal, nuestro estudio está listo para colaborar.',
    primary: 'Contactar al Estudio',
    secondary: 'Volver al Inicio',
  },
};

export default function AboutCTA() {
  const { lang } = useLang();
  const c = COPY[lang];

  return (
    <section className={styles.cta}>
      <div className={`container ${styles.content}`}>
        <span className={styles.label}>{c.label}</span>
        <h2>{c.title}</h2>
        <p>{c.text}</p>
        <div className={styles.actions}>
          <a href="mailto:studio@albiziawoods.com" className={styles.primaryBtn}>
            {c.primary}
          </a>
          <Link to="/" className={styles.secondaryBtn}>
            {c.secondary}
          </Link>
        </div>
      </div>
    </section>
  );
}
