import styles from './ProjectsInquiryCTA.module.css';
import { Link } from 'react-router-dom';
import { useLang } from '../../i18n/LanguageContext';

const COPY = {
  en: {
    label: 'Next Steps',
    title: 'Envision your space.',
    text: 'Whether you are an architect seeking custom fabrication or a homeowner looking for that defining signature piece, our design team is ready to collaborate.',
    primary: 'Begin a Commission',
    secondary: 'General Inquiry',
  },
  es: {
    label: 'Próximos Pasos',
    title: 'Imagine su espacio.',
    text: 'Ya sea que seás un arquitecto en busca de fabricación a medida o un propietario que busca esa pieza distintiva, nuestro equipo de diseño está listo para colaborar con vos.',
    primary: 'Iniciar un Encargo',
    secondary: 'Consulta General',
  },
};

export default function ProjectsInquiryCTA() {
  const { lang } = useLang();
  const c = COPY[lang];

  return (
    <section className={styles.cta}>
      <div className={styles.textureOverlay} style={{ backgroundImage: 'url(/texture.webp)' }}></div>
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
