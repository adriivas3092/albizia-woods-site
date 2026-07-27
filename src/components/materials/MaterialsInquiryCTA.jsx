import styles from './MaterialsInquiryCTA.module.css';
import { Link } from 'react-router-dom';
import { useLang } from '../../i18n/LanguageContext';

const COPY = {
  en: {
    label: 'Material Consultation',
    title: 'Feel the difference.',
    text: 'We invite architects, interior designers, and our bespoke clients to schedule a private consultation to experience the weight, texture, and warmth of our materials firsthand.',
    primary: 'Discuss a Commission',
    secondary: 'Request Samples',
  },
  es: {
    label: 'Consulta de Materiales',
    title: 'Sienta la diferencia.',
    text: 'Invitamos a arquitectos, diseñadores de interiores y a nuestros clientes a medida a agendar una consulta privada para experimentar de primera mano el peso, la textura y la calidez de nuestros materiales.',
    primary: 'Conversar un Encargo',
    secondary: 'Solicitar Muestras',
  },
};

export default function MaterialsInquiryCTA() {
  const { lang } = useLang();
  const c = COPY[lang];

  return (
    <section className={styles.cta}>
      <div className={`container ${styles.content}`}>
        <span className={styles.label}>{c.label}</span>
        <h2>{c.title}</h2>
        <p>{c.text}</p>
        <div className={styles.actions}>
          <Link to="/bespoke" className={styles.btnPrimary}>{c.primary}</Link>
          <a href="mailto:contact@albiziawoods.com" className={styles.btnSecondary}>{c.secondary}</a>
        </div>
      </div>
    </section>
  );
}
