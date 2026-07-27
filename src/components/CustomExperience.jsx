import styles from './CustomExperience.module.css';
import { useLang } from '../i18n/LanguageContext';

const COPY = {
  en: {
    label: 'Bespoke Furniture',
    title: 'A collaboration between space, material, and vision.',
    steps: [
      { title: 'Consultation', text: 'Understanding your architectural space and intent.' },
      { title: 'Design & Material Selection', text: 'Curating Costa Rican timbers that speak to your environment.' },
      { title: 'Artisan Crafting', text: 'Meticulous shaping and joinery by master woodworkers.' },
    ],
  },
  es: {
    label: 'Mobiliario a Medida',
    title: 'Una colaboración entre el espacio, el material y la visión.',
    steps: [
      { title: 'Consulta', text: 'Entendemos tu espacio arquitectónico y tu intención.' },
      { title: 'Diseño y Selección de Materiales', text: 'Seleccionamos maderas costarricenses en armonía con su entorno.' },
      { title: 'Elaboración Artesanal', text: 'Modelado y ensamblaje meticuloso por maestros ebanistas.' },
    ],
  },
};

export default function CustomExperience() {
  const { lang } = useLang();
  const c = COPY[lang];

  return (
    <section className={styles.custom} id="bespoke">
      <div className={`container ${styles.layout}`}>
        <div className={styles.header}>
          <span className={styles.label}>{c.label}</span>
          <h2>{c.title}</h2>
        </div>

        <div className={styles.content}>
          <div className={styles.processList}>
            {c.steps.map((step, index) => (
              <div key={index} className={styles.processItem}>
                <span>0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
