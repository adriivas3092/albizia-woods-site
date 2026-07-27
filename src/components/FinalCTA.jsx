import styles from './FinalCTA.module.css';
import { useLang } from '../i18n/LanguageContext';

const COPY = {
  en: {
    title: 'Commission a Piece',
    text: 'We take on a limited number of bespoke commissions and architectural projects each year to ensure uncompromising quality.',
    button: 'Contact the Studio',
  },
  es: {
    title: 'Encargue una Pieza',
    text: 'Cada año aceptamos un número limitado de encargos a medida y proyectos arquitectónicos para garantizar una calidad sin concesiones.',
    button: 'Contactar al Estudio',
  },
};

export default function FinalCTA() {
  const { lang } = useLang();
  const c = COPY[lang];

  return (
    <section className={styles.cta} id="studio">
      <div className={`container ${styles.content}`}>
        <h2>{c.title}</h2>
        <p>{c.text}</p>
        <a href="mailto:studio@albiziawoods.com" className={styles.button}>
          {c.button}
        </a>
      </div>
    </section>
  );
}
