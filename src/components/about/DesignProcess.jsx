import styles from './DesignProcess.module.css';
import { useLang } from '../../i18n/LanguageContext';

const TEAMS = {
  admin: { en: 'Administrative Team', es: 'Equipo Administrativo' },
  design: { en: 'Design Team', es: 'Equipo de Diseño' },
  wood: { en: 'Cabinetmaking Team', es: 'Equipo de Ebanistería' },
  finish: { en: 'Finishing Team', es: 'Equipo de Acabado' },
  designWood: { en: 'Design & Cabinetmaking Teams', es: 'Equipos de Diseño y Ebanistería' },
  woodFinish: { en: 'Cabinetmaking & Finishing Teams', es: 'Equipos de Ebanistería y Acabado' },
};

const STEPS = [
  { num: '01', en: 'Client Request', es: 'Solicitud del cliente', team: 'admin' },
  { num: '02', en: 'Site Visit & Design Advisory', es: 'Visita y asesoría de diseño', team: 'design' },
  { num: '03', en: 'Quotation', es: 'Cotización', team: 'admin' },
  { num: '04', en: 'Manufacturing Plans', es: 'Planos de fabricación', team: 'design' },
  { num: '05', en: 'Procurement', es: 'Gestión de compras', team: 'admin' },
  { num: '06', en: 'Fabrication', es: 'Fabricación', team: 'wood' },
  { num: '07', en: 'Finishing', es: 'Acabados', team: 'finish' },
  { num: '08', en: 'Review, Assembly & Packaging', es: 'Revisión, armado y embalaje', team: 'designWood' },
  { num: '09', en: 'Delivery & Installation', es: 'Entrega e instalación', team: 'woodFinish' },
];

const COPY = {
  en: {
    label: 'Our Methodology',
    title: 'The Design & Fabrication Process.',
    text: 'A meticulous, nine-step journey from the initial vision to the final installation.',
  },
  es: {
    label: 'Nuestra Metodología',
    title: 'El Proceso de Diseño y Fabricación.',
    text: 'Un recorrido meticuloso de nueve pasos, desde la visión inicial hasta la instalación final.',
  },
};

export default function DesignProcess() {
  const { lang } = useLang();
  const c = COPY[lang];

  return (
    <section className={styles.processSection}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.label}>{c.label}</span>
          <h2>{c.title}</h2>
          <p>{c.text}</p>
        </div>

        <div className={styles.timeline}>
          {STEPS.map((step, index) => (
            <div key={index} className={styles.circleStep}>
              <div className={styles.stepNum}>{step.num}</div>
              <h3>{step[lang]}</h3>
              <span className={styles.team}>{TEAMS[step.team][lang]}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
