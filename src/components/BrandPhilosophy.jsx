import styles from './BrandPhilosophy.module.css';
import ScrollReveal from './ScrollReveal';
import { useLang } from '../i18n/LanguageContext';

const COPY = {
  en: {
    label: 'Our Philosophy',
    title: 'We believe in the silent dialogue between raw material and human intention.',
    text: 'At Albizia Woods, every piece is an exploration of form, function, and the inherent beauty of Costa Rican timber.',
  },
  es: {
    label: 'Nuestra Filosofía',
    title: 'Creemos en el diálogo silencioso entre la materia prima y la intención humana.',
    text: 'En Albizia Woods, cada pieza es una exploración de la forma, la función y la belleza inherente de la madera costarricense.',
  },
};

export default function BrandPhilosophy() {
  const { lang } = useLang();
  const c = COPY[lang];

  return (
    <section className={styles.philosophy}>
      <div className={styles.textureBg} style={{ backgroundImage: 'url(/texture.webp)' }}></div>
      <div className={`container ${styles.grid}`}>
        <ScrollReveal className={styles.textContent}>
          <span className={styles.label}>{c.label}</span>
          <h2>{c.title}</h2>
          <p>{c.text}</p>
        </ScrollReveal>
      </div>
    </section>
  );
}
