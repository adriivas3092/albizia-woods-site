import styles from './BespokeProcess.module.css';
import { useLang } from '../../i18n/LanguageContext';

const STEPS = [
  {
    num: '01',
    en: { title: 'Consultation', desc: 'An initial dialogue to understand the scale, intent, and architectural context of your project.' },
    es: { title: 'Consulta', desc: 'Un diálogo inicial para entender la escala, la intención y el contexto arquitectónico de tu proyecto.' },
  },
  {
    num: '02',
    en: { title: 'Concept & Inspiration', desc: 'Translating emotional and spatial requirements into preliminary sketches and conceptual directions.' },
    es: { title: 'Concepto e Inspiración', desc: 'Traducimos los requerimientos emocionales y espaciales en bocetos preliminares y direcciones conceptuales.' },
  },
  {
    num: '03',
    en: { title: 'Material Selection', desc: 'Curating specific timber slabs and complementary finishes that align with the design narrative.' },
    es: { title: 'Selección de Materiales', desc: 'Seleccionamos tablones de madera específicos y acabados complementarios que se alinean con la narrativa del diseño.' },
  },
  {
    num: '04',
    en: { title: 'Design Development', desc: 'Refining the concept through detailed 3D modeling and technical shop drawings for your approval.' },
    es: { title: 'Desarrollo del Diseño', desc: 'Refinamos el concepto mediante modelado 3D detallado y planos técnicos de taller para tu aprobación.' },
  },
  {
    num: '05',
    en: { title: 'Craftsmanship', desc: 'The physical manifestation. Slow, deliberate fabrication by our master woodworkers.' },
    es: { title: 'Artesanía', desc: 'La manifestación física. Fabricación lenta y deliberada por nuestros maestros ebanistas.' },
  },
  {
    num: '06',
    en: { title: 'Delivery & Installation', desc: 'White-glove placement within your space, ensuring perfect integration.' },
    es: { title: 'Entrega e Instalación', desc: 'Colocación con guante blanco dentro de tu espacio, garantizando una integración perfecta.' },
  },
];

const COPY = {
  en: { title: 'The Design Process' },
  es: { title: 'El Proceso de Diseño' },
};

export default function BespokeProcess() {
  const { lang } = useLang();
  const c = COPY[lang];

  return (
    <section className={styles.process}>
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <h2>{c.title}</h2>
        </div>

        <div className={styles.timeline}>
          {STEPS.map((step, index) => (
            <div key={index} className={styles.step}>
              <div className={styles.num}>{step.num}</div>
              <div className={styles.content}>
                <h3>{step[lang].title}</h3>
                <p>{step[lang].desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
