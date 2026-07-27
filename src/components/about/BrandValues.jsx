import styles from './BrandValues.module.css';
import { useLang } from '../../i18n/LanguageContext';

const COPY = {
  en: {
    header: 'Core Values',
    values: [
      { title: 'Passion', text: 'A deep-seated love for the craft, driving us to perfect every joint and polish.' },
      { title: 'Integrity', text: 'Honoring the material. We use sustainable practices to respect the Costa Rican environment.' },
      { title: 'Belonging', text: "Creating pieces that don't just fill a room, but belong there, grounding the architecture." },
      { title: 'Learning', text: 'Continuous mastery. We are always studying new techniques and embracing the evolution of design.' },
    ],
  },
  es: {
    header: 'Valores Fundamentales',
    values: [
      { title: 'Pasión', text: 'Un amor profundo por el oficio que nos impulsa a perfeccionar cada unión y cada acabado.' },
      { title: 'Integridad', text: 'Honramos el material. Empleamos prácticas sostenibles para respetar el entorno costarricense.' },
      { title: 'Pertenencia', text: 'Creamos piezas que no solo llenan una habitación, sino que pertenecen a ella y anclan la arquitectura.' },
      { title: 'Aprendizaje', text: 'Maestría continua. Siempre estudiamos nuevas técnicas y abrazamos la evolución del diseño.' },
    ],
  },
};

export default function BrandValues() {
  const { lang } = useLang();
  const c = COPY[lang];

  return (
    <section className={styles.values}>
      <div className={`container ${styles.layout}`}>
        <div className={styles.header}>
          <h2>{c.header}</h2>
        </div>
        <div className={styles.grid}>
          {c.values.map((val, idx) => (
            <div key={idx} className={styles.card}>
              <span>0{idx + 1}</span>
              <h3>{val.title}</h3>
              <p>{val.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
