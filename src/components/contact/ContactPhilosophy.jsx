import styles from './ContactPhilosophy.module.css';
import { useLang } from '../../i18n/LanguageContext';

const COPY = {
  en: {
    title: ['A Collaborative', 'Process.'],
    paragraphs: [
      'Commissioning a piece from Albizia Woods is not a transaction; it is an architectural collaboration. We work closely with homeowners, interior designers, and architects to understand the unique requirements of your space, the flow of light, and your personal aesthetic.',
      'Whether you are outfitting a newly constructed coastal residence or seeking a singular, defining dining table for an urban loft, our team is dedicated to guiding you through wood selection, finishes, and custom dimensions.',
    ],
  },
  es: {
    title: ['Un Proceso', 'Colaborativo.'],
    paragraphs: [
      'Encargar una pieza a Albizia Woods no es una transacción; es una colaboración arquitectónica. Trabajamos de cerca con propietarios, diseñadores de interiores y arquitectos para comprender los requerimientos únicos de su espacio, el flujo de la luz y su estética personal.',
      'Ya sea que estés equipando una residencia costera de nueva construcción o buscando una mesa de comedor singular y distintiva para un loft urbano, nuestro equipo se dedica a guiarte en la selección de maderas, acabados y dimensiones a medida.',
    ],
  },
};

export default function ContactPhilosophy() {
  const { lang } = useLang();
  const c = COPY[lang];

  return (
    <section className={styles.philosophy}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.titleCol}>
          <h2>{c.title[0]}<br/>{c.title[1]}</h2>
        </div>
        <div className={styles.textCol}>
          {c.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
