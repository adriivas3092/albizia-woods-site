import styles from './ProjectsContext.module.css';
import { useLang } from '../../i18n/LanguageContext';

const COPY = {
  en: {
    title: 'Form & Context',
    paragraphs: [
      'True luxury is quiet. It is found in the way a custom credenza catches the late afternoon light, or how the organic geometry of a coffee table softens the rigid lines of modern architecture.',
      'Our pieces do not dominate; they integrate. They are designed as sculptural elements that elevate the atmosphere of the room.',
    ],
  },
  es: {
    title: 'Forma y Contexto',
    paragraphs: [
      'El verdadero lujo es silencioso. Se encuentra en la forma en que una credenza a medida atrapa la luz de la tarde, o en cómo la geometría orgánica de una mesa de centro suaviza las líneas rígidas de la arquitectura moderna.',
      'Nuestras piezas no dominan; se integran. Están diseñadas como elementos escultóricos que elevan la atmósfera de la sala.',
    ],
  },
};

export default function ProjectsContext() {
  const { lang } = useLang();
  const c = COPY[lang];

  return (
    <section className={styles.context}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.imageColPrimary}>
          <img src="/Proyectos/Lat90_BAJA093.webp" alt="Living space with Albizia Woods furniture" loading="lazy" decoding="async" />
        </div>

        <div className={styles.contentCol}>
          <div className={styles.textBlock}>
            <h2>{c.title}</h2>
            {c.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className={styles.imageColSecondary}>
            <img src="/Proyectos/Lat90_BAJA108.webp" alt="Architectural integration" loading="lazy" decoding="async" />
          </div>
        </div>
      </div>
    </section>
  );
}
